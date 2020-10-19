import { InMemoryGenericDAO } from './in-memory-generic.dao';
import { Entity } from './entity';

interface Person extends Entity {
  name: string;
}

describe('InMemoryGenericDAO', () => {
  let personDAO: InMemoryGenericDAO<Person>;

  beforeEach(() => {
    personDAO = new InMemoryGenericDAO<Person>();
  });

  describe('#create', () => {
    it('should return a promise', () => {
      const promise = personDAO.create({ name: 'john doe' });
      expect(promise instanceof Promise).toBeTruthy();
    });

    it('should set the id property', async () => {
      const person = await personDAO.create({ name: 'john doe' });
      expect(person.id).toBeDefined();
    });
  });

  describe('#findOne', () => {
    it('should return an object given it`s id', async () => {
      const createdPerson = await personDAO.create({ name: 'john doe' });
      const retrievedPerson = await personDAO.findOne({ id: createdPerson.id });
      expect(retrievedPerson).toBe(createdPerson);
    });
  });
});

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
  });
});

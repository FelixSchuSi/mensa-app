import { Entity } from './entity';

export interface Group extends Entity {
  name: string;
  joinCode: string;
  members: Array<string>;
  owner: string;
}

import { Entity } from './entity';
import { Image } from './image';

export interface Group extends Entity {
  name: string;
  joinCode: string;
  members: string[];
  owner: string;
  image: Image;
}

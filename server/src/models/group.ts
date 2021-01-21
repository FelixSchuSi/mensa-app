import { Entity } from './entity';
import { Image } from './image';
import { MensaVisit } from './mensa-visit';

export interface Group extends Entity {
  name: string;
  joinCode: string;
  members: string[];
  owner: string;
  image: Image;
  mensaVisits: MensaVisit[];
}

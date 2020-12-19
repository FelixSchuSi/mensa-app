import { Entity } from './entity';

export interface User extends Entity {
  name: string;
  email: string;
  password: string;
  status: 'STUDENT' | 'GUEST' | 'EMPLOYEE';
  diet: 'NO_MEAT' | 'VEGETARIAN' | 'VEGAN';
  indigestibilities: string[];
}

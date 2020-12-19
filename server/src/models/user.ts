import { Entity } from './entity';

export interface User extends Entity {
  name: string;
  email: string;
  password: string;
  status: 'Student' | 'Guest' | 'Employee';
  indigestibility: string;
}

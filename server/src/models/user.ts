import { Entity } from './entity';
import { Status } from './status';
import { MealFilterConfig } from './meal-filter-config';

export interface User extends Entity {
  name: string;
  email: string;
  password: string;
  groupMemberships: Array<string>;
  filterConfig: MealFilterConfig;
  status: Status;
}

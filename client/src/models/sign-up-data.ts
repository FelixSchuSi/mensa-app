import { Status } from '../../../server/src/models/status';
import { MealFilterConfig } from './meal-filter-config';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  filterConfig: MealFilterConfig;
  status: Status;
}

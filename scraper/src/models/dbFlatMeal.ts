import { Entity } from '../../../server/src/models/entity';
import { FlatMeal } from '../../../server/src/models/flatMeal';

export interface DbFlatMeal extends FlatMeal, Entity {}

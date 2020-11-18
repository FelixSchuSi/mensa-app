import { Entity } from '../../../server/src/models/entity';
import { FlatMeal } from './flatMeal';

export interface DbFlatMeal extends FlatMeal, Entity {}

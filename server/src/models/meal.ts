import { Entity } from './entity';
import { FlatMeal } from '../../../scraper/src/models/flatMeal';
export interface Meal extends Entity, FlatMeal {}

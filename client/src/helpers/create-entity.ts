import { forceUpdate } from '@ionic/core/dist/types/stencil-public-runtime';

import { v4 as uuidv4 } from 'uuid';
import { Entity } from '../../../server/src/models/entity';

export function createEntity(): Entity {
  return {
    id: uuidv4(),
    createdAt: new Date().getTime()
  };
}

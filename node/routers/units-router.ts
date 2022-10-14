import { Router } from 'express';
import { getArmyRosterController } from '../controllers/get-army-roster-controller';
import { getUnitTypesController } from '../controllers/get-unit-types-controller';
import { postArmyRosterController } from '../controllers/post-army-roster-controller';

/**
 * Router that lives on /units
 */
export const unitsRouter = Router();

unitsRouter.get('/types', getUnitTypesController);
unitsRouter.get('', getArmyRosterController);
unitsRouter.post('',postArmyRosterController);
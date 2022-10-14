import { Router } from 'express';
import { getArmyRosterController } from '../controllers/get-army-roster-controller';
import { getUnitTypesController } from '../controllers/get-unit-types-controller';

/**
 * Router that lives on /units
 */
export const unitsRouter = Router();

unitsRouter.get('/types', getUnitTypesController);
unitsRouter.get('', getArmyRosterController);

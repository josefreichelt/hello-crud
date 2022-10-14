import { Router } from 'express';
import { deleteUnitFromArmyRosterController } from '../controllers/delete-unit-from-roster-controller';
import { getArmyRosterController } from '../controllers/get-army-roster-controller';
import { getUnitTypesController } from '../controllers/get-unit-types-controller';
import { postUnitToArmyRosterController } from '../controllers/post-unit-to-army-roster-controller';

/**
 * Router that lives on /units
 */
export const unitsRouter = Router();

unitsRouter.get('/types', getUnitTypesController);
unitsRouter.get('', getArmyRosterController);
unitsRouter.post('', postUnitToArmyRosterController);
unitsRouter.delete('', deleteUnitFromArmyRosterController);

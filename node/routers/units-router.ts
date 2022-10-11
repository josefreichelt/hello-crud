import { Router } from 'express';
import { getUnitTypesController } from '../controllers/get-unit-types-controller';

/**
 * Router that lives on /units
 */
export const unitsRouter = Router();

unitsRouter.get('/types', getUnitTypesController);

import { Request, Response } from 'express';
import { getUnitTypesFromDb } from '../models/get-unit-types-model';

export async function getUnitTypesController(_req: Request, res: Response) {
    try {
        const unitData = await getUnitTypesFromDb();
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

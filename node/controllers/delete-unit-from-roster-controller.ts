import { Request, Response } from 'express';
import { deleteUnitFromArmyRosterFromDb } from '../models/delete-unit-from-army-roster-model';

export async function deleteUnitFromArmyRosterController(req: Request, res: Response) {
    try {
        const roster_unit_id = Number(req.body.roster_id) || 0;
        const unitData = await deleteUnitFromArmyRosterFromDb(roster_unit_id);
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

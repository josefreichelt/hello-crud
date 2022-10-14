import { Request, Response } from 'express';
import { updateUnitInArmyRosterInDb } from '../models/update-unit-in-army-roster-model';

export async function updateUnitInArmyRosterController(
    req: Request,
    res: Response
) {
    try {
        const rosterId = Number(req.body.roster_id) || 0;
        const isAdding = Boolean(req.body.is_adding);
        const unitData = await updateUnitInArmyRosterInDb(rosterId, isAdding);
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

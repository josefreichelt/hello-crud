import { Request, Response } from 'express';
import { postUnitToArmyRosterToDb } from '../models/post-unit-to-army-roster-model';

export async function postUnitToArmyRosterController(req: Request, res: Response) {
    try {
        const unit_id = Number(req.body.unit_id) || 0;
        const unitData = await postUnitToArmyRosterToDb(unit_id);
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

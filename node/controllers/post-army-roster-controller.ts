import { Request, Response } from 'express';
import { postArmyRosterToDb } from '../models/post-army-roster-model';

export async function postArmyRosterController(req: Request, res: Response) {
    try {
        const unit_id = Number(req.body.unit_id) || 0;
        const unitData = await postArmyRosterToDb(unit_id);
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

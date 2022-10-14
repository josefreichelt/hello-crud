import { Request, Response } from 'express';
import { getArmyRosterFromDb } from '../models/get-army-roster-model';

export async function getArmyRosterController(_req: Request, res: Response) {
    try {
        const unitData = await getArmyRosterFromDb();
        res.statusCode = 200;
        res.json(unitData);
    } catch (error) {
        res.statusCode = 500;
        res.send();
    }
}

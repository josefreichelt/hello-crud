import { db } from '../db';
import { IRoster } from '../types';

export async function getArmyRosterFromDb() {
    const request = new Promise<IRoster[]>((resolve, reject) => {
        db.all(
            `SELECT roster.id,roster.amount, unit_types.*
            FROM roster
            INNER JOIN unit_types
            ON roster.unit_id = unit_types.unit_id`,
            (err, result) => {
                if (err) {
                    reject(err);
                }
                return resolve(result);
            }
        );
    });

    try {
        return await request;
    } catch (err) {
        console.error('Error getting Army roster from DB', err);
        return [];
    }
}

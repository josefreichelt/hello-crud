import { db } from '../db';
import { getArmyRosterFromDb } from './get-army-roster-model';

export async function postArmyRosterToDb(unit_id: number) {
    if (unit_id === 0) {
        return [];
    }

    const request = new Promise<boolean>((resolve, reject) => {
        db.run(
            `INSERT into roster(unit_id, amount) VALUES(${unit_id}, 1);`,
            function (err) {
                if (err) {
                    reject(err);
                }
                return resolve(true);
            }
        );
    });

    try {
        await request;
        return await getArmyRosterFromDb();
    } catch (err) {
        console.error('Error posting Army roster to DB', err);
        return [];
    }
}

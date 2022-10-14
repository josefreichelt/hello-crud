import { db } from '../db';
import { getArmyRosterFromDb } from './get-army-roster-model';

export async function updateUnitInArmyRosterInDb(
    id_in_roster: number,
    isAdding: boolean
) {
    if (id_in_roster === 0) {
        return [];
    }

    const request = new Promise<boolean>((resolve, reject) => {
        db.run(`UPDATE roster SET amount = amount + ${isAdding ? 1 : -1} WHERE id=${id_in_roster};`, function (err) {
            if (err) {
                reject(err);
            }
            return resolve(true);
        });
    });

    try {
        await request;
        return await getArmyRosterFromDb();
    } catch (err) {
        console.error('Error updating unit in Army roster in DB', err);
        return [];
    }
}

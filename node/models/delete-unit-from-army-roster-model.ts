import { db } from '../db';
import { getArmyRosterFromDb } from './get-army-roster-model';

export async function deleteUnitFromArmyRosterFromDb(id_in_roster: number) {
    if (id_in_roster === 0) {
        return [];
    }

    const request = new Promise<boolean>((resolve, reject) => {
        db.run(
            `DELETE FROM roster WHERE id=${id_in_roster};`,
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
        console.error('Error deleting unit from Army roster from DB', err);
        return [];
    }
}

import { db } from '../db';
import { IUnit } from '../types';

export async function getUnitTypesFromDb() {
    const request = new Promise<IUnit[]>((resolve, reject) => {
        db.all(`SELECT * FROM unit_types`, (err, result) => {
            if (err) {
                reject(err);
            }
            return resolve(result);
        });
    });

    try {
        return await request;
    } catch (err) {
        console.error('Error getting Unit Types from DB', err);
        return [];
    }
}

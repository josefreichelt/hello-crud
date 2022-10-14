class ApiHandlerV1 {
    #apiPort = 1338;
    #apiUrl = `http://localhost:${this.#apiPort}/api/v1`;

    async getUnitInfo() {
        const res = await fetch(`${this.#apiUrl}/units/types`);
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return;
        }
    }


    async getArmyRoster() {
        const res = await fetch(`${this.#apiUrl}/units`);
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return;
        }
    }

    async addUnitTypeToRoster(unitId) {
        const res = await fetch(`${this.#apiUrl}/units`, {
            method: "POST",
            body: {
                unit_id: unitId
            }
        });
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return;
        }
    }

    async updateRosterUnitAmount(unitId, isAdding) {
        const res = await fetch(`${this.#apiUrl}/units`, {
            method: "PUT",
            body: {
                unit_id: unitId,
                is_adding: isAdding
            }
        });
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return;
        }
    }

    async deleteUnitFromRoster(unitId) {
        const res = await fetch(`${this.#apiUrl}/units`, {
            method: "DELETE",
            body: {
                unit_id: unitId
            }
        });
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return;
        }
    }
}



export const ApiHandler = new ApiHandlerV1();
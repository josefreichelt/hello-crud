class ApiHandlerV1 {
    #apiPort = 1338;
    #apiUrl = `http://localhost:${this.#apiPort}/api/v1`;

    async getUnitInfo() {
        const res = await fetch(`${this.#apiUrl}/units/types`);
        if (res.ok) {
            const data = await res.json();
            return data;
        }else {
            return;
        }
    }
}


export const ApiHandler = new ApiHandlerV1();
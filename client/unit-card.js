export class UnitCard extends HTMLLIElement {
    constructor({ unit_name, unit_attack_type, unit_cost, unit_damage, unit_health }, isRoster = false) {
        super();
        this.classList.add('unit-card');

        const unitNameEl = document.createElement('h3');
        unitNameEl.textContent = unit_name;

        const attackTypeEl = document.createElement('div');
        attackTypeEl.innerHTML = `
            <span><b>Attack Type: </b><span class="attack-type">${unit_attack_type.toLowerCase()}</span></span>
        `;
        const damageEl = document.createElement('div');
        damageEl.innerHTML = `
            <span><b>Damage: </b><span class="attack-type">${unit_damage}</span></span>
        `;
        const healthEl = document.createElement('div');
        healthEl.innerHTML = `
            <span><b>Health: </b><span class="attack-type">${unit_health}</span></span>
        `;
        const unitCostEl = document.createElement('div');
        unitCostEl.innerHTML = `
        <span><b>Cost: </b><span class="attack-type">${unit_cost}</span></span>
`;

        this.appendChild(unitNameEl);
        this.appendChild(damageEl);
        this.appendChild(attackTypeEl);
        this.appendChild(healthEl);
        this.appendChild(unitCostEl);

        if (isRoster) {

        } else {
            const buttonContainer = document.createElement("div");
            const addToRosterButton = document.createElement('button');
            addToRosterButton.type = "button";
            buttonContainer.classList.add("button-container");

            addToRosterButton.textContent = "Add to Roster";
            addToRosterButton.addEventListener("click", () => {
                console.log(`Adding to roster ${unit_name}`);
            });

            buttonContainer.appendChild(addToRosterButton);
            this.appendChild(buttonContainer);
        }


    }
}

window.customElements.define("unit-card", UnitCard, { extends: 'li' });;
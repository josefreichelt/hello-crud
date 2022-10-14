import { ApiHandler } from './api-handler.js';

export class UnitCard extends HTMLLIElement {
    constructor({ unit_name, unit_attack_type, unit_cost, unit_damage, unit_health, amount, unit_id }, isRoster = false) {
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
            <span><b>Damage: </b><span>${unit_damage}</span></span>
        `;
        const healthEl = document.createElement('div');
        healthEl.innerHTML = `
            <span><b>Health: </b><span>${unit_health}</span></span>
        `;
        const unitCostEl = document.createElement('div');
        unitCostEl.innerHTML = `
        <span><b>Cost: </b><span>${unit_cost}</span></span>
`;

        this.appendChild(unitNameEl);
        this.appendChild(damageEl);
        this.appendChild(attackTypeEl);
        this.appendChild(healthEl);
        this.appendChild(unitCostEl);

        if (isRoster) {
            const unitAmountContainerSpacer = document.createElement("div");
            unitAmountContainerSpacer.style.display = "flex";
            unitAmountContainerSpacer.style.flexGrow = 1;
            const unitAmountContainer = document.createElement("div");
            const unitAmountDisplay = document.createElement("span");
            const unitAmountIncrease = document.createElement("button");
            unitAmountIncrease.innerText = "+";
            const unitAmountDecrease = document.createElement("button");
            unitAmountDecrease.innerText = "-";
            const unitDelete = document.createElement("button");
            unitDelete.classList.add("unit-delete");
            unitDelete.innerText = "❌";

            unitAmountContainer.classList.add("unit-amount-container");

            unitAmountDisplay.innerHTML = `
            <span><b>Amount: </b><span>${amount}</span></span>
    `;
            unitAmountIncrease.addEventListener("click", () => {
                ApiHandler.updateRosterUnitAmount(unit_id, true).then(data => {
                    fireOnRosterUpdateEvent(data, true);

                });
            });
            unitAmountDecrease.addEventListener("click", () => {
                ApiHandler.updateRosterUnitAmount(unit_id, false).then(data => {
                    fireOnRosterUpdateEvent(data, true);

                });;
            });
            unitDelete.addEventListener("click", () => {
                ApiHandler.deleteUnitFromRoster(unit_id).then(data => {
                    fireOnRosterUpdateEvent(data, true);

                });;
            });
            this.appendChild(unitAmountContainerSpacer);
            unitAmountContainer.appendChild(unitAmountDecrease);
            unitAmountContainer.appendChild(unitAmountDisplay);
            unitAmountContainer.appendChild(unitAmountIncrease);
            this.appendChild(unitAmountContainer);
            this.appendChild(unitDelete);


        } else {
            const buttonContainer = document.createElement("div");
            const addToRosterButton = document.createElement('button');
            addToRosterButton.type = "button";
            buttonContainer.classList.add("button-container");

            addToRosterButton.textContent = "Add to Roster";
            addToRosterButton.addEventListener("click", () => {
                ApiHandler.addUnitTypeToRoster(unit_id).then(data => {
                    fireOnRosterUpdateEvent(data, true);
                });;
            });


            buttonContainer.appendChild(addToRosterButton);
            this.appendChild(buttonContainer);
        }


    }
}
function fireOnRosterUpdateEvent(data, isRoster) {
    document.dispatchEvent(new CustomEvent("onRosterUpdate", { detail: { data, isRoster } }));
}
window.customElements.define("unit-card", UnitCard, { extends: 'li' });;
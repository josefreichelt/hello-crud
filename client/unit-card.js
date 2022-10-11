export class UnitCard extends HTMLLIElement {
    constructor({ unit_name, unit_attack_type, unit_cost, unit_damage, unit_health }) {
        super();
        this.classList.add("unit-card");

        const unitNameEl = document.createElement("h3");
        unitNameEl.textContent = unit_name;
        this.appendChild(unitNameEl);

    }
}

window.customElements.define("unit-card", UnitCard, { extends: 'li' });
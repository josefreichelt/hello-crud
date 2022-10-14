import { ApiHandler } from './api-handler.js';
import { UnitCard } from './unit-card.js';

ApiHandler.getUnitInfo().then(data => {
    renderUnits(data);
});


ApiHandler.getArmyRoster().then(data => {
    document.dispatchEvent(new CustomEvent("onRosterUpdate", { detail: { data, isRoster: true } }));
});

document.addEventListener("onRosterUpdate", (e) => {
    if (!e.detail.data) {
        console.error("No data", e.detail.data);
        return;
    };
    console.log(e.detail);
    renderUnits(e.detail.data, e.detail.isRoster);
});

function renderUnits(data, isRoster = false) {
    let listElement;
    if (isRoster) {
        listElement = document.getElementById("roster");
    } else {
        listElement = document.getElementById("available-units");
    }
    listElement.replaceChildren();
    data.map(unitType => {
        const unitCard = new UnitCard(unitType, isRoster);
        listElement.appendChild(unitCard);
    });

}

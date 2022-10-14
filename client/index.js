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
    if (e.detail.isRoster) {
        recalculateArmyInfo(e.detail.data);
    }
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

function recalculateArmyInfo(data) {
    const infoListEl = document.getElementById("army-info-list");





    infoListEl.replaceChildren();
    infoListEl.appendChild(renderArmyInfoItem("test", "cont"));
}

function renderArmyInfoItem(title, content) {
    const itemEl = document.createElement("li");
    const itemTitle = document.createElement("span");
    const itemContent = document.createElement("span");


    itemEl.classList.add("army-info-item");
    itemTitle.classList.add("army-info-item-title");
    itemTitle.textContent = title;
    itemContent.textContent = content;


    itemEl.appendChild(itemTitle);
    itemEl.appendChild(itemContent);
    return itemEl;
}


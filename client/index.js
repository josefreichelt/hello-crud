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
    let totalUnits = 0;
    let totalDamage = 0;
    let totalMelee = 0;
    let totalRanged = 0;
    let totalMeleeDamage = 0;
    let totalRangedDamage = 0;
    let totalCost = 0;
    let totalHealth = 0;
    let totalUnitTypes = new Set();

    data.map(unit => {
        totalUnitTypes.add(unit.unit_id);
        totalUnits += unit.amount;
        totalDamage += unit.unit_damage * unit.amount;
        if (unit.unit_attack_type === "MELEE") {
            totalMelee += unit.amount;
            totalMeleeDamage += unit.unit_damage * unit.amount;
        } else if (unit.unit_attack_type === "RANGED") {
            totalRanged += unit.amount;
            totalRangedDamage += unit.unit_damage * unit.amount;
        }
        totalCost += unit.unit_cost * unit.amount;
        totalHealth += unit.unit_health * unit.amount;
    });


    infoListEl.replaceChildren();
    infoListEl.appendChild(renderArmyInfoItem("Units", totalUnits));
    infoListEl.appendChild(renderArmyInfoItem("Unit Types", totalUnitTypes.size));
    infoListEl.appendChild(renderArmyInfoItem("Melee Units", totalMelee));
    infoListEl.appendChild(renderArmyInfoItem("Ranged Units", totalRanged));
    infoListEl.appendChild(renderArmyInfoItem("Melee Damage", totalMeleeDamage));
    infoListEl.appendChild(renderArmyInfoItem("Ranged Damage", totalRangedDamage));
    infoListEl.appendChild(renderArmyInfoItem("Damage", totalDamage));
    infoListEl.appendChild(renderArmyInfoItem("Cost", totalCost));
    infoListEl.appendChild(renderArmyInfoItem("Health", totalHealth));
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


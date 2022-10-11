import { ApiHandler } from './api-handler.js';
import { UnitCard } from './unit-card.js';



ApiHandler.getUnitInfo().then(data=>{
    const availableUnitsList = document.getElementById("available-units");
    availableUnitsList.replaceChildren();
    data.map(unitType=>{
        const unitCard = new UnitCard(unitType);
        availableUnitsList.appendChild(unitCard);
    })
});
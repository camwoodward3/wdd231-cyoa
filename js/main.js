import { getPeopleData } from "./swapi_data.mjs";
import { characterCardTemplate } from "./character_template.mjs";


function renderCharacterCards(peopleData) {
    // This function will render the character card; and add a class of dark-character if the character is evil
    const characterCards = document.querySelector("#characters");
    const characterCardHTML = peopleData.map(character => characterCardTemplate(character)).join("");
    characterCards.innerHTML = characterCardHTML;
}

async function init() {
    const people = await getPeopleData();
    renderCharacterCards(people);
    console.log(people);
}

init();


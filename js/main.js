import { getPeopleData } from "./swapi.mjs";
import { characterCardTemplate } from "./character_template.mjs";

function renderCharacterCards(peopleData) {
    // This function will render the character card; and add a class of dark-character if the character is evil
    const characterCards = document.querySelector("#characters");
    const characterCardHTML = peopleData.map(character => characterCardTemplate(character)).join("");
    characterCards.innerHTML = characterCardHTML;
}

function renderStory(params) {
    // This function will render the story template for characters
}

function characterTemple(character) {
    return `<div class="image-container>
            <img src="images/${character.imgSrc}" alt="${character.name}">
        </div>
        <div class="details">
            <h3>${character.name}</h3>
            <p>${character.info}</p>
            <button>Select</button>
        </div>`;
}

async function init() {
    const people = await getPeopleData();
    renderCharacterCards(people)
    console.log(people);
}

init();


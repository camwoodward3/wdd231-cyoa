import { getPeopleData } from "./swapi.mjs";
import { characterCardTemplate } from "./character_template.mjs";
import { storyTemplate } from "./story_template.mjs";


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

document.addEventListener('DOMContentLoaded', () => {
    const characterSelect = document.getElementById('characterSelect');
    const storyDiv = document.getElementById('story');

    characterSelect.addEventListener('change', () => {
        const selectedCharacter = characterSelect.value;
        if (selectedCharacter && stories[selectedCharacter]) {
            storyDiv.innerHTML = stories[selectedCharacter];
        } else {
            storyDiv.innerHTML = 'Character story not found.';
        }
    })
})

async function init() {
    const people = await getPeopleData();
    renderCharacterCards(people)
    console.log(people);
}

init();


import { getPeopleData } from "./swapi.mjs";

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

function renderCharacters(data) {
    const charactersElement = document.querySelector(".characters");
    charactersElement.innerHTML = "";
    const html = characters.map(characterTemple);
    charactersElement.innerHTML = html.join("");
}

async function init() {
    const people = getPeopleData();
    console.log(people);
}

init();


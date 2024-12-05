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

async function init() {
    const people = getPeopleData();
    console.log(people);
}

init();


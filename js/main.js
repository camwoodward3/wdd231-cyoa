import { getPeopleData } from "./swapi.mjs";

function characterTemplate(character) {
    return `<div class="image-container>
            <img src="images/${character.imgSrc}" alt="${character.name}">
        </div>
        <div class="details">
            <h3>${character.name}</h3>
            <p>${character.info}</p>
            <button>Select</button>
        </div>`;
    }

 function lightStoryTemplate(story) {
    return `<h2>Character Story: <span id="character-name">${story.name}</span></h2>
    <p id="story-intro">
        ${story.intro}
    </p>
    <p id="story-part1>
    </p>
    `
    

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


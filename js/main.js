const characters = [
    {
        id: 1,
        imgSrc: 'anakin.jpg',
        name: 'Anakin Skywalker',
        info: 'He was considered one of the strongest Jedi in the Jedi Order.'
    },
    {
        id: 2,
        imgSrc: 'obiwan.jpeg',
        name: 'Obi-Wan Kenobi',
        info: 'He was one of the most powerful Jedi in the Galaxy who took down so many Sith Lords.'
    },
    {
        id: 3,
        imgSrc: 'Dooku.jpeg',
        name: 'Count Dooku',
        info: 'He is the leader of the Separatists and a Sith Lord capable with force lightning.'
    },
    {
        id: 4,
        imgSrc: 'Grievous.jpeg',
        name: 'General Grievous',
        info: 'He is the Sepratist Robot trained in the Jedi Arts.'
    }
];
console.log(characters);

function characterTemple(character) {
    `      <div class="image-container>
            <img src="images/${character.imgSrc}" alt="${character.name}">
        </div>
        <div class="details">
            <h3>${character.name}</h3>
            <p>${character.info}</p>
            <button>Select</button>
        </div>`;
    }

function renderCharacters() {
    const charactersElement = document.querySelector(".characters");
    charactersElement.innerHTML = "";
    const html = characters.map(characterTemple);
    charactersElement.innerHTML = html.join("");
}
renderCharacters();
import { getPeopleData } from "./swapi.mjs";


async function init() {
    const people = getPeopleData();
    console.log(people);
}

init();


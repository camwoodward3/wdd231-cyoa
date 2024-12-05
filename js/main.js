import { getPeopleData } from "./swapi.mjs";

function renderCharacterCard(params) {
    // This function will render the character card; and add a class of dark-character if the character is evil
}

function renderStory(params) {
    // This function will render the story template for characters
}

async function init() {
    const people = getPeopleData();
    console.log(people);
}

init();


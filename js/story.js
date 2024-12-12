import { getPersonData } from "./swapi.mjs";
import { characterCardTemplate } from "./character_template.mjs";
import { storyTemplate } from "./story_template.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function renderStory(params) {
    // This function will render the story template for characters
}

async function init() {
    const person = await getPersonData(10);
    console.log(person);
}

init();
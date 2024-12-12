import { getPersonData } from "./swapi_data.mjs";
import { getStoryData } from "./story_data.mjs";

import { storyTitleTemplate,
    storyIntroTemplate
 } from "./story_template.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function renderStory(person, story_data) {
    // This function will render the story template for characters
    document.querySelector("#story_title").innerHTML = storyTitleTemplate(person);
    document.querySelector("#story-intro").innerHTML = storyIntroTemplate(story_data);
}

async function init() {
    const id = 1;
    const personData = await getPersonData(id);
    const StoryData = await getStoryData();
    renderStory(personData, StoryData);
    console.log(personData);
    console.log(StoryData);
}

init();
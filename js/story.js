import { getPersonData } from "./swapi_data.mjs";
import { getStoryData } from "./story_data.mjs";

import { storyTitleTemplate,
    storyIntroTemplate,
    storyPart1Template,
    storyPart2Template,
    storyPart3Template,
    storyEndingTemplate
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
    document.querySelector("#story-part1").innerHTML = storyPart1Template(story_data);
    document.querySelector("#story-part2").innerHTML = storyPart2Template(story_data);
    document.querySelector("#story-part3").innerHTML = storyPart3Template(story_data);
    document.querySelector("#ending").innerHTML = storyEndingTemplate(story_data);
}

async function init() {
    const id = getParam("name");
    const personData = await getPersonData("");
    const StoryData = await getStoryData();
    renderStory(personData, StoryData);
    console.log(personData);
    console.log(StoryData);
    console.log(id);
}

init();
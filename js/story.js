import { getPersonData } from "./swapi_data.mjs";
import { getStoryData } from "./story_data.mjs";
import { saveToLocalStorage, getFromLocalStorage } from "./local_storage.mjs";

import { storyTitleTemplate,
    storyIntroTemplate,
    storyPartTemplate,
    storyEndingTemplate
 } from "./story_template.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function renderStory(person, story_data) {
    document.querySelector("#story_title").innerHTML = storyTitleTemplate(person);
    document.querySelector("#story-intro").innerHTML = storyIntroTemplate(story_data);

    const storyParts = story_data.stories.ancientProphecy.template;
    document.querySelector("#story-part1").innerHTML = storyPartTemplate(storyParts.part1);
    document.querySelector("#story-part2").innerHTML = storyPartTemplate(storyParts.part2);
    document.querySelector("#story-part3").innerHTML = storyPartTemplate(storyParts.part3);

    const savedEnding = getFromLocalStorage("starWarsCustomEnding");
    const endingHTML = savedEnding
        ? `<strong>Ending:</strong> ${savedEnding}`
        : storyEndingTemplate(story_data);
    document.querySelector("#ending").innerHTML = endingHTML;

    setupCustomEndingForm();
}

function setupCustomEndingForm() {
    const storyEndingForm = document.getElementById("story-ending-form");
    const newEndingTextarea = document.getElementById("new-ending");
    const endingDisplay = document.querySelector("#ending");

    storyEndingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh

        const newEnding = newEndingTextarea.value.trim();
        if (newEnding) {
            // Save the custom ending
            saveToLocalStorage("starWarsCustomEnding", newEnding);

            // Update the ending display
            endingDisplay.innerHTML =  `<strong>Ending:</strong> ${newEnding}`;

            // Clear the textarea
            newEndingTextarea.value = "";

            alert("Your custom ending has been saved!");
        } else {
            alert("Please write an ending before saving.");
        }
    })
}

async function init() {
    const name = getParam("character");
    const personData = await getPersonData(name);
    const StoryData = await getStoryData();
    renderStory( personData.results[0], StoryData);

    console.log(name);
    console.log(personData);
    console.log(StoryData);
}

init();
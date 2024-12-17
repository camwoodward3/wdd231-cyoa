import { getPersonData } from "./swapi_data.mjs";
import { getStoryData } from "./story_data.mjs";
import { saveToLocalStorage, getFromLocalStorage } from "./local_storage.mjs";
import {
    storyTitleTemplate,
    storyTemplate
} from "./story_template.mjs";

let currentChoice = "";
let personData = {};
let StoryData = {};

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function reRender(ev) {
    currentChoice = ev.target.id
    renderStory(personData, StoryData)
}

function renderStory(person, story_data) {
    document.querySelector("#story_title").innerHTML = storyTitleTemplate(person);
    document.querySelector("#story_container").innerHTML = storyTemplate(story_data.nodes[currentChoice]);

    const choiceBtn = document.querySelectorAll(".choiceBtn");

    choiceBtn.forEach( button => {
        button.addEventListener("click", reRender)
    })

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
            endingDisplay.innerHTML = `<strong>Ending:</strong> ${newEnding}`;

            // Clear the textarea
            newEndingTextarea.value = "";

            alert("Your custom ending has been saved!");
        } else {
            alert("Please write an ending before saving.");
        }
    })
}

async function init() {
    const id = getParam("id");
    personData = await getPersonData(id);
    StoryData = await getStoryData();
    currentChoice = StoryData.start;
    renderStory(personData, StoryData);

    console.log(id);
    console.log(personData);
    console.log(StoryData);
}

init();
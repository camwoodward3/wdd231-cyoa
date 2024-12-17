import { saveToLocalStorage, getFromLocalStorage } from "./local_storage.mjs";

function showEnding() {
    const savedEnding = getFromLocalStorage("starWarsCustomEnding");
    const endingHTML = savedEnding
        ? `<strong>Ending:</strong> ${savedEnding}`
        : storyEndingTemplate(story_data);
    document.querySelector("#ending").innerHTML = endingHTML;
}

async function init() {
    showEnding
}

init();
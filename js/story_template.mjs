// Please create the story template in here and export for use.

export function storyTemplate(story) {
    lightStoryTemplate(story);
    darkStoryTemplate(story);
}

function lightStoryTemplate(story) {
    return `
    <h2>Character Story: <span id="character-menu">${story.characterName}</span></h2>
    <p id="story-intro>${story.intro}</p>
    <p id="story-part1>${story.part1}</p>
    <div class="choices">
        <button id="choice-1" onclick="${story.loyal_onclick}()">${story.loyal_choice}</button>
        <button id="choice-2" onclick="${story.dark_onclick}()">${story.dark_choice}</button>
    </div>
    <div id="loyal-story" class="story-path>
        <p id="loyal-choice>${story.loyal_path}</p>
        <p id="ending-good>
            <strong>Ending:</strong>${story.ending_good}
        </p>
    </div>
    <div id="dark-side-story" class="story-path>
        <p id="dark-choice>${story.dark_path}</p>
        <p id="ending-bad>
            <strong>Ending:</strong>${story.ending_bad}
        </p>
    </div>`
}

function darkStoryTemplate(story) {
    return `
    <h2>Character Story: <span id="character-menu">${story.characterName}</span></h2>
    <p id="story-intro>${story.intro}</p>
    <p id="story-part1>${story.part1}</p>
    <div class="choices">
        <button id="choice-1" onclick="${story.dark_onclick}()">${story.dark_choice}</button>
        <button id="choice-2" onclick="${story.loyal_onclick}()">${story.loyal_choice}</button>
    </div>
    <div id="dark-side-story" class="story-path>
        <p id="dark-choice>${story.dark_path}</p>
        <p id="ending-bad>
            <strong>Ending:</strong>${story.ending_bad}
        </p>
    </div>
    <div id="loyal-story" class="story-path>
        <p id="loyal-choice>${story.loyal_path}</p>
        <p id="ending-good>
            <strong>Ending:</strong>${story.ending_good}
        </p>
    </div>`
}
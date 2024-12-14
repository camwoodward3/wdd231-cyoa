// Create a general story template all characters and export for use

export function storyTitleTemplate(person) {
    return ` ${person.name} `
}

export function storyIntroTemplate(story) {
    return `
    <p>${story.stories.ancientProphecy.template.intro}</p>
    `
}

// I need to refactor the storyPart templates because they are redundant

export function storyPartTemplate(storyPart) {
    return `
        <p>${storyPart.text}</p>

        <div class="choices">
            <button class="btn" id="${storyPart.choices.good.onclick}">${storyPart.choices.good.choice_text}</button>
            <button class="btn" id="${storyPart.choices.evil.onclick}">${storyPart.choices.evil.choice_text}</button>
        </div>
    `;
}

export function storyEndingTemplate(story) {
    const endingPath = story.stories.ancientProphecy.template.endings;
    return `   
        <p>
            <strong>Ending:</strong>
            ${endingPath.mixed}
        </p>
    `
}
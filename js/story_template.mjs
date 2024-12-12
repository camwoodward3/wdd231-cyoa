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

export function storyPart1Template(story) {
    const part1Path = story.stories.ancientProphecy.template.part1;
    return `
        <p>${part1Path.text}</p>

        <div class="choices">
            <button class="btn" id="${part1Path.choices.good.onclick}">${part1Path.choices.good.choice_text}</button>
            <button class="btn" id="${part1Path.choices.good.onclick}">${part1Path.choices.evil.choice_text}</button>
        </div>
    `
}

export function storyPart2Template(story) {
    const part2Path = story.stories.ancientProphecy.template.part2;
    return `
        <p>${part2Path.text}</p>

        <div class="choices">
            <button class="btn" id="${part2Path.choices.good.onclick}">${part2Path.choices.good.choice_text}</button>
            <button class="btn" id="${part2Path.choices.good.onclick}">${part2Path.choices.evil.choice_text}</button>
        </div>
    `
}

export function storyPart3Template(story) {
    const part3Path = story.stories.ancientProphecy.template.part3;
    return `
        <p>${part3Path.text}</p>

        <div class="choices">
            <button class="btn" id="${part3Path.choices.good.onclick}">${part3Path.choices.good.choice_text}</button>
            <button class="btn" id="${part3Path.choices.good.onclick}">${part3Path.choices.evil.choice_text}</button>
        </div>
    `
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
// Create a general story template all characters and export for use

export function storyTemplate(story) {
    return `
        <p>${story.text}</p>
        <div class="choices">
            ${story.choices? storyChoiceTemplate(story.choices):"<p>The end!</p>"}
        </div>
    `
}

export function storyTitleTemplate(person) {
    return ` ${person.properties.name} `
}

function storyChoiceTemplate(choices) {
    const html = choices.map(choice => `
            <button class="btn choiceBtn" id="${choice.go_to}">${choice.text}</button>
    `)
    return html.join("");
}

// export function storyIntroTemplate(story) {
//     return `
//     <p>${story}</p>
//     `
// }

// // I need to refactor the storyPart templates because they are redundant



// export function storyEndingTemplate(story) {
//     const endingPath = story.stories.ancientProphecy.template.endings;
//     return `   
//         <p>
//             <strong>Ending:</strong>
//             ${endingPath.mixed}
//         </p>
//     `
// }
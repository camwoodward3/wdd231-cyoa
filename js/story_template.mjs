// Create a story template for light and dark side characters and export for use
// import { characterSides } from "./swapi_sides.mjs";

function characterSide(person) {
    if (person.name === "good") {
        return lightStoryTemplate(story);
    } else if (person.name === "bad") {
        return darkStoryTemplate(story);
    } else {
        throw new Error("We are yet to produce stories for neutral characters");
    }
}

export function storyTitleTemplate(person) {
    return ` ${person.name} `
}

export function storyIntroTemplate(story) {
    return `
    <p>${story.stories.ancientProphecy.template.intro}</p>
    `
    
}
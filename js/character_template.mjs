// Please create your character card template here and export it for use
import characterImages from "./swapi_images.mjs";

export function characterCardTemplate(character) {
    const imagePath = characterImages[character.name];
    return `
        <div class="character-card">
            <div class="image-container">
                <img src="${imagePath}" alt="${character.name}">
            </div>
            <div class="details">
                <h3>${character.name}</h3>
                <a href="stories.html?id=${character.uid}" class="btn select-link">Select</a>
            </div>
        </div>`;
}
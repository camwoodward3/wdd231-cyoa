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
                <p>Gender: <span>${character.gender}</span></p>
                <p>Height: <span>${character.height}</span></p>
                <p>Eye Color: <span>${character.eye_color}</span></p>
                <p>Hair Color: <span>${character.hair_color}</span></p>
                <a href="stories.html?character=${character.name}" class="select-link">Select</a>
            </div>
        </div>`;
    }
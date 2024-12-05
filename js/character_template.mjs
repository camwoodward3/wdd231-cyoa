// Please create your character card template here and export it for use

export function characterCardTemplate(character) {
    return `
        <div class="character-card">
            <div class="image-container>
                <img src="images/${character.name}" alt="${character.name}">
            </div>
            <div class="details">
                <h3>${character.name}</h3>
                <p>${character.info}</p>
                <button>Select</button>
            </div>
        <div>`;
    }
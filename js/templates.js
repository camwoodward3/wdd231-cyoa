export function renderCharacterCards(characters, containerId) {
    const container = document.getElementById(containerId);

     container.innerHTML = '';

     characters.forEach(character=> {
        const card = document.createElement('div');
        card.className = 'character-container';

        card.innerHTML = `
        <div class="image-container>
            <img src="images/${character.imgSrc}" alt="${character.imgAlt}">
        </div>
        <div class="details">
            <h3>${character.name}</h3>
            <p>${character.info}</p>
            <button>Select</button>
        </div>`;

        container.appendChild(card);
     });

     document.body.appendChild(container);
}

renderCharacterCards(char_select);


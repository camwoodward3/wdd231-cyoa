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

const characterImages = {
    "Luke Skywalker": "images/luke.jpg",
    "C-3PO": "images/c3po.jpg",
    "R2-D2": "images/r2d2.jpg",
    "Darth Vader": "images/vader.jpg",
    "Leia Organa": "images/leia.jpg",
    "Owen Lars": "images/owen.jpg",
    "Beru Whitesun lars": "images/beru.jpg",
    "R5-D4": "images/r5d4.jpg",
    "Biggs Darklighter": "images/biggs.jpg",
    "Obi-Wan Kenobi": "images/obiwan.jpg"
};

// we need to create images for these 10 characters.

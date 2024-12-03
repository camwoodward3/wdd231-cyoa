import { char_select } from "./character.js";

function convertHTML(item) {
    return `
         <div class="character-card">
            <div class="image-container">
                <img src="images/${item.imgSrc}" alt="${item.imgAlt}">
            </div>
            <div class="details">
                <h3>${item.name}</h3>
                <p>${item.info}</p>
                <button>Select</button>
            </div>
        </div>`;
}
function char_select_List(charList) {
    const container = document.querySelector("#char_select container");
    charList.forEach((item) => {
        const newArticle = document.createElement("article");
        newArticle.classList.add("article");
        const articleTemplate = convertHTML(item);
        newArticle.innerHTML = articleTemplate;
        container.appendChild(newArticle);
    })
}   

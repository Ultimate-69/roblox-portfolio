const cards = document.querySelector('.cards');

let cardsHtml = '';
projects.forEach((card) => {
    cardsHtml +=
    `
    <a target="_blank" class="ref" href="${card.link}">
        <div class="card">
            <img src="${card.img}" alt="project-preview" class="project-img">
            <hr>
            <p class="project-title">${card.name}</p>
            <p class="project-desc">${card.description}</p>
        </div>
    </a>
    `;
});

cards.innerHTML = cardsHtml;
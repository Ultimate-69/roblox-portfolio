const reviewsDiv = document.querySelector('.reviews');

let reviewsHtml = '';
reviews.forEach((value) => {
    reviewsHtml +=
    `
    <div class="review">
        <img class="project-img" src="${value}">
    </div>
    `;
});

reviewsDiv.innerHTML = reviewsHtml;
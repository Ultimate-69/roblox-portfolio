const reviewsDiv = document.querySelector('.reviews');

let reviewsHtml = '';
reviews.forEach((value) => {
    reviewsHtml +=
    `
    <div class="review">
        <img class="review-img" src="${value}">
    </div>
    `;
});

reviewsDiv.innerHTML = reviewsHtml;
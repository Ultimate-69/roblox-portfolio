const reviewsDiv = document.querySelector('.reviews');

let reviewsHtml = '';
reviews.forEach((value) => {
    reviewsHtml +=
    `
    <a href="${value}" target="_blank">
        <div class="review">
            <img class="review-img" src="${value}">
        </div>
    </a>
    `;
});

reviewsDiv.innerHTML = reviewsHtml;
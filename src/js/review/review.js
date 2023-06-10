// // fichier utilisé dans le html
// // importe les fonctions depuis d'autres modules et les utilises pour gérer les interractions sur la page

// import { getReviewData } from './getReviewData.js';
// import { updateReviewSection } from './updateReviewSection.js';

// document.addEventListener("DOMContentLoaded", function () {
//     getReviewData().then(updateReviewSection);
// });


import { getReviewData } from './getReviewData.js';
import { handleComment, calculateAverageRating } from './handleComment.js';

document.addEventListener("DOMContentLoaded", function () {
    const url = "https://my-json-server.typicode.com/Lugus-Shopify/hiring/product";

    getReviewData(url)
        .then(reviews => {
            const avgRating = calculateAverageRating(reviews);
            document.querySelector('.review-average').textContent = `${avgRating.toFixed(1)}/5 (${reviews.length} avis)`;
            handleComment(reviews);
        });
});

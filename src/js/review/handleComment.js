export function calculateAverageRating(reviews) {
    let totalRating = 0;
    reviews.forEach(review => {
        totalRating += review.rate;
    });
    return totalRating / reviews.length;
}

export function handleComment(reviews) {
    const reviewSection = document.querySelector('.review');
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comments-container';
    reviewSection.appendChild(commentContainer);


    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-content';
        // aucune donnée sur l'auteur du commentaire n'est présente dans le JSON
        // pour rester fidèle à la maquette, j'ai mis par défaut 'John Doe' comme auteur du commentaire si aucun nom n'est présent
        let authorName = review.author ? review.author : 'John Doe';
        reviewDiv.innerHTML = `
            <div class="review-info">
                <p class="review-info-comment">${review.comment}</p>
                <p class="review-info-rate">${review.rate}/5</p>
            </div>
            <p class="review-author">${authorName}</p>
        `;
        commentContainer.appendChild(reviewDiv);
    });
}

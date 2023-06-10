// calcul de la note moyenne du produit 
export function averageRating(reviews) {
    let totalRating = 0;
    reviews.forEach(review => {
        totalRating += review.rate;
    });
    return totalRating / reviews.length;
}

// récupère les data sur les avis
const url = "https://my-json-server.typicode.com/Lugus-Shopify/hiring/product";

export function getReviewData() {
    return fetch(url)
        .then(response => response.json())
        .then(data => data.reviews)
        .catch(error => console.error("Erreur:", error));
}

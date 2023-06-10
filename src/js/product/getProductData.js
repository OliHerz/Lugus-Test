// récupération les données du produit
export function getProductData() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            let product = JSON.parse(xhr.responseText);
            resolve(product);
        }   else {
                reject(`Erreur: ${xhr.status} - ${xhr.statusText}`);
            }
        });

        xhr.addEventListener('error', function () {
            reject('Une erreur réseau s\'est produite.');
        });

        xhr.open('GET', 'https://my-json-server.typicode.com/Lugus-Shopify/hiring/product', true);
        xhr.send();
    });
}

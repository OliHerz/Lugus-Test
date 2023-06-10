// fichier utilisé dans le html
// importe les fonctions depuis d'autres modules et les utilises pour gérer les interractions sur la page

import { getProductData } from './getProductData.js';
import { updateProduct } from './updateProduct.js';

getProductData().then((product) => {
    updateProduct(product);
});

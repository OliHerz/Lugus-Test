// afficher et de met à jour la page du produit
import { lightBlue, white } from './product/constants.js';
import { updateVariantsByColor, updateVariantsBySize} from './variants.js';

// met à jour les éléments de la page
export function updateProduct(product) {
    let productImage = document.querySelector('.product-image');
    let productTitle = document.querySelector('.product-title');
    let productPrice = document.querySelector('.product-price');
    let colorContainer = document.querySelector('#color-container .option-container');
    let sizeContainer = document.querySelector('#size-container .option-container');
    let productDescription = document.querySelector('.product-description');

    productImage.src = product.variants[0].image;
    productImage.alt = product.title;
    productTitle.textContent = product.title;
    productPrice.textContent = `${Number(product.price).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    productDescription.textContent = product.description;

    let colorButtons = colorContainer.querySelectorAll('.option-color');
    colorButtons.forEach(function (button) {
        let color = button.dataset.color;
        button.addEventListener('click', function () {
            updateVariantsByColor(color, product, sizeContainer, productImage, colorContainer);
        });
    });

    let sizeButtons = sizeContainer.querySelectorAll('.option-size');
    sizeButtons.forEach(function (button) {
        let size = button.dataset.size;
        button.addEventListener('click', function () {
        updateVariantsBySize(size, product, colorContainer, productImage, sizeContainer);
        });
    });

    if (sizeButtons.length > 0 && colorButtons.length > 0) {
        let selectedSize = sizeButtons[1].dataset.size;
        let selectedColor = colorButtons[0].dataset.color;
        updateVariantsByColor(selectedColor, product, sizeContainer, productImage, colorContainer);
        sizeButtons.forEach(function (button) {
            let size = button.dataset.size;
            if (size === selectedSize) {
                button.style.backgroundColor = lightBlue;
                button.style.color = white;
            }
        });
        updateVariantsBySize(selectedSize, product, colorContainer, productImage, sizeContainer);
    }
}

//  contient les fonctions pour gérer le variant affiché
import { lightBlue, white } from './constants.js';

export let selectedSize;
export let selectedColor;

// met à jour le variant affiché en fonction de la couleur sélectionnée
export function updateVariantsByColor(color, product, sizeContainer, productImage, colorContainer) {
    selectedColor = color;

    let colorButtons = colorContainer.querySelectorAll('.option-color');
    colorButtons.forEach(function (button) {
        let variantColor = button.dataset.color;
        if (variantColor === color) {
            button.style.backgroundColor = lightBlue;
            button.style.color = white;
        } else {
            button.style.backgroundColor = '';
            button.style.color = '';
        }
    });

    updateVariantImage(selectedSize, selectedColor, product, productImage);
}

// met à jour le variant affiché en fonction de la taille sélectionnée
export function updateVariantsBySize(size, product, colorContainer, productImage, sizeContainer){
    selectedSize = size;

    let filteredVariants = product.variants.filter(variant => variant.size === size);
    let sizeButtons = sizeContainer.querySelectorAll('.option-size');
    sizeButtons.forEach(function (button) {
        let variantSize = button.dataset.size;
        if (variantSize === size) {
            button.style.backgroundColor = lightBlue;
            button.style.color = white;
        }   else {
                button.style.backgroundColor = '';
                button.style.color = '';
            }
    });

    let colorButtons = colorContainer.querySelectorAll('.option-color');
    colorButtons.forEach(function (button) {
        let variantColor = button.dataset.color;
        let variant = filteredVariants.find(function (variant) {
            return variant.color === variantColor;
        });
        if (variant) {
            if (variantColor === selectedColor) {
                button.style.backgroundColor = lightBlue;
                button.style.color = white;
            }
        }   else {
                button.style.backgroundColor = '';
                button.style.color = '';
            }
  });

    updateVariantImage(selectedSize, selectedColor, product, productImage);
}

// met à jour l'image du produit en fonction de la couleur sélectionnée
export function updateVariantImage(selectedSize, selectedColor, product, productImage){
    let selectedVariant = product.variants.find(function (variant) {
        return variant.color === selectedColor && variant.size === selectedSize;
    });

    if (selectedVariant) {
        productImage.src = selectedVariant.image;
        console.log(selectedVariant);
    }
}

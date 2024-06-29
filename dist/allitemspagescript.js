import {addProductToCart} from './addToCartScript.js';
import {deleteCartItems} from './deleteCartItemsScript.js';
import {footerRender} from './footerRenderScript.js';
import {headerRender} from'./headerRenderScript.js';

var itemsCards = [
    { imgSource: '/images/product-img1.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest', isSingle: true },
    { imgSource: '/images/product-img2.png', productName: 'Stylish chair', productPrice: '80.00', productTopic: 'Office', isSingle: true },
    { imgSource: '/images/product-img3.png', productName: 'Stylish chair', productPrice: '150.00', productTopic: 'Foxkid', isSingle: false },
    { imgSource: '/images/product-img4.png', productName: 'Stylish chair', productPrice: '110.00', productTopic: 'Foxkid', isSingle: true },
    { imgSource: '/images/product-img5.png', productName: 'Stylish chair', productPrice: '50.00', productTopic: 'Forest', isSingle: true },
    { imgSource: '/images/product-img6.png', productName: 'Stylish chair', productPrice: '200.00', productTopic: 'Other', isSingle: true },
    { imgSource: '/images/product-img7.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest', isSingle: true },
    { imgSource: '/images/product-img8.png', productName: 'Stylish chair', productPrice: '90.00', productTopic: 'Foxkid', isSingle: false }
];
var itemsContainer = document.querySelector('.products'), btnsForFiltering = document.querySelectorAll('.list-of-filter-btns button');
var filterItems = function (btnIndex) {
    console.log(btnIndex);
    var filteredItems;
    switch (btnIndex) {
        case 0:
            itemCardRending(itemsCards);
            break;
        case 1:
            filteredItems = itemsCards.filter(function (card) { return card.productTopic === 'Forest'; });
            itemCardRending(filteredItems);
            break;
        case 2:
            filteredItems = itemsCards.filter(function (card) { return card.productTopic === 'Foxkid'; });
            itemCardRending(filteredItems);
            break;
        case 3:
            filteredItems = itemsCards.filter(function (card) { return card.isSingle === false; });
            itemCardRending(filteredItems);
            break;
        case 4:
            filteredItems = itemsCards.filter(function (card) { return card.productTopic === 'Other'; });
            itemCardRending(filteredItems);
            break;
    }
};
var itemCardRending = function (itemsCards) {
    if (itemsCards.length === 0) {
        itemsContainer.innerHTML = '<p class="empty-page">Nothing found</p>';
    }
    else {
        itemsContainer.innerHTML = itemsCards.map(function (card) { return "\n        <div class=\"card-of-product\">\n            <div class=\"product-img-section\">\n              <img\n                class=\"product-img\"\n                src=\"".concat(card.imgSource, "\"\n                alt=\"product image\"\n              />\n\n              <button class=\"add-to-cart-btn\">\n                <span class=\"btn-span\">+</span> <br />\n                Add\n              </button>\n            </div>\n\n            <div class=\"product-description\">\n              <p class=\"product-name\">").concat(card.productName, "</p>\n\n              <p class=\"product-price\">$").concat(card.productPrice, "</p>\n\n              <div class=\"product-raiting\">\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n              </div>\n\n              <p class=\"product-topic\">").concat(card.productTopic, "</p>\n            </div>\n          </div>\n        "); }).join('');
    }
};
itemsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        var index = Array.from(itemsContainer.querySelectorAll('.add-to-cart-btn')).indexOf(event.target);
        var selectedProduct = itemsCards[index];
        addProductToCart(selectedProduct);
    }
});
btnsForFiltering.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        filterItems(index);
    });
});
window.addEventListener('load', function () { deleteCartItems(), itemCardRending(itemsCards); footerRender(); headerRender();});

import {addProductToCart} from './addToCartScript.js';
import {deleteCartItems} from './deleteCartItemsScript.js';
import {headerRender} from './headerRenderScript.js';
import {footerRender} from './footerRenderScript.js';

var productCards = [
    { imgSource: '/images/product-img1.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest' },
    { imgSource: '/images/product-img2.png', productName: 'Stylish chair', productPrice: '80.00', productTopic: 'Office' },
    { imgSource: '/images/product-img3.png', productName: 'Stylish chair', productPrice: '150.00', productTopic: 'Foxkid' },
    { imgSource: '/images/product-img4.png', productName: 'Stylish chair', productPrice: '110.00', productTopic: 'Foxkid' },
    { imgSource: '/images/product-img5.png', productName: 'Stylish chair', productPrice: '50.00', productTopic: 'Forest' },
    { imgSource: '/images/product-img6.png', productName: 'Stylish chair', productPrice: '200.00', productTopic: 'Other' },
    { imgSource: '/images/product-img7.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest' },
    { imgSource: '/images/product-img8.png', productName: 'Stylish chair', productPrice: '90.00', productTopic: 'Foxkid' }
];
var cardContainer = document.querySelector('.shop-filtered-products'), searchFieldInput = document.querySelector('.search-input'), searchFieldBtn = document.querySelector('.search-btn'), filterBtns = document.querySelectorAll('.topic-btn'), priceInput = document.querySelector('.price-inpit'), cartBtn = document.querySelectorAll('.add-to-cart-btn');
var inputValue = document.querySelector('.value-of-input');
var filterProductByTopic = function (btnIndex) {
    var filteredProduct;
    switch (btnIndex) {
        case 0:
            productCardRending(productCards);
            break;
        case 1:
            filteredProduct = productCards.filter(function (card) { return card.productTopic === 'Forest'; });
            productCardRending(filteredProduct);
            break;
        case 2:
            filteredProduct = productCards.filter(function (card) { return card.productTopic === 'Office'; });
            productCardRending(filteredProduct);
            break;
        case 3:
            filteredProduct = productCards.filter(function (card) { return card.productTopic === 'Foxkid'; });
            productCardRending(filteredProduct);
            break;
        case 4:
            filteredProduct = productCards.filter(function (card) { return card.productTopic === 'Other'; });
            productCardRending(filteredProduct);
            break;
    }
};
var filterProductByPrice = function (price) {
    var inputProductPrice = Number(price);
    var filteredProduct = productCards.filter(function (card) { return Number(card.productPrice) <= inputProductPrice; });
    productCardRending(filteredProduct);
};
var searchProduct = function (searchFieldValue) {
    var searchedProduct = productCards.filter(function (card) { return card.productName.toLowerCase().includes(searchFieldValue.toLowerCase()); });
    productCardRending(searchedProduct);
};
var productCardRending = function (productCards) {
    if (productCards.length === 0) {
        cardContainer.innerHTML = '<p class="empty-page">Nothing found</p>';
    }
    else {
        cardContainer.innerHTML = productCards.map(function (card) { return "\n    <div class=\"filtered-product\">\n        <div class=\"product-img-section\">\n            <img\n                class=\"product-img\"\n                src=\"".concat(card.imgSource, "\"\n                alt=\"product image\"\n            />\n\n            <button class=\"add-to-cart-btn\">\n                <span class=\"btn-span\">+</span> <br />\n                Add\n            </button>\n        </div>\n\n        <div class=\"product-description\">\n            <p class=\"product-name\">").concat(card.productName, "</p>\n\n            <p class=\"product-price\">$").concat(card.productPrice, "</p>\n\n            <div class=\"product-raiting\">\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n                <i class=\"fa-solid fa-star\"></i>\n            </div>\n\n            <p class=\"product-topic\">").concat(card.productTopic, "</p>\n        </div>\n    </div>\n    "); }).join('');
    }
};
priceInput.addEventListener('input', function () {
    var priceInputValue = priceInput.value;
    filterProductByPrice(priceInputValue);
    inputValue.textContent = "Value: $".concat(priceInputValue);
});
filterBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        filterProductByTopic(index);
    });
});
cardContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        var index = Array.from(cardContainer.querySelectorAll('.add-to-cart-btn')).indexOf(event.target);
        var selectedProduct = productCards[index];
        addProductToCart(selectedProduct);
    }
});
searchFieldInput.addEventListener('input', function () { searchProduct(searchFieldInput.value); });
searchFieldBtn.addEventListener('click', function () {
    if (searchFieldInput.value !== '') {
        searchProduct(searchFieldInput.value);
    }
});
window.addEventListener('load', function () { deleteCartItems(), productCardRending(productCards); headerRender(); footerRender();});

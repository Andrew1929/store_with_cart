import { addProductToCart } from "./addToCartScript";
import {deleteCartItems} from './deleteCartItemsScript';

export interface IProducts {
    imgSource: string;
    productName: string;
    productPrice: string;
    productTopic: string;
}

const productCards : IProducts[] = [
    {imgSource: '/images/product-img1.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest'},
    {imgSource: '/images/product-img2.png', productName: 'Stylish chair', productPrice: '80.00', productTopic: 'Office'},
    {imgSource: '/images/product-img3.png', productName: 'Stylish chair', productPrice: '150.00', productTopic: 'Foxkid'},
    {imgSource: '/images/product-img4.png', productName: 'Stylish chair', productPrice: '110.00', productTopic: 'Foxkid'},
    {imgSource: '/images/product-img5.png', productName: 'Stylish chair', productPrice: '50.00', productTopic: 'Forest'},
    {imgSource: '/images/product-img6.png', productName: 'Stylish chair', productPrice: '200.00', productTopic: 'Other'},
    {imgSource: '/images/product-img7.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest'},
    {imgSource: '/images/product-img8.png', productName: 'Stylish chair', productPrice: '90.00', productTopic: 'Foxkid'}
] 

const cardContainer = document.querySelector('.shop-filtered-products') as HTMLElement,
      searchFieldInput = document.querySelector('.search-input') as HTMLInputElement,
      searchFieldBtn = document.querySelector('.search-btn') as HTMLElement,
      filterBtns = document.querySelectorAll('.topic-btn') as NodeListOf<HTMLButtonElement>,
      priceInput = document.querySelector('.price-inpit') as  HTMLInputElement,
      cartBtn = document.querySelectorAll('.add-to-cart-btn') as NodeListOf<HTMLButtonElement>;

let inputValue = document.querySelector('.value-of-input') as HTMLElement;

const filterProductByTopic = (btnIndex : number) => {
    let filteredProduct;
    switch (btnIndex) {
        case 0: 
            productCardRending(productCards);
            break;
        case 1: 
            filteredProduct = productCards.filter(card => card.productTopic === 'Forest');
            productCardRending(filteredProduct);
            break;
        case 2:
            filteredProduct = productCards.filter(card => card.productTopic === 'Office');
            productCardRending(filteredProduct);
            break;
        case 3: 
            filteredProduct = productCards.filter(card => card.productTopic === 'Foxkid');
            productCardRending(filteredProduct);
            break; 
        case 4: 
            filteredProduct = productCards.filter(card => card.productTopic === 'Other');
            productCardRending(filteredProduct);
            break;
    }
}

const filterProductByPrice = (price :  string) : void => {
    const inputProductPrice : number = Number(price)
    const filteredProduct = productCards.filter(card => Number(card.productPrice) <= inputProductPrice);
    productCardRending(filteredProduct);
}


const searchProduct = (searchFieldValue : string) : void => {
    const searchedProduct = productCards.filter(card => card.productName.toLowerCase().includes(searchFieldValue.toLowerCase()));
    productCardRending(searchedProduct);
} 

const productCardRending = (productCards : IProducts []) :void => {
    if(productCards.length === 0 ){
        cardContainer.innerHTML =  '<p class="empty-page">Nothing found</p>';
    }
    else {
        cardContainer.innerHTML = productCards.map(card => `
    <div class="filtered-product">
        <div class="product-img-section">
            <img
                class="product-img"
                src="${card.imgSource}"
                alt="product image"
            />

            <button class="add-to-cart-btn">
                <span class="btn-span">+</span> <br />
                Add
            </button>
        </div>

        <div class="product-description">
            <p class="product-name">${card.productName}</p>

            <p class="product-price">$${card.productPrice}</p>

            <div class="product-raiting">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <p class="product-topic">${card.productTopic}</p>
        </div>
    </div>
    `).join('');
    }
} 

priceInput.addEventListener('input', () => {
    const priceInputValue = priceInput.value;
    filterProductByPrice(priceInputValue);
    inputValue.textContent = `Value: $${priceInputValue}`;

})

filterBtns.forEach((btn : HTMLButtonElement, index : number) => {
    btn.addEventListener('click', () => {
        filterProductByTopic(index);
    });
});

cardContainer.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('add-to-cart-btn')) {
        const index = Array.from(cardContainer.querySelectorAll('.add-to-cart-btn')).indexOf(event.target as HTMLElement);
        const selectedProduct = productCards[index];
        addProductToCart(selectedProduct);
    }
});

searchFieldInput.addEventListener('input', () => {searchProduct(searchFieldInput.value)});

searchFieldBtn.addEventListener('click', () => {
    if(searchFieldInput.value !== ''){
        searchProduct(searchFieldInput.value);
    }
})

window.addEventListener('load', () => {deleteCartItems(),productCardRending(productCards)})
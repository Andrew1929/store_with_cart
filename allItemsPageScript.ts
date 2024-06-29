import {addProductToCart} from './addToCartScript';
import {deleteCartItems} from './deleteCartItemsScript'

export interface IItems {
    imgSource: string;
    productName: string;
    productPrice: string;
    productTopic: string;
    isSingle: boolean;
}

const itemsCards : IItems[] = [
    {imgSource: '/images/product-img1.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest', isSingle: true},
    {imgSource: '/images/product-img2.png', productName: 'Stylish chair', productPrice: '80.00', productTopic: 'Office', isSingle: true},
    {imgSource: '/images/product-img3.png', productName: 'Stylish chair', productPrice: '150.00', productTopic: 'Foxkid', isSingle: false},
    {imgSource: '/images/product-img4.png', productName: 'Stylish chair', productPrice: '110.00', productTopic: 'Foxkid', isSingle: true},
    {imgSource: '/images/product-img5.png', productName: 'Stylish chair', productPrice: '50.00', productTopic: 'Forest', isSingle: true},
    {imgSource: '/images/product-img6.png', productName: 'Stylish chair', productPrice: '200.00', productTopic: 'Other', isSingle: true},
    {imgSource: '/images/product-img7.png', productName: 'Stylish chair', productPrice: '120.00', productTopic: 'Forest', isSingle: true},
    {imgSource: '/images/product-img8.png', productName: 'Stylish chair', productPrice: '90.00', productTopic: 'Foxkid', isSingle: false}
] 

const itemsContainer = document.querySelector('.products') as HTMLElement,
btnsForFiltering = document.querySelectorAll('.list-of-filter-btns button') as NodeListOf<HTMLButtonElement>;

const filterItems = (btnIndex : number) => {
  console.log(btnIndex);
  let filteredItems;
  switch (btnIndex) {
      case 0: 
          itemCardRending(itemsCards);
          break;
      case 1: 
          filteredItems = itemsCards.filter(card => card.productTopic === 'Forest');
          itemCardRending(filteredItems);
          break;
      case 2:
          filteredItems = itemsCards.filter(card => card.productTopic === 'Foxkid');
          itemCardRending(filteredItems);
          break;
      case 3: 
          filteredItems = itemsCards.filter(card => card.isSingle === false);
          itemCardRending(filteredItems);
          break; 
      case 4: 
          filteredItems = itemsCards.filter(card => card.productTopic === 'Other');
          itemCardRending(filteredItems);
          break;
  }
} 

const itemCardRending = (itemsCards : IItems[]) :void => {
    if(itemsCards.length === 0 ){
        itemsContainer.innerHTML =  '<p class="empty-page">Nothing found</p>';
    }
    else {
        itemsContainer.innerHTML = itemsCards.map(card => `
        <div class="card-of-product">
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

itemsContainer.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).classList.contains('add-to-cart-btn')) {
      const index = Array.from(itemsContainer.querySelectorAll('.add-to-cart-btn')).indexOf(event.target as HTMLElement);
      const selectedProduct = itemsContainer[index];
      addProductToCart(selectedProduct);
  }
});

btnsForFiltering.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    filterItems(index);
  });
});

window.addEventListener('load', () => { deleteCartItems(), itemCardRending(itemsCards)});
import {IItems} from './allItemsPageScript';
import {IProducts} from './shopPageScript';

export const addProductToCart = (product : IProducts | IItems ) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(product);

    localStorage.setItem(`cart items #${localStorage.length}`,JSON.stringify(cartItems));

    console.log(`Product "${product.productName}" added to cart`);
    console.log('Updated cart items:', cartItems);
} 
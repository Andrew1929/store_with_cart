export const addProductToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(product);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    console.log(`Product "${product.productName}" added to cart`);
    console.log('Updated cart items:', cartItems);
} 

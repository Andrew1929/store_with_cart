export const showCart = () => {
  const cart = document.querySelector('.cart-items') as HTMLElement;
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  cart.innerHTML = cartItems.length > 0 ? cartItems.map(item => {
    return `
        <div class="cart-item-card">
          <div class="item-content">
            <img class="item-card-img" src="${item.imgSource}" alt="${item.productName}" />

            <div class="item-card-description">
              <p class="item-name">${item.productName}</p>
              <p class="item-price">$${item.productPrice}</p>
            </div>
          </div>  

          <div class="item-quantity">
            <div class="btns-for-change-quantity">
              <button class="decrease-quantity">-</button>
              <div class="quantity">1</div>
              <button class="increase-quantity">+</button>
            </div>

            <div class="delete-item-from-cart">
              <p class="delete-btn-text">Remove</p>
              <button class="fa-solid fa-xmark delete-btn"></button>
            </div>
          </div>
        </div>
    `;
  }).join('') : `
      <p>Your cart is empty</p>
  `;

  const closeCartBtn = document.querySelector('.cart-exit') as HTMLButtonElement;
  closeCartBtn.addEventListener('click', () => {
    const cart = document.querySelector('.cart') as HTMLElement;
    cart.style.display = 'none';
  });
};

document.addEventListener('click', function (event) {
  const target = event.target as HTMLElement;
  if (target.classList.contains('close-cart-btn')) {
    const cart = document.querySelector('.cart') as HTMLElement;
    cart.style.display = 'none';
  }
});

export const headerRender = () => {
  const header = document.querySelector('.header') as HTMLElement;

  header.innerHTML = (`
    <div class="header-content">
        <!-- Ваш HTML-код тут -->
    </div>
  `);

  const toggler = document.getElementById('toggler') as HTMLInputElement;
  const headerTitle = document.querySelector('.header-title') as HTMLElement;
  const cartAndProfilePage = document.querySelector('.cart-and-profile-page') as HTMLElement;
  const navBtn = document.querySelector('.fa-ellipsis') as HTMLButtonElement;
  const headerContent = document.querySelector('.header-content') as HTMLElement;
  const cartBtn = document.querySelector('.cart-btn') as HTMLButtonElement;
  const body = document.querySelector('body') as HTMLElement;

  toggler.addEventListener('click', function () {
    if (toggler.checked) {
      headerTitle.style.display = 'none';
      cartAndProfilePage.style.display = 'none';
      navBtn.style.display = 'none';
      headerContent.style.padding = '0';
    } else {
      headerTitle.style.display = 'block';
      cartAndProfilePage.style.display = 'block';
      navBtn.style.display = 'block';
      headerContent.style.padding = '1.5rem 10%';
    }
  });

  toggler.addEventListener("click", function () {
    if (toggler.checked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  cartBtn.addEventListener('click', function () {
    const cart = document.querySelector('.cart') as HTMLElement;
    showCart();
    cart.style.display = 'flex';
  });
}

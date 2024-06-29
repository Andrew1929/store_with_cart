export const showCart = () => {
    const cart = document.querySelector('.cart-items');
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

  const closeCartBtn = document.querySelector('.cart-exit') 
  closeCartBtn.addEventListener('click', () => {
    const cart = document.querySelector('.cart');
    cart.style.display = 'none';
  })
};


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close-cart-btn')) {
        const cart = document.querySelector('.cart');
        cart.style.display = 'none';
    }
});



export const headerRender = () => {
  const header = document.querySelector('.header');

  header.innerHTML = (`
  <div class="header-content">
      <div class="header-mobile-toggler-bar">
        <label for="toggler">
          <i class="fa-solid fa-ellipsis"></i>
        </label>
        <input type="checkbox" class="checkbox" id="toggler" />

        <div class="mobile-nav">
          <ul class="list">
            <li class="header-tab">
              <h3 class="header-nav-title">
                <a class="header-nav-link" href="/index.html">
                  foxmind<span class="header-title-span">ed</span>
                </a>
              </h3>
            </li>
            <li class="header-tab">
              <a class="link" href="/shopPage.html">SHOP</a>
            </li>
            <li class="header-tab">
              <a class="link" href="/index.html">MAIN PAGE</a>
            </li>
            <li class="tab">
              <a class="link" href="/historyPage.html">ABOUT US</a>
            </li>
            <li class="tab">
              <a class="link" href="/allItemsPage.html">ALL ITEMS</a>
            </li>
            <li class="xmark">
              <label for="toggler"><i class="fa-solid fa-xmark"></i> </label>
            </li>
          </ul>
        </div>

        <label class="overlay" for="toggler"></label>
      </div>

      <h3 class="header-title">
        <a class="header-link" href="/index.html">
          foxmind<span class="header-title-span">ed</span>
        </a>
      </h3>

      <nav class="header-nav">
        <ul class="header-list-of-tabs">
          <li class="header-tab">
            <a class="header-link" href="/shopPage.html">SHOP</a>
          </li>
          <li class="header-tab">
            <a class="header-link" href="/index.html">MAIN PAGE</a>
          </li>
          <li class="header-tab">
            <a class="header-link" href="/historyPage.html">ABOUT US</a>
          </li>
          <li class="header-tab">
            <a class="header-link" href="/allItemsPage.html">ALL ITEMS</a>
          </li>
        </ul>
      </nav>

      <div class="cart-and-profile-page">
        <button class="cart-btn"><i class="fa-solid fa-cart-shopping"></i></button>
        <i><img src="/images/fox-icon/fox-icon.png" alt="profile-icon" /></i>
      </div>
    </div>
  `);

  const toggler = document.getElementById('toggler');
  const headerTitle = document.querySelector('.header-title');
  const cartAndProfilePage = document.querySelector('.cart-and-profile-page');
  const navBtn = document.querySelector('.fa-ellipsis');
  const headerContent = document.querySelector('.header-content');
  const cartBtn = document.querySelector('.cart-btn');
  const body = document.querySelector('body');

  toggler.addEventListener('click', function () {
      if (this.checked) {
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
      if (this.checked) {
          body.style.overflow = "hidden";
      } else {
          body.style.overflow = "";
      }
  });

  cartBtn.addEventListener('click', function () {
    const cart = document.querySelector('.cart');
    showCart();
    cart.style.display = 'flex';
    });
}

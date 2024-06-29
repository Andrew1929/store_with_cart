export const footerRender = () => {
    const footer = document.querySelector('.footer') as HTMLElement;

    footer.innerHTML = `
    <div class="footer-content">
    <div class="footer-contacts">
      <h3 class="company-title">
        foxmind<span class="footer-title-span">ed</span>
      </h3>

      <p class="footer-contacts-description">
        Lorem ipsum dolor sit amet consectetur consectetur
      </p>

      <p class="footer-contacts-phone-number">Call us : 8956 3254 7887</p>

      <div class="footer-contacts-social-media">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>

    <div class="footer-theme">
      <h3 class="footer-title">Shop</h3>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>
    </div>

    <div class="footer-theme">
      <h3 class="footer-title">Products</h3>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>
    </div>

    <div class="footer-theme">
      <h3 class="footer-title">Collection</h3>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>
    </div>

    <div class="footer-theme">
      <h3 class="footer-title">Weekly updates</h3>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>
    </div>

    <div class="footer-theme">
      <h3 class="footer-title">About us</h3>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>

      <p class="footer-point">Lorem ipsum</p>
    </div>
  </div>

  <div class="footer-bout-rights">
    <p class="rights-text">Storelogo, 2023 All rights reserved</p>
  </div>
    `;
}
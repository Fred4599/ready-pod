class RPSiteNav extends HTMLElement {
  connectedCallback() {
    const currentPage = this.getAttribute("current-page") || "";
    const productsActiveClass = currentPage === "products" ? " current-menu-item" : "";
    const contactActiveClass = currentPage === "contact" ? " current-menu-item" : "";

    this.innerHTML = `
      <style>
        @media (max-width: 999px) {
          #header-outer {
            position: relative;
          }
        }
        #rp-mobile-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          z-index: 99999;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        #rp-mobile-dropdown.open {
          max-height: 400px;
        }
        #rp-mobile-dropdown ul {
          list-style: none;
          padding: 8px 0;
          margin: 0;
        }
        #rp-mobile-dropdown ul li {
          margin: 0;
          padding: 0;
          border-bottom: 1px solid #f0f0f0;
        }
        #rp-mobile-dropdown ul li:last-child {
          border-bottom: none;
        }
        #rp-mobile-dropdown ul li a {
          color: #333;
          font-size: 16px;
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          text-decoration: none;
          display: block;
          padding: 14px 24px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        #rp-mobile-dropdown ul li a:hover {
          background: #f9f9f9;
          color: #db6527;
        }
        #rp-mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          display: none;
        }
        #rp-mobile-backdrop.open {
          display: block;
        }
        .slide-out-widget-area-toggle a.open .lines-button .lines,
        .slide-out-widget-area-toggle a.open .lines-button .lines:before,
        .slide-out-widget-area-toggle a.open .lines-button .lines:after {
          background: #db6527;
        }
      </style>
      <div id="header-space" data-header-mobile-fixed="1"></div>
      <div id="header-outer" data-has-menu="true" data-has-buttons="no" data-header-button_style="shadow_hover_scale" data-using-pr-menu="false" data-mobile-fixed="1" data-ptnm="false" data-lhe="default" data-user-set-bg="#ffffff" data-format="default" data-permanent-transparent="false" data-megamenu-rt="0" data-remove-fixed="0" data-header-resize="0" data-cart="false" data-transparency-option="0" data-box-shadow="large" data-shrink-num="6" data-using-secondary="0" data-using-logo="1" data-logo-height="50" data-m-logo-height="30" data-padding="20" data-full-width="true" data-condense="false">
        <header id="top" role="banner">
          <div class="container">
            <div class="row">
              <div class="col span_3">
                <a id="logo" href="index.html">
                  <img class="stnd skip-lazy dark-version" width="500" height="110" alt="ReadyPod" src="https://www.readypod.com/wp-content/uploads/2026/04/COLOR-HORIZONTAL-500-APNG.png" />
                </a>
              </div>
              <div class="col span_9 col_last">
                <div class="nectar-mobile-only mobile-header"><div class="inner"></div></div>
                <div class="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                  <div>
                    <a href="#slide-out-widget-area" role="button" aria-label="Navigation Menu" aria-expanded="false" class="closed">
                      <span class="screen-reader-text">Menu</span>
                      <span aria-hidden="true"><i class="lines-button x2"><i class="lines"></i></i></span>
                    </a>
                  </div>
                </div>
                <nav aria-label="Main Menu">
                  <ul class="sf-menu">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item${productsActiveClass}">
                      <a href="products.html"><span class="menu-title-text">Products</span></a>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item">
                      <a aria-haspopup="true" aria-expanded="false"><span class="menu-title-text">Resources</span></a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item"><a href="index.html#boxhouse-villages"><span class="menu-title-text">Box House Villages</span></a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item"><a target="_blank" rel="noopener" href="https://www.boxhouse.com/"><span class="menu-title-text">Box House Link</span></a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item"><a target="_blank" rel="noopener" href="https://www.solarpod.com/"><span class="menu-title-text">Solar Pod Link</span></a></li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom button_solid_color${contactActiveClass}">
                      <a href="contact-us.html"><span class="menu-title-text">Contact Us</span></a>
                    </li>
                  </ul>
                  <ul class="buttons sf-menu" data-user-set-ocm="off"></ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div id="rp-mobile-dropdown">
        <ul>
          <li class="menu-item${productsActiveClass}"><a href="products.html">Products</a></li>
          <li class="menu-item"><a href="index.html#boxhouse-villages">Box House Villages</a></li>
          <li class="menu-item"><a target="_blank" rel="noopener" href="https://www.boxhouse.com/">Box House Link</a></li>
          <li class="menu-item"><a target="_blank" rel="noopener" href="https://www.solarpod.com/">Solar Pod Link</a></li>
          <li class="menu-item${contactActiveClass}"><a href="contact-us.html">Contact Us</a></li>
        </ul>
      </div>
      </div>
      <div id="rp-mobile-backdrop"></div>
    `;

    // Mobile menu toggle
    const toggle = this.querySelector('.slide-out-widget-area-toggle a');
    const dropdown = this.querySelector('#rp-mobile-dropdown');
    const backdrop = this.querySelector('#rp-mobile-backdrop');

    const closeMenu = () => {
      toggle.classList.remove('open');
      toggle.classList.add('closed');
      toggle.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('open');
      backdrop.classList.remove('open');
    };

    if (toggle && dropdown) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (toggle.classList.contains('open')) {
          closeMenu();
        } else {
          toggle.classList.remove('closed');
          toggle.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
          dropdown.classList.add('open');
          backdrop.classList.add('open');
        }
      });

      // Close when tapping outside (the backdrop)
      backdrop.addEventListener('click', closeMenu);

      // Close when a link is tapped
      dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }
  }
}

customElements.define("rp-site-nav", RPSiteNav);

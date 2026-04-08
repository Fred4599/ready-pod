class RPSiteNav extends HTMLElement {
  connectedCallback() {
    const currentPage = this.getAttribute("current-page") || "";
    const productsActiveClass = currentPage === "products" ? " current-menu-item" : "";
    const contactActiveClass = currentPage === "contact" ? " current-menu-item" : "";

    this.innerHTML = `
      <style>
        #slide-out-widget-area.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        #slide-out-widget-area.fullscreen.open {
          opacity: 1;
          visibility: visible;
        }
        #slide-out-widget-area .off-canvas-menu-container ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        #slide-out-widget-area .off-canvas-menu-container ul li {
          margin: 0;
          padding: 0;
        }
        #slide-out-widget-area .off-canvas-menu-container ul li a {
          color: #fff;
          font-size: 22px;
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          text-decoration: none;
          display: block;
          padding: 12px 20px;
          transition: color 0.2s ease;
        }
        #slide-out-widget-area .off-canvas-menu-container ul li a:hover {
          color: #db6527;
        }
        body.overflow-hidden {
          overflow: hidden;
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
      </div>
      <div id="slide-out-widget-area" class="fullscreen alt">
        <div class="inner-wrap">
          <div class="off-canvas-menu-container mobile-only">
            <ul class="menu">
              <li class="menu-item${productsActiveClass}"><a href="products.html">Products</a></li>
              <li class="menu-item"><a href="index.html#boxhouse-villages">Box House Villages</a></li>
              <li class="menu-item"><a target="_blank" rel="noopener" href="https://www.boxhouse.com/">Box House Link</a></li>
              <li class="menu-item"><a target="_blank" rel="noopener" href="https://www.solarpod.com/">Solar Pod Link</a></li>
              <li class="menu-item${contactActiveClass}"><a href="contact-us.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;

    // Mobile menu toggle
    const toggle = this.querySelector('.slide-out-widget-area-toggle a');
    const slideOut = this.querySelector('#slide-out-widget-area');
    const body = document.body;

    if (toggle && slideOut) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = toggle.classList.contains('open');

        if (isOpen) {
          toggle.classList.remove('open');
          toggle.classList.add('closed');
          toggle.setAttribute('aria-expanded', 'false');
          slideOut.classList.remove('open');
          body.classList.remove('overflow-hidden');
        } else {
          toggle.classList.remove('closed');
          toggle.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
          slideOut.classList.add('open');
          body.classList.add('overflow-hidden');
        }
      });

      // Close menu when a link is tapped
      slideOut.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('open');
          toggle.classList.add('closed');
          toggle.setAttribute('aria-expanded', 'false');
          slideOut.classList.remove('open');
          body.classList.remove('overflow-hidden');
        });
      });
    }
  }
}

customElements.define("rp-site-nav", RPSiteNav);

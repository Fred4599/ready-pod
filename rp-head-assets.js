/*
 * ReadyPod shared <head> assets.
 * Drop <script src="rp-head-assets.js"></script> (no defer) at the TOP of <head>
 * and it will inject all required theme CSS + font links automatically.
 */
(function () {
  const assets = [
    // Fonts
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext" },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Montserrat%3A700%7CPoppins%3A400%7CVarela%3A400%7CManrope%3A800%7CRoboto+Condensed&ver=6.9.4" },
    // Salient theme core
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/font-awesome-legacy.min.css?ver=4.7.1" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/grid-system.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/style.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/style-non-critical.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/responsive.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/skin-material.css?ver=17.3.0" },
    // Off-canvas / mobile menu
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/off-canvas/core.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/off-canvas/slide-out-right-material.css?ver=17.3.0" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/build/off-canvas/slide-out-right-hover.css?ver=17.3.0" },
    // Dynamic theme styles
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/themes/salient/css/salient-dynamic-styles.css?ver=84563" },
    { rel: 'stylesheet', href: "https://www.readypod.com/wp-content/uploads/salient/menu-dynamic.css?ver=77988" },
  ];

  const head = document.head;
  assets.forEach(function (a) {
    var link = document.createElement('link');
    link.rel = a.rel;
    link.href = a.href;
    link.type = 'text/css';
    link.media = 'all';
    head.appendChild(link);
  });
})();

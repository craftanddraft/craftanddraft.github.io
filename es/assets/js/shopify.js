(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'craft-and-draft-store.myshopify.com',
      storefrontAccessToken: 'f177d0c9db9f57106228091daada57ae'
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5391378546845',
        node: document.getElementById('product-component-1595210999919'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-family": "Open Sans, sans-serif",
        "font-size": "29px"
      },
      "button": {
        "font-family": "Open Sans, sans-serif",
        ":hover": {
          "background-color": "#d5422e"
        },
        "background-color": "#ed4933",
        ":focus": {
          "background-color": "#d5422e"
        },
        "padding-left": "50px",
        "padding-right": "50px"
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15.299999999999999px"
      },
      "unitPrice": {
        "font-size": "15.299999999999999px"
      }
    },
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "COMPRAR"
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Open Sans, sans-serif",
        ":hover": {
          "background-color": "#d5422e"
        },
        "background-color": "#ed4933",
        ":focus": {
          "background-color": "#d5422e"
        },
        "padding-left": "50px",
        "padding-right": "50px"
      }
    },
    "googleFonts": [
      "Open Sans"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Open Sans, sans-serif",
        ":hover": {
          "background-color": "#d5422e"
        },
        "background-color": "#ed4933",
        ":focus": {
          "background-color": "#d5422e"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Open Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Open Sans, sans-serif",
        "background-color": "#ed4933",
        ":hover": {
          "background-color": "#d5422e"
        },
        ":focus": {
          "background-color": "#d5422e"
        }
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  }
},
      });
    });
  }
})();
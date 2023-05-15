import { createEl, getEl } from './DOM.js';

// DATA SHARED ------------------------------------
export let productsOnCart = [];

// UI ELEMENTS ------------------------------------
export const createCartElement = (productData, cartIndex) => {
  let listElement = createEl("li");
  let productImageContainer = createEl("div");
  productImageContainer.className = "navbar_cart_view_image_container";

  let productImage = createEl("img");
  productImage.src = productData.thumbnail;
  productImage.alt = "product image" + productData.title;



  let productTextContainer = createEl("div");
  productTextContainer.className = "navbar_cart_view_text_container";

  let productTitle = createEl("h4");
  productTitle.className = "navbar_cart_product_name";
  productTitle.textContent = productData.title;

  let productPrice = createEl("p");
  productPrice.className = "navbar_cart_product_price";
  productPrice.textContent = productData.price + "$";



  let productRemoveButton = createEl("button");
  productRemoveButton.className = "btn_navbar_cart_remove";

  productRemoveButton.addEventListener("click", () => {
    removeFromCart(productData, cartIndex)
  });

  let productRemoveButtonImg = createEl("img");
  productRemoveButtonImg.src = "./Assets/remove.png";
  productRemoveButtonImg.alt = "remove product button img" + productData.title;




  productImageContainer.append(productImage);
  productTextContainer.append(productTitle, productPrice);
  productRemoveButton.append(productRemoveButtonImg);

  listElement.append(productImageContainer, productTextContainer, productRemoveButton);
  return listElement;
}


// LOGIC ------------------------------------------
export const renderCartElements = () => {
  let cartList = getEl(".cart_list");
  let cartCounter = getEl(".navbar__cart_counter_data");
  cartCounter.textContent = productsOnCart.length;
  cartList.textContent = "";
  if (productsOnCart.length !== 0) {
    productsOnCart.map((prod, index) => {
      cartList.append(createCartElement(prod, index));
    });
  } else {
    let noData = createEl("p");
    noData.textContent = "Carrello vuoto.";
    cartList.append(noData)
  }
}

export const addToCart = (product) => {
  productsOnCart.push(product);
  renderCartElements();
  console.log("Cart aggiornato");
  console.log(productsOnCart);
}

const removeFromCart = (product, cartIndex) => {
  console.log("removeFromCart : ", product.id);
  let auxCart = []
  productsOnCart.forEach((prod, ind) => {
    ind !== cartIndex ? auxCart.push(prod) : null
  });
  console.log("auxCart", auxCart)
  productsOnCart = [...auxCart];
  renderCartElements();
}
import { createEl, getEl } from './DOM.js';
import { showAlert } from './alerts.js'
import { stateAuth } from '../script.js';

// DATA SHARED ------------------------------------
export let productsOnCart = [];

export let setProductsOnCart = (data) => {
  return productsOnCart = data
}

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
  showAlert("Prodotto aggiunto con successo.", 1, "success")
  productsOnCart.push(product);
  stateAuth.uploadUserData(productsOnCart);
  renderCartElements();
}

const removeFromCart = (product, cartIndex) => {
  let auxCart = []
  productsOnCart.forEach((prod, ind) => {
    ind !== cartIndex ? auxCart.push(prod) : null
  });
  productsOnCart = [...auxCart];
  stateAuth.uploadUserData(productsOnCart);
  showAlert("Prodotto rimosso con successo.", 1, "warning");
  renderCartElements();
}
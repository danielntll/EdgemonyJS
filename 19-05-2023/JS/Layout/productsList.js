import { getEl, createEl } from '../Utils/DOM.js'
import { generateProduct } from '../Utils/products.js'

// Variables --------------------------------------

// UI ELEMENTS ------------------------------------
export const renderProductsList = (dataProducts) => {


  let rootContent = createEl("div");

  let contentTitle = createEl("h2");
  contentTitle.textContent = "Products";
  rootContent.append(contentTitle);

  let productsList = createEl("div");
  productsList.className = "all_products_container";

  dataProducts.map((product) => {
    productsList.append(generateProduct(product));
  })
  rootContent.append(productsList);
  return rootContent;
}
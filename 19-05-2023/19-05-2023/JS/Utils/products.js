import { createEl } from './DOM.js';
import { addToCart } from './cart.js';
import { generateModalProduct } from './modalProduct.js';

// UI ELEMENTS ------------------------------------
export const generateProduct = (productData) => {

  let productCard = createEl("div");
  productCard.className = "productCard";

  productCard.addEventListener("click", () => generateModalProduct(productData))

  let productImg = createEl("img");
  productImg.src = productData.thumbnail;
  productImg.alt = "image" + productData.title;

  let productContent = createEl("div");
  productContent.className = "productCard_content";


  let title = createEl("h4");
  title.textContent = productData.title;

  let description = createEl("p");
  description.textContent = productData.description;

  let ratingContainer = createEl("div");
  ratingContainer.className = "productCard_rating";;

  let star = createEl("img");
  star.src = "./Assets/star.png";
  star.alt = "rating product " + productData.title;

  let starContainerVal = createEl("p");

  let starVal = createEl("span");
  starVal.textContent = productData.rating + "/5";

  starContainerVal.append(starVal);
  ratingContainer.append(star, starContainerVal);


  let button = createEl("button");
  button.className = "productCard_button";
  button.addEventListener("click", (ev) => {
    addToCart(productData);
    ev.stopPropagation();
  })

  let imgButton = createEl("img");
  imgButton.src = "./Assets/addCart.png";
  imgButton.alt = "addToCart img";

  let buttonPrice = createEl("p");
  buttonPrice.textContent = productData.price + "$";

  button.append(imgButton, buttonPrice);

  productContent.append(title, description, ratingContainer, button);

  productCard.append(productImg, productContent);
  return productCard;
}
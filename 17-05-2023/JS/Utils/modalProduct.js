import { createEl, getEl } from './DOM.js';
import { addToCart } from './cart.js';

// IMPORT wishList
let wishList = [""];

// TODO: addToWish (productData.id) 
// TODO: removeFromWish (productData.id) 


// TODO: openProductPage (productData) 


// Variables --------
let imageIndex = 0;
let bodyRef = getEl("body");


// UI GENERATE --------------------------
export const generateModalProduct = (productData) => {
  let main = getEl("main");
  main.className = "blur-bg";
  let divOverlay = createEl("div");
  divOverlay.className = "overlay";

  let divModal = createEl("div");
  divModal.className = "modal";

  let btn_modalClose = createEl("button");
  btn_modalClose.className = "btn_modalClose";
  btn_modalClose.addEventListener("click", () => closeModal(divOverlay));

  let btn_modalClose_img = createEl("img");
  btn_modalClose_img.src = "./Assets/remove.png";
  btn_modalClose_img.alt = "close modal img icon";

  btn_modalClose.append(btn_modalClose_img);

  let modal_container = createEl("div");
  modal_container.className = "modal_container";

  let modal_images = createEl("div");
  modal_images.className = "modal_images";

  let modal_div_main_img = createEl("div");
  modal_div_main_img.className = "modal_main_img";

  let modal_main_img = createEl("img");
  modal_main_img.src = productData.images[0];
  modal_main_img.alt = productData.title + "image n" + imageIndex;

  let modal_all_images = createEl("div");
  modal_all_images.className = "modal_all_images";

  productData.images.forEach(img => {
    let modal_small_image = createEl("div");
    modal_small_image.className = "modal_small_image";

    modal_small_image.addEventListener("mouseover", () => changeMainImage(img, modal_main_img))

    let modal_small_image_img = createEl("img");
    modal_small_image_img.src = img;
    modal_small_image_img.alt = productData.title;
    modal_small_image.append(modal_small_image_img);
    modal_all_images.append(modal_small_image);
  });

  modal_div_main_img.append(modal_main_img);
  modal_images.append(modal_div_main_img, modal_all_images);

  let modal_product_info_div = createEl("div");
  modal_product_info_div.className = "modal_product_info";

  let modal_product_info_content = createEl("div");
  modal_product_info_content.className = "modal_product_info_content";

  let title_product = createEl("h2");
  title_product.textContent = productData.title;

  let description_product = createEl("h4");
  description_product.textContent = productData.description;

  let modal_product_price_container = createEl("div");
  modal_product_price_container.className = "modal_product_price_container";

  let price_product = createEl("h2");
  price_product.textContent = productData.price + "$";

  let discount_product = createEl("sup");
  discount_product.textContent = "-" + productData.discountPercentage + "%";
  price_product.append(discount_product)
  modal_product_price_container.append(price_product);

  let modal_buttons_container = createEl("div");
  modal_buttons_container.className = "modal_buttons_container";

  let first_button = createEl("button");
  first_button.className = "modal_btn_add_to_cart";
  first_button.addEventListener("click", () => addToCart(productData))

  let first_button_img = createEl("img");

  first_button_img.src = "./Assets/addCart.png";
  first_button_img.alt = "add to cart img on modal";

  let first_button_text = createEl("p");
  first_button_text.textContent = "Buy";

  first_button.append(first_button_img, first_button_text);




  let second_button = createEl("button");
  second_button.className = "modal_btn_wish";

  if (wishList.find(wishId => wishId === productData.id) !== undefined) {
    second_button.addEventListener("click", () => removeFromWish(productData.id))

    let second_button_img = createEl("img");

    second_button_img.src = "./Assets/love.png";
    second_button_img.alt = "remove from wish list img on modal";

    let second_button_text = createEl("p");
    second_button_text.textContent = "Remove";

    second_button.append(second_button_img, second_button_text);
  } else {

    second_button.addEventListener("click", () => addToWish(productData.id))

    let second_button_img = createEl("img");

    second_button_img.src = "./Assets/like.png";
    second_button_img.alt = "add to wish list img on modal";

    let second_button_text = createEl("p");
    second_button_text.textContent = "Wish";

    second_button.append(second_button_img, second_button_text);
  }

  let third_button = createEl("button");
  third_button.className = "modal_btn_view";
  third_button.addEventListener("click", () => openProductPage(productData))

  let third_button_img = createEl("img");

  third_button_img.src = "./Assets/view.png";
  third_button_img.alt = "view product page on modal";

  let third_button_text = createEl("p");
  third_button_text.textContent = "Open";

  third_button.append(third_button_img, third_button_text);







  modal_buttons_container.append(first_button, second_button, third_button);




  modal_product_info_content.append(title_product, description_product, modal_product_price_container, modal_buttons_container);

  modal_product_info_div.append(modal_product_info_content);

  modal_container.append(modal_images, modal_product_info_div);

  divModal.append(btn_modalClose, modal_container);
  divOverlay.append(divModal);
  bodyRef.append(divOverlay);
  return;
}



// Functions -------------------------
const closeModal = (modalRef) => {
  let main = getEl("main");
  main.classList.remove("blur-bg");
  modalRef.remove();
}

const changeMainImage = (imageUrl, containerRef) => {
  containerRef.src = imageUrl;
}
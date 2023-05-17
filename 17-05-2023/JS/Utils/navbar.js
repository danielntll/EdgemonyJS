import { getEl } from './DOM.js';

export const toggleMenu = () => {
  let hamburgerMenuEl = getEl(".navbar__menu");
  let menuList = getEl(".navbar_links");
  // console.log(menuList);
  hamburgerMenuEl.addEventListener("click", () => {
    menuList.style.display === "block" ? menuList.style.display = "none"
      :
      menuList.style.display = "block"
  });
}
export const toggleCart = () => {
  let hamburgerMenuEl = getEl(".navbar__cart");
  let menuList = getEl(".navbar__cart_view");
  // console.log(menuList);
  hamburgerMenuEl.addEventListener("click", () => {
    menuList.style.display === "block" ? menuList.style.display = "none"
      :
      menuList.style.display = "block"
  });
}
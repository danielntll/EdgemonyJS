import { createEl, getEl } from '../Utils/DOM.js';

// Variables --------------------------------------

// UI ELEMENTS ------------------------------------
export const generateSearchBar = () => {
  let searchbar = createEl("div");
  searchbar.className = "searchbar";

  let img = createEl("img");
  img.src = "./Assets/search.png";
  img.alt = "search icon";

  let input = createEl("input");
  input.className = "searchbarInput";
  input.type = "text";
  input.placeholder = "Search by name, description or rating"
  input.name = "searchbarInput"
  input.addEventListener("keyup", search);

  searchbar.addEventListener("mouseover", () => { input.focus(); input.style.opacity = "1" })
  searchbar.addEventListener("mouseout", () => { input.blur(); input.style.opacity = "0" })
  searchbar.append(img, input);
  return searchbar;
}

const search = (search) => {
  let auxProducts = Array.from(
    document.getElementsByClassName("productCard")
  )
  if (search.target.value.length > 0) {
    let searchFormat = search.target.value.toLowerCase();
    auxProducts.forEach((product) => {
      const needDisplay = product.textContent.toLowerCase().indexOf(searchFormat) > -1;
      product.style.display = needDisplay ? "block" : "none";
    })
  } else {
    auxProducts.forEach((product) => {
      product.style.display = "block";
    })
  }

}
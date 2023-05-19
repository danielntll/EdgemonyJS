import { markSelectedComponent } from "../Utils/markSelectedComponent.js";
import { getEl, createEl } from '../Utils/DOM.js'
import { stateAuxData } from '../script.js'
import { renderProductsList } from '../Layout/productsList.js'


// Variables --------------------------------------
let uniqueCategories = ["All products"];

// UI ELEMENTS ------------------------------------
export const generateCategories = (dataProducts) => {
  let categoriesWrap = createEl("div");
  categoriesWrap.className = "categoriesWrap";

  let categoriesWrap_title = createEl("h3");
  categoriesWrap_title.textContent = "Categories:";


  let categoriesDiv = createEl("categories");
  categoriesDiv.className = "categories";

  categoriesDiv.append(generateCategory(uniqueCategories[0], dataProducts));
  dataProducts.forEach(product => {
    if (
      uniqueCategories.find(category => category === product.category) === undefined
    ) {
      uniqueCategories.push(product.category);
      categoriesDiv.append(generateCategory(product.category, dataProducts));
    }
  });
  categoriesWrap.append(categoriesWrap_title, categoriesDiv);
  return categoriesWrap
}


const generateCategory = (categoryName, data) => {
  let catogory = createEl("div");
  catogory.className = "category";
  if (categoryName === "All products") catogory.classList.add("bg_success");
  stateAuxData.setValue(data);
  catogory.addEventListener("click", () => {
    markSelectedComponent("category", categoryName);
    if (categoryName === "All products") {
      stateAuxData.setValue(data);
      renderProductsList(data);
    } else {
      let aux = data.filter(prod => prod.category === categoryName)
      stateAuxData.setValue(aux);
      renderProductsList(aux);
    }
  });

  let catogoryName = createEl("p");
  catogoryName.textContent = categoryName;
  catogory.append(catogoryName);
  return catogory;
}


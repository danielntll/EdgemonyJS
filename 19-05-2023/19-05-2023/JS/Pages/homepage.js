
import { generateTitle } from '../Layout/title.js'
import { createHero } from '../Layout/hero.js'
import { generateCategories } from '../Layout/categories.js'
import { generateFilters } from '../Layout/filters.js'
import { renderProductsList } from '../Layout/productsList.js'
import { generateSearchBar } from '../Layout/searchbar.js'

import { root, dataDB, stateAuth } from '../script.js'


export const homePage = (productsUpdated) => {
  // Variables --------------
  root.textContent = '';
  let auxRoot = root;

  // UI ELEMENTS ------------------------------------
  // 0 ----------
  let title = generateTitle(stateAuth);
  // 1 ----------
  let hero = createHero(
    {
      imgUrl: "https://cdn.mobilesyrup.com/wp-content/uploads/2020/12/all-the-phones-wm.jpg",
      content: "Lorem lorem lorem",
      ctaTextContent: "Clicca qui"
    });


  // 2 ----------
  console.log("dataDB.products : ", dataDB.products);
  let categories = generateCategories(dataDB.products);

  // 3 ----------
  let filters = generateFilters();

  // 4 ----------
  let products = renderProductsList(productsUpdated ? productsUpdated : dataDB.products);

  // OVER ALL 
  let search = generateSearchBar();



  // page return -------------------------
  auxRoot.append(title, hero, categories, filters, products, search);
}


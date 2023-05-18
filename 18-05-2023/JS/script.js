import { toggleMenu, toggleCart } from './Utils/navbar.js'
import { getEl, createEl } from './Utils/DOM.js'

import { renderCartElements } from './Utils/cart.js'
import { generateProduct } from './Utils/products.js'



/**
 * TODO : Creare un array di prodotti condiviso tra i filtri 
 * Categories e Filter, in quanto uno deseleziona l'altro. 
 * Quindi bisogna creare una funzione che combina entrambi.
 * 
 * NOTA : per mancanza di tempo lo posticipo.
 */


let auxData = [];

// INITIALIZZATION ----------
toggleMenu();
toggleCart();

let uniqueCategories = ["All products"];

let dataFilters = [
  {
    name: "Remove Filters",
    imgFilter: "./Assets/filter.png",
    function: () => {
      renderProducts(auxData)
    }
  },
  {
    name: "Price min",
    imgFilter: "./Assets/sort.png",
    function: () => {
      let aux = [...auxData]
      aux.sort((a, b) => a.price - b.price)
      renderProducts(aux)
    }
  },
  {
    name: "Price max",
    imgFilter: "./Assets/sort.png",
    function: () => {
      let aux = [...auxData]
      aux.sort((a, b) => b.price - a.price)
      renderProducts(aux)
    }
  },
  {
    name: "A-Z",
    imgFilter: "./Assets/descending.png",
    function: () => {
      let aux = [...auxData]
      aux.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProducts(aux)
    }
  },
  {
    name: "Z-A",
    imgFilter: "./Assets/descending.png",
    function: () => {
      let aux = [...auxData]
      aux.sort((b, a) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProducts(aux)
    }
  },
]

// Functions ---------------------
const generateFilters = () => {
  let filtersDiv = getEl(".filters");

  dataFilters.forEach(filter => {
    filtersDiv.append(generateFilter(filter));
  })
}

const generateFilter = (filterData) => {
  let filter = createEl("div");
  filter.className = "filter";
  filter.addEventListener("click", () => {
    renderSelected("filter", filterData.name);
    filterData.function()
  });

  let imgFilter = createEl("img");
  imgFilter.src = filterData.imgFilter;
  imgFilter.alt = "filter image icon";

  let nameFilter = createEl("p");
  nameFilter.textContent = filterData.name;
  filter.append(imgFilter, nameFilter);

  return filter;
}

const generateCategories = (dataProducts) => {

  let categoriesDiv = getEl(".categories");
  categoriesDiv.append(generateCategory(uniqueCategories[0], dataProducts));
  dataProducts.forEach(product => {
    if (
      uniqueCategories.find(category => category === product.category) === undefined
    ) {
      uniqueCategories.push(product.category);
      categoriesDiv.append(generateCategory(product.category, dataProducts));
    }
  })
}

const renderSelected = (selector, selectedCategory) => {
  let allCategories = document.querySelectorAll(`.${selector}`);
  allCategories.forEach(cat => {
    if (cat.textContent === selectedCategory) {
      cat.classList.add("bg_success");
    } else {
      cat.classList.remove("bg_success");
    }
  })
}

const generateCategory = (categoryName, data) => {
  let catogory = createEl("div");
  catogory.className = "category";
  if (categoryName === "All products") catogory.classList.add("bg_success");
  auxData = data;
  catogory.addEventListener("click", () => {
    renderSelected("category", categoryName);
    if (categoryName === "All products") {
      auxData = data;
      renderProducts(data);
    } else {
      auxData = data.filter(prod => prod.category === categoryName)
      renderProducts(auxData);
    }
  });

  let catogoryName = createEl("p");
  catogoryName.textContent = categoryName;
  catogory.append(catogoryName);
  return catogory;
}


const initSearchBar = () => {
  let sB = getEl(".searchbarInput");
  sB.addEventListener("keyup", search);
  let containerSb = getEl(".searchbar");
  containerSb.addEventListener("mouseover", () => { sB.focus(); sB.style.opacity = "1" })
  containerSb.addEventListener("mouseout", () => { sB.blur(); sB.style.opacity = "0" })
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

const renderProducts = (dataProducts) => {
  let rootContent = getEl(".root-content");
  rootContent.textContent = '';


  let contentTitle = createEl("h2");
  contentTitle.textContent = "Products";
  rootContent.append(contentTitle);

  let productsList = createEl("div");
  productsList.className = "all_products_container";

  dataProducts.map((product) => {
    productsList.append(generateProduct(product));
  })
  rootContent.append(productsList);
}


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    initSearchBar();
    renderCartElements();
    renderProducts(data.products);
    generateFilters(data.products);
    generateCategories(data.products)
  })

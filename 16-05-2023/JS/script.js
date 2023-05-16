import { toggleMenu, toggleCart } from './Utils/navbar.js'
import { getEl, createEl } from './Utils/DOM.js'

import { renderCartElements } from './Utils/cart.js'
import { generateProduct } from './Utils/products.js'

// import { generateProducts } from './Utils/rootContent.js'

// INITIALIZZATION ----------
toggleMenu();
toggleCart();


let dataFilters = [
  {
    name: "Remove Filters",
    imgFilter: "./Assets/filter.png",
    function: (data) => {
      renderProducts(data)
    }
  },
  {
    name: "Price min",
    imgFilter: "./Assets/sort.png",
    function: (data) => {
      let aux = [...data]
      aux.sort((a, b) => a.price - b.price)
      renderProducts(aux)
    }
  },
  {
    name: "Price max",
    imgFilter: "./Assets/sort.png",
    function: (data) => {
      let aux = [...data]
      aux.sort((a, b) => b.price - a.price)
      renderProducts(aux)
    }
  },
  {
    name: "A-Z",
    imgFilter: "./Assets/descending.png",
    function: (data) => {
      let aux = [...data]
      aux.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProducts(aux)
    }
  },
  {
    name: "Z-A",
    imgFilter: "./Assets/descending.png",
    function: (data) => {
      let aux = [...data]
      aux.sort((b, a) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProducts(aux)
    }
  },
]

// Functions ---------------------
const generateFilters = (dataProducts) => {
  let filtersDiv = getEl(".filters");

  dataFilters.forEach(filter => {
    filtersDiv.append(generateFilter(filter, dataProducts));
  })
}

const generateFilter = (filterData, data) => {
  let filter = createEl("div");
  filter.className = "filter";
  filter.addEventListener("click", () => filterData.function(data));

  let imgFilter = createEl("img");
  imgFilter.src = filterData.imgFilter;
  imgFilter.alt = "filter image icon";

  let nameFilter = createEl("p");
  nameFilter.textContent = filterData.name;
  filter.append(imgFilter, nameFilter);

  return filter;
}

const initSearchBar = () => {
  let sB = getEl(".searchbarInput");
  sB.addEventListener("keyup", search);
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

  dataProducts.map((product, index) => {
    productsList.append(generateProduct(product));
  })
  rootContent.append(productsList);
}


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderCartElements();
    renderProducts(data.products);
    generateFilters(data.products);
    initSearchBar();
  })

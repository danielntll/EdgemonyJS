import { markSelectedComponent } from "../Utils/markSelectedComponent.js";
import { getEl, createEl } from '../Utils/DOM.js'
import { renderProductsList } from '../Layout/productsList.js'
import { stateAuxData } from '../script.js'

// Variables --------------------------------------
let dataFilters = [
  {
    name: "Remove Filters",
    imgFilter: "./Assets/filter.png",
    function: () => {
      let aux = [...stateAuxData.getValue()];
      renderProductsList(aux);
    }
  },
  {
    name: "Price min",
    imgFilter: "./Assets/sort.png",
    function: () => {
      let aux = [...stateAuxData.getValue()]
      aux.sort((a, b) => a.price - b.price)
      renderProductsList(aux)
    }
  },
  {
    name: "Price max",
    imgFilter: "./Assets/sort.png",
    function: () => {
      let aux = [...stateAuxData.getValue()]
      aux.sort((a, b) => b.price - a.price)
      renderProductsList(aux)
    }
  },
  {
    name: "A-Z",
    imgFilter: "./Assets/descending.png",
    function: () => {
      let aux = [...stateAuxData.getValue()]
      aux.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProductsList(aux)
    }
  },
  {
    name: "Z-A",
    imgFilter: "./Assets/descending.png",
    function: () => {
      let aux = [...stateAuxData.getValue()]
      aux.sort((b, a) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      renderProductsList(aux)
    }
  },
]

// UI ELEMENTS ------------------------------------
export const generateFilters = () => {
  let filtersWrap = createEl("div");
  filtersWrap.className = "filtersWrap";

  let filtersWrap_title = createEl("h3");
  filtersWrap_title.textContent = "Filter by:";

  let filtersDiv = createEl("div");
  filtersDiv.className = "filters";

  dataFilters.forEach(filter => {
    filtersDiv.append(generateFilter(filter));
  })
  filtersWrap.append(filtersWrap_title, filtersDiv)
  return filtersWrap;
}


const generateFilter = (filterData) => {
  let filter = createEl("div");
  filter.className = "filter";
  filter.addEventListener("click", () => {
    markSelectedComponent("filter", filterData.name);
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



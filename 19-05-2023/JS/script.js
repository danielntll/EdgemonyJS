import { toggleMenu, toggleCart } from './Utils/navbar.js'
import { getEl, createEl } from './Utils/DOM.js'
import { renderCartElements } from './Utils/cart.js'
import { homePage } from './Pages/homepage.js'
import { accessPage } from './Pages/access.js';
import { readStorage } from './Logic/localstorage.js';

export let root = getEl("#root");
export let dataDB = [];


export let stateAuth = {
  state: true,
  getValue: () => { return state; },
  setValue: (bool) => { state = bool },
  getData: () => {
    let authenticatedUser = readStorage.user();
    if (authenticatedUser === null || authenticatedUser === undefined) {
      return rooting.goAccess()
    } else {
      return readStorage.user();
    }
  },
}



let auxData = [];

export let stateAuxData = {
  getValue: () => { return auxData },
  setValue: (val) => {
    auxData = val;
  }
};


// ALL APP UI ELEMENTS ------------------------------------

toggleMenu();
toggleCart();
// --------------  PAGES -----------------------
export const rooting = {
  goAccess: () => {
    accessPage(root, rooting, stateAuth);
  },
  goHomepage: () => {
    homePage();
  }
}

// INITIALIZZATION ----------
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderCartElements();
    dataDB = data;

    if (stateAuth.getData()) {
      rooting.goHomepage();
    }

  })

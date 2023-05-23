import { toggleMenu, toggleCart } from './Utils/navbar.js'
import { getEl, createEl } from './Utils/DOM.js'
import { renderCartElements, addToCart, setProductsOnCart } from './Utils/cart.js'
import { homePage } from './Pages/homepage.js'
import { accessPage } from './Pages/access.js';
import { readStorage } from './Logic/localstorage.js';
import { GET, POST } from './Logic/db.js'
import { showAlert } from './Utils/alerts.js';

export let root = getEl("#root");
export let dataDB = [];


export let stateAuth = {
  state: true,
  elementsOnCart: [],
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
  syncUserCart: async () => {
    let aux = await GET(`/carts/${stateAuth.getData().userAccess.id}`).then((data) => {
      return data.products
    }
    );
    setProductsOnCart(aux);
    renderCartElements();
    showAlert("Utente sincronizzato.", 2, "success");
  },
  uploadUserData: async (data) => {
    POST(`/carts/${stateAuth.getData().userAccess.id}`, data)
  }

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
  goHomepage: async () => {
    await stateAuth.syncUserCart();
    homePage();
  }
}

// INITIALIZZATION ----------
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderCartElements();
    dataDB = data;
    auxData = data;

    if (stateAuth.getData()) {
      rooting.goHomepage();
    }
  })

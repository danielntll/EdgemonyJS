import { getEl, createEl } from "../Utils/DOM.js";


// ----------- UI ---------------
export const generateHeader = () => {
  let header = createEl("header");

  let hamburger = createEl("div");
  hamburger.className = "hamburger";
  hamburger.addEventListener("click", () => openSideMenu())

  let hamburger_icon = createEl("img");
  hamburger_icon.src = "./Assets/icons/menu.png";
  hamburger_icon.alt = "hamburger icon";

  hamburger.append(hamburger_icon);


  let sidenav = createEl("div");
  sidenav.className = "sidenav";

  let closeButton = createEl("a");
  closeButton.href = "javascript:void(0)";
  closeButton.className = "closebtn";
  closeButton.addEventListener("click", () => closeSideMenu())

  let closeButton_img = createEl("img");
  closeButton_img.src = "./Assets/icons/close.png";

  closeButton.append(closeButton_img);

  let a_home = createEl("a");
  a_home.href = "#";
  a_home.textContent = "Home";
  a_home.addEventListener("click", () => goHome());

  let a_liked = createEl("a");
  a_liked.href = "#";
  a_liked.textContent = "Liked";
  a_liked.addEventListener("click", () => openLikedLocations());

  let a_history = createEl("a");
  a_history.href = "#";
  a_history.textContent = "History";
  a_history.addEventListener("click", () => openSearchHistory());

  sidenav.append(closeButton, a_home, a_liked, a_history);

  header.append(hamburger, sidenav);

  return header;
}



// ---------- functions ---------

const closeSideMenu = () => {
  getEl(".sidenav").style.width = "0";
}

const openSideMenu = () => {
  getEl(".sidenav").style.width = "250px";
}

const goHome = () => {

}

const openLikedLocations = () => {

}

const openSearchHistory = () => {

}

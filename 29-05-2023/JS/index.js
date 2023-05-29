import { NavbarComponent, navBarElements } from "../Components/navbar/navbar.js";
import { DefaultStructureRenderContent } from "../Pages/DefaultStructure/DefaultStructure.js";
import { getEl } from "./Utils/DOM.js";
import { homepageUrl } from "./Utils/navigationUrls.js";



export let navigation = {
  currentUrl: "",
  getUrl: () => { return navigation.currentUrl },
  setUrl: (url) => {
    navigation.currentUrl = url;
    navigation.setHistory(url);
  },
  navigate: {
    To: (url) => {
      navigation.currentUrl = url;
      navigation.setHistory(url);
      switchContent(url);
    }
  },
  history: [],
  setHistory: (url) => {
    navigation.history.push(url);
  },
  getHistory: () => {
    return navigation.history.history;
  }
};

export const switchContent = (url) => {
  navBarElements.map((route, index) => {
    if (route.url === url) {
      initializzation(url);
      window.history.pushState({}, route.name, route.url);
    }
  })
}

navigation.setUrl(homepageUrl);
// window.history.pushState({}, 'home', homepageUrl);

export const initializzation = (urlContent) => {
  let root = getEl("#root");

  let DefaultStructure = getEl(".DefaultStructure");
  DefaultStructure.textContent = "";

  DefaultStructure.append(NavbarComponent(urlContent));
  DefaultStructure.append(DefaultStructureRenderContent(urlContent));

  root.append(DefaultStructure);
}



initializzation(navigation.getUrl())
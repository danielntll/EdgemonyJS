import { NavbarComponent, navBarElements } from "../Components/navbar/navbar.js";
import { DefaultStructureRenderContent } from "../Pages/DefaultStructure/DefaultStructure.js";
import { getEl } from "./Utils/DOM.js";
import { homePageFeed } from "./Utils/Data.js";
import { injectCss } from "./Utils/InjectCSSFile.js";
import { homepageUrl } from "./Utils/navigationUrls.js";



export let navigation = {
  currentUrl: "",
  getUrl: () => { return navigation.currentUrl },
  setUrl: (url) => {
    navigation.currentUrl = url;
    navigation.setHistory(url);
  },
  navigate: {
    To: (url, params = []) => {

      navigation.currentUrl = url;
      navigation.setHistory(url);
      switchContent(url, params);
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

export const switchContent = (url, params = []) => {
  navBarElements.map((route) => {
    if (route.url === url) {
      initializzation(url, params);
      window.history.pushState({}, route.name, route.url);
    }
  })
}

navigation.setUrl(homepageUrl);

export const initializzation = (urlContent, params = []) => {
  let root = getEl("#root");

  let DefaultStructure = getEl(".DefaultStructure");
  DefaultStructure.textContent = "";

  DefaultStructure.append(NavbarComponent(urlContent));
  DefaultStructure.append(DefaultStructureRenderContent(urlContent, params));

  root.append(DefaultStructure);
}

const initData = Promise.all([homePageFeed.foryou.fetchNewData(), homePageFeed.following.fetchNewData()]);

initData.then((data) => {
  console.log("THEN", data);
  initializzation(navigation.getUrl())
});

injectCss("../Pages/UserPage/UserPage.css");
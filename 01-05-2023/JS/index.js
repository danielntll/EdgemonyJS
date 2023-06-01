import { NavbarComponent, navBarElements } from "../Components/navbar/navbar.js";
import { DefaultStructureRenderContent } from "../Pages/DefaultStructure/DefaultStructure.js";
import { getEl } from "./Utils/DOM.js";
import { homePageFeed } from "./Utils/Data.js";
import { injectCss } from "./Utils/InjectCSSFile.js";
import { homepageUrl } from "./Utils/navigationUrls.js";


export const thisUSERdata = {
  user: {
    id: 999,
    name: "User " + 999 + Math.floor(Math.random() * (999 - 0) + 0),
    imgUrl: "https://robohash.org/" + 999,
    isVerified: Math.random() < 0.5,
    description: "Ciao mi chiamo Daniel ed ho creato un routing interno che funziona solo con il flusso in app non con quello di default del browser",
    following: Math.floor(Math.random() * (999 - 0) + 0),
    followers: Math.floor(Math.random() * (999 - 0) + 0),
    platform: {
      professional: Math.random() < 0.5,
      type: "Developer"
    },
    location: {
      nation: "Moldavia",
    },
    link: "https://www.instagram.com",
    joined: {
      start: parseInt(Date.now()) + Math.floor(Math.random() * (999 - 0) + 0),
    },
    isFollowed: Math.random() < 0.5,
    totalTweets: Math.floor(Math.random() * (999 - 0) + 0),
    isYou: true,
  },
  data: new Date(new Date() - Math.random() * (1e+12)),
  reply: Math.floor(Math.random() * (999 - 0) + 0),
  retweet: Math.floor(Math.random() * (999 - 0) + 0),
  like: Math.floor(Math.random() * (999 - 0) + 0),
  views: Math.floor(Math.random() * (999 - 0) + 0),
};




export let navigation = {
  currentUrl: "",
  getUrl: () => { return navigation.currentUrl },
  setUrl: (url) => {
    navigation.currentUrl = url;
    navigation.setHistory(url);
  },
  navigate: {
    To: (url, params = []) => {
      console.log("Navigate to", url);
      navigation.currentUrl = url;
      navigation.setHistory(url);
      switchContent(url, params);
    },
    goBack: () => {
      let aux = navigation.getHistory();
      let dim = aux.length;

      navigation.navigate.To(aux[aux.length - 2])
    }
  },
  history: [],
  setHistory: (url) => {
    console.log("SET HYSTORY : ")
    navigation.history.push(url);
  },
  getHistory: () => {
    return navigation.history;
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
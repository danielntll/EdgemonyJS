import { createEl } from "../../JS/Utils/DOM.js";
import { homePageFeed } from "../../JS/Utils/Data.js";
import { injectCss } from "../../JS/Utils/InjectCSSFile.js"
import { navigation } from "../../JS/index.js";
import { homepageContentSection } from "./Components/contentSection/contentSection.js";
import { headerSection } from "./Components/headerSection/headerSection.js";
import { inputFormSection } from "./Components/inputFormSection/inputFormSection.js";


export const renderHomePage = () => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Homepage.css");
  // VARIABLES ---------------------
  let mainElement = createEl("div", "homePageContent");
  // CONDITIONS --------------------

  // mainElement.append(headerSection(homePageContents));

  homePageContents.map((content) => {
    if (content.active) {
      mainElement.append(homepageContentSection(content))
    }
  })

  // RETURN ------------------------
  return mainElement;
}


export const homePageContents = [
  {
    active: true,
    title: "For You",
    render: async () => await renderForYouContent(),
    getData: () => {
      return homePageFeed.foryou.getData()
    }
  },
  {
    active: false,
    title: "Following",
    render: async () => await renderFollowingContent(),
    getData: () => {
      return homePageFeed.following.getData();
    }
  },
]


const renderForYouContent = async () => {
  // Update UI -------------
  homePageContents.forEach(el =>
    el.active = false
  )
  homePageContents[0].active = true;

  // FETCH DATA -------------
  await homePageFeed.foryou.fetchNewData();
  // RENDER SECTION-------------
  navigation.navigate.To("/home");
  console.log("render for you");
  return ("render for you");
}

const renderFollowingContent = async () => {
  // Update UI -------------
  homePageContents.forEach(el =>
    el.active = false
  )
  homePageContents[1].active = true;

  // FETCH DATA -------------
  await homePageFeed.following.fetchNewData();
  // RENDER SECTION-------------
  navigation.navigate.To("/home");

  console.log("render following");
  return ("render following");
}



import { createEl } from "../../JS/Utils/DOM.js";
import { injectCss } from "../../JS/Utils/InjectCSSFile.js"
import { navigation } from "../../JS/index.js";
import { contentSection } from "./Components/contentSection/contentSection.js";
import { headerSection } from "./Components/headerSection/headerSection.js";
import { inputFormSection } from "./Components/inputFormSection/inputFormSection.js";


export const renderHomePage = () => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Homepage.css");
  // VARIABLES ---------------------
  let mainElement = createEl("div");;
  // CONDITIONS --------------------

  mainElement.append(headerSection(homePageContents));
  mainElement.append(inputFormSection());

  homePageContents.map((content) => {
    if (content.active) {
      mainElement.append(contentSection(content))
    }
  })

  // RETURN ------------------------
  return mainElement;
}


const homePageContents = [
  {
    active: true,
    title: "For You",
    render: () => renderForYouContent(),
  },
  {
    active: false,
    title: "Following",
    render: () => renderFollowingContent(),
  },
]


const renderForYouContent = () => {
  homePageContents.forEach(el =>
    el.active = false
  )
  homePageContents[0].active = true;
  navigation.navigate.To("/home");
  console.log("render for you");
  return ("render for you");
}
const renderFollowingContent = () => {
  homePageContents.forEach(el =>
    el.active = false
  )
  homePageContents[1].active = true;

  navigation.navigate.To("/home");

  console.log("render following");
  return ("render following");
}
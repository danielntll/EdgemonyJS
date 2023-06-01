import { createEl } from "../../../../JS/Utils/DOM.js";
import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";
import { homePageContents } from "../../HomePage.js";
import { headerSection } from "../headerSection/headerSection.js";
import { inputFormSection } from "../inputFormSection/inputFormSection.js";
import { post } from "../post/post.js";


export const homepageContentSection = (content) => {
  console.log("homepageContentSection : ", content);

  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/contentSection/contentSection.css");

  // VARIABLES ---------------------
  let mainElement = createEl("div", "contentSection");
  let title = createEl("h1")
  title.textContent = content.title;
  mainElement.append(headerSection(homePageContents))
  mainElement.append(inputFormSection())
  // CONDITIONS --------------------

  let postData = content.getData();
  postData.forEach(element => {
    mainElement.append(post(element))
  });
  // RETURN ------------------------
  mainElement.append(title);
  return mainElement;
}
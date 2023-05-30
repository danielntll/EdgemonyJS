import { createEl } from "../../../../JS/Utils/DOM.js";
import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";
import { post } from "../post/post.js";


export const homepageContentSection = (content) => {
  console.log("homepageContentSection : ", content);

  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/contentSection/contentSection.css");

  // VARIABLES ---------------------
  let mainElement = createEl("div", "contentSection");
  let title = createEl("h1")
  title.textContent = content.title;

  // CONDITIONS --------------------

  let postData = content.getData();
  postData.forEach(element => {
    mainElement.append(post(element))
  });
  // RETURN ------------------------
  mainElement.append(title);
  return mainElement;
}
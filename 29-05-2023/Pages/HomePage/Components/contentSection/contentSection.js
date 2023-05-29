import { createEl } from "../../../../JS/Utils/DOM.js";
import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";


export const contentSection = (content) => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/contentSection/contentSection.css");

  // VARIABLES ---------------------
  let mainElement = createEl("div");
  let title = createEl("h1")
  title.textContent = content.title
  // CONDITIONS --------------------
  // RETURN ------------------------
  mainElement.append(title);
  return mainElement;
}
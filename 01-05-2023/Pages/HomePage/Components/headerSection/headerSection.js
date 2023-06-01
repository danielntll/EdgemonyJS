import { createEl } from "../../../../JS/Utils/DOM.js";
import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";



export const headerSection = (homePageContents) => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/headerSection/headerSection.css");

  // VARIABLES ---------------------
  let mainElement = createEl("div", "headerSection");
  let headerSection_content = createEl("div", "headerSection-content");
  let title = createEl("h1");
  title.textContent = "Home";

  let headerSection_contentSelection = createEl("div", "headerSection-contentSelection");


  homePageContents.map((section, index) => {
    let headerSection_button_container = createEl("div", "headerSection-button-container");

    let headerSection_button = createEl("div", "headerSection-button");
    let headerSection_button_txt = createEl("h4", "");

    headerSection_button_txt.textContent = section.title;

    let headerSection_button_selected = section.active ?
      createEl("div", "headerSection-button-selected-active") :
      createEl("div", "headerSection-button-selected");

    headerSection_button.addEventListener("click", () => {
      section.render();
    });

    headerSection_button.append(headerSection_button_txt, headerSection_button_selected);
    headerSection_button_container.append(headerSection_button);
    headerSection_contentSelection.append(headerSection_button_container);
  })


  // CONDITIONS --------------------
  headerSection_content.append(title);

  // RETURN ------------------------
  mainElement.append(headerSection_content, headerSection_contentSelection);
  return mainElement;
}

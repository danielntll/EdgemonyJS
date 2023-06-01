import { createEl } from "../../JS/Utils/DOM.js";
import { injectCss } from "../../JS/Utils/InjectCSSFile.js";
import { UserPage_header } from "./Components/header/UserPage_header.js";


export const renderUserPage = (params) => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/UserPage/UserPage.css");
  console.log(params);


  // VARIABLES ---------------------
  const userPage = createEl("div", "userPage");
  let isYou = params.isYou ? true : false;
  userPage.append(UserPage_header(params, isYou));
  // CONDITIONS --------------------
  // RETURN ------------------------
  return userPage;
}
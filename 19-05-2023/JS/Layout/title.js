import { createEl, getEl } from '../Utils/DOM.js';

// Variables --------------------------------------

// UI ELEMENTS ------------------------------------
export const generateTitle = (stateAuth) => {
  let userInfo = stateAuth.getData()

  let titleWrap = createEl("div");

  titleWrap.className = "title";


  console.log("stateAuth.getData()", userInfo.userAccess.name);

  stateAuth.state ?
    titleWrap.append(generateAuthenticatedUser(userInfo.userAccess.name))
    :
    titleWrap.append(generateNotAuthenticatedUser());

  return titleWrap;
}

const generateAuthenticatedUser = (userInfo) => {
  let title = createEl("h1");
  let tValue = createEl("span");
  tValue.textContent = "Welcome back ";

  let userLink = createEl("a");
  userLink.href = "/account";
  userLink.textContent = userInfo;

  title.append(tValue, userLink)
  return title;
}

const generateNotAuthenticatedUser = () => {
  let titleW = createEl("div");
  let title = createEl("h1");
  title.textContent = "Welcome!";

  let ctaText = createEl("p");

  let accessLink = createEl("a");
  accessLink.href = "/access";
  accessLink.textContent = "Access";

  let sepSpan = createEl("span");
  sepSpan.textContent = " or ";

  let registerLink = createEl("a");
  registerLink.href = "/register";
  registerLink.textContent = "Register";

  let otherText = createEl("span");
  otherText.textContent = " to find out about fantastic promotions."

  ctaText.append(accessLink, sepSpan, registerLink, otherText)

  titleW.append(title, ctaText);
  return titleW;
}
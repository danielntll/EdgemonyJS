import { createEl, getEl } from '../Utils/DOM.js';
import { authProccess } from '../Logic/authentication.js';
import { showAlert } from '../Utils/alerts.js'

let auxRooting;


export const accessPage = (root, rooting) => {
  // Variables --------------
  root.textContent = '';
  auxRooting = rooting;

  // UI ELEMENTS ------------------------------------
  let accessPannel = generateAccessPannel();
  root.append(accessPannel);
}

const doAccess = (ev) => {
  console.log("do access")
  ev.preventDefault();
  let isAuth = authProccess.verifyUser(ev.srcElement[0].value, ev.srcElement[1].value)
  if (isAuth) {
    showAlert("Accesso eseguito", 4, "success");

    auxRooting.goHomepage();
  } else {
    showAlert("Accesso negato", 4, "warning");
  }
}



const generateAccessPannel = () => {
  let accessContainer = createEl("div");
  accessContainer.className = "accessContainer";

  let title = createEl("h1");
  title.textContent = "Access";

  let form = createEl("form");

  let email = createEl("div");
  email.className = "email";

  let formIconEmail = createEl("img");
  formIconEmail.src = "./Assets/email.png";
  formIconEmail.alt = "email icon";
  formIconEmail.className = "formIcon";

  let inputEmail = createEl("input");
  inputEmail.className = "accessEmail";
  inputEmail.classList.add("accessInput");
  inputEmail.type = "email";
  inputEmail.placeholder = "Email";

  email.append(formIconEmail, inputEmail);


  let password = createEl("div");
  password.className = "password";

  let formIconPassword = createEl("img");
  formIconPassword.src = "./Assets/padlock.png";
  formIconPassword.alt = "padlock icon";
  formIconPassword.className = "formIcon";

  let inputPassword = createEl("input");
  inputPassword.className = "accessPassword";
  inputPassword.classList.add("accessInput");
  inputPassword.type = "password";
  inputPassword.placeholder = "Password";

  password.append(formIconPassword, inputPassword);


  let button = createEl("input");
  button.className = "accessButton";
  button.type = "submit";
  button.value = "Login";

  form.append(email, password, button);
  form.addEventListener("submit", (ev) => doAccess(ev));

  accessContainer.append(title, form)
  return accessContainer;
}
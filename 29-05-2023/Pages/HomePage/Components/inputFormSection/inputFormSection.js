import { createEl } from "../../../../JS/Utils/DOM.js";
import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";

const userData = {
  imgUrl: "./Assets/icons/profile.png",
}

export const inputFormSection = () => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/inputFormSection/inputFormSection.css");

  // VARIABLES ---------------------
  let mainElement = createEl("div");
  let inputFormSection = createEl("div", "inputFormSection");
  let inputFormSection_content = createEl("div", "inputFormSection_content");

  let inputFormAvatarContainer = createEl("div", "inputFormAvatarContainer");
  let img = createEl("img");
  img.src = userData.imgUrl;
  img.alt = "profile img";

  inputFormAvatarContainer.append(img);


  let inputForm_container = createEl("div", "inputForm_container");

  let inputForm_container_shareToContainer = createEl("div", "inputForm_container_shareToContainer");

  let inputForm_container_shareToContainer_shareTo = createEl("select", "inputForm_container_shareToContainer_shareTo");
  inputForm_container_shareToContainer_shareTo.setAttribute("name", "shareTo");

  inputForm_container_shareToContainer_shareTo.addEventListener("change", (e) => {
    handleChangeShareTo(e)
  })
  let options1 = createEl("option");
  options1.setAttribute("value", "Everyone");
  options1.textContent = "Everyone";
  let options2 = createEl("option");
  options2.setAttribute("value", "TwitterCircle");
  options2.textContent = "Twitter Circle";


  let inputForm_container_textArea_container = createEl("div", "inputForm_container_textArea_container");

  let inputForm_container_textArea = createEl("textarea", "inputForm_container_textArea");
  inputForm_container_textArea.setAttribute("name", "whatToShare");
  inputForm_container_textArea.setAttribute("id", "whatToShare");
  inputForm_container_textArea.setAttribute("cols", "30");
  inputForm_container_textArea.setAttribute("rows", "6");
  inputForm_container_textArea.setAttribute("required", true);
  inputForm_container_textArea.setAttribute("placeholder", "What is happening?!");

  inputForm_container_textArea.addEventListener("change", (e) => {
    handleInputTextArea(e);
  })

  let inputForm_container_buttons = createEl("div", "inputForm_container_buttons");

  let inputForm_container_buttons_first = createEl("div", "inputForm_container_buttons_first");

  inputButtons.map((button) => {
    let inputFormButton = createEl("div", "inputFormButton");
    let img = createEl("img");
    img.src = button.iconUrl;
    img.alt = button.alt;
    inputFormButton.append(img);
    inputFormButton.addEventListener("click", () => {
      button.action();
    });
    inputForm_container_buttons_first.append(inputFormButton);
  });

  let inputForm_container_buttons_submit = createEl("div", "inputForm_container_buttons_submit");

  let inputForm_submit_btn = createEl("input", "inputForm_submit_btn");
  inputForm_submit_btn.setAttribute("type", "submit");
  inputForm_submit_btn.setAttribute("value", "Tweet");
  inputForm_submit_btn.addEventListener("click", (e) => handleDoTweet(e));


  // CONDITIONS --------------------
  // RETURN ------------------------.
  inputForm_container_buttons_submit.append(inputForm_submit_btn);
  inputForm_container_buttons.append(inputForm_container_buttons_first, inputForm_container_buttons_submit)

  inputForm_container_textArea_container.append(inputForm_container_textArea);

  inputForm_container_shareToContainer_shareTo.append(options1, options2);
  inputForm_container_shareToContainer.append(inputForm_container_shareToContainer_shareTo);


  inputForm_container.append(inputForm_container_shareToContainer, inputForm_container_textArea, inputForm_container_buttons)

  inputFormSection_content.append(inputFormAvatarContainer, inputForm_container);
  inputFormSection.append(inputFormSection_content);
  mainElement.append(inputFormSection);

  return mainElement;
}

const handleChangeShareTo = (e) => {
  tweetObj.shareWith = e.target.value;
  console.log(tweetObj);
}

const handleInputTextArea = (e) => {
  console.log(e.target.value)
  tweetObj.textInput = e.target.value;
}


const tweetObj = {
  user: "ALL USER DATA OBJ",
  shareWith: "Everyone",
  textInput: "",
}

const handleDoTweet = (e) => {
  e.preventDefault();
  console.log(tweetObj);
}

const inputButtons = [
  {
    iconUrl: "./Assets/icons/image.png",
    alt: "Importa immagini",
    action: () => {
      console.log("Apri il input images");
    }
  },
  {
    iconUrl: "./Assets/icons/gif.png",
    alt: "Importa gif",
    action: () => {
      console.log("Apri il modale con tutte le Gif");
    }
  },
  {
    iconUrl: "./Assets/icons/select.png",
    alt: "Crea un sondagio",
    action: () => {
      console.log("Aggiungi modulo sondagio");
    }
  },
  {
    iconUrl: "./Assets/icons/event.png",
    alt: "Schedula evento",
    action: () => {
      console.log("Apri modale per schedulare il Tweet");
    }
  },
  {
    iconUrl: "./Assets/icons/location-pin.png",
    alt: "Seleziona luogo",
    action: () => {
      console.log("Apri il modale luogo: individua posizione attuale oppure fucus sul input luogo");
    }
  },
]
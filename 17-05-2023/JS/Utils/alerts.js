import { getEl, createEl } from './DOM.js'


export const showAlert = (
  message = "Lorem ipsum",
  duration = 2,
  type = "warning",
) => {

  let main = getEl("main");

  let alert = createEl("div");
  alert.className = "alert";

  alert.animationDuration = duration + "s";

  let img = createEl("img");
  img.alt = "alert icon";
  switch (type) {
    case "success":
      alert.classList.add("bg_success");
      img.src = "./Assets/confirmation.png"
      break;
    case "warning":
      alert.classList.add("bg_warning");
      img.src = "./Assets/danger.png"
      break;
    case "danger":
      alert.classList.add("bg_danger");
      img.src = "./Assets/poison.png"
      break;

    default:
      alert.classList.add("bg_warning");
      img.src = "./Assets/danger.png"
      break;
  }

  let mess = createEl("p");
  mess.textContent = message;

  alert.append(img, mess);
  main.append(alert);

  alert.addEventListener("animationend", () => {
    alert.remove()
  });
}
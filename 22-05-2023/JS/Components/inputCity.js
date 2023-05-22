import { getEl, createEl } from "../Utils/DOM.js";
import { getWeatherData } from "../script.js";

// ----------- UI ---------------
export const generateInput = () => {
  let inputContainer = createEl("div");
  inputContainer.className = "inputContainer";

  let input = createEl("input");
  input.type = "text";
  input.className = "inputCity";
  input.placeholder = "Input city name";

  let searchButton = createEl("button");
  searchButton.className = "searchButton";

  searchButton.addEventListener("click", () => getWeatherData(input.value))

  let searchButtonIcon = createEl("img");
  searchButtonIcon.className = "searchButtonIcon";
  searchButtonIcon.src = "./Assets/icons/search.png";
  searchButtonIcon.alt = "search button";

  searchButton.append(searchButtonIcon);

  inputContainer.append(input, searchButton);

  return inputContainer;
}

//----------- Functions ----------

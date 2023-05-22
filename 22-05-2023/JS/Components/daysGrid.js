import { getEl, createEl } from "../Utils/DOM.js";

// variables
let daysGrid = createEl("daysGrid");

// ----------- UI ---------------
export const generateDaysGrid = (data) => {
  daysGrid.className = "daysGrid";

  for (let index = 0; index < 8; index++) {
    daysGrid.append(generateDayCard(index, {}, {}))
  }

  return daysGrid;
}

const generateDayCard = (index, hourData, data) => {
  let day = createEl("div");
  day.className = "day";

  day.addEventListener("click", () => changeHour(hourData))

  let hourNumber = createEl("p");
  hourNumber.className = "hourNumber";
  hourNumber.textContent = index;

  let dayIcon = createEl("img");
  dayIcon.className = "dayIcon";
  // dayIcon.src = data?.current?.weather_icons[0];
  dayIcon.src = "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png";

  day.append(hourNumber, dayIcon);
  return day;
}

// ---------- functions ---------
const changeHour = (hourData) => {

}
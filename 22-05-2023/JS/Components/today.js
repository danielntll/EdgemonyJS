import { getEl, createEl } from "../Utils/DOM.js";

// ----------- UI ---------------
export const generateTodaySection = (day) => {
  let todaySection = createEl("div");
  todaySection.className = "todaySection";

  let data = createEl("h1");
  data.textContent = "Oggi " + getDate(day.selected);

  todaySection.append(data);

  return todaySection;
}


// ---------- functions ---------
const getDate = (day) => {
  let options = { 'month': 'long', 'day': '2-digit' };
  let date = new Date(day).toLocaleString('it-IT', options);
  return date;
}
import { createEl, getEl } from './Utils/DOM.js';

// components
import { generateHeader } from './Components/header.js';
import { generateTodaySection } from './Components/today.js';
import { generateInput } from './Components/inputCity.js';
import { generateCityInfo } from './Components/cityInfo.js';


// Global variables
const root = getEl("#root");
let day = {
  selected: new Date(),
  getToday: () => { return new Date() },
  setSelected: (date) => selected = date,
}

let historySearch = [];




// Functions -------------------
export const getWeatherData = async (city) => {
  try {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=c2a9185f1585e38282bb151f424dfe08&query=${city}`
    )
    const data = await res.json();
    historySearch.push(data);
    root.append(generateCityInfo(data));
  } catch (error) {
    console.error(error);
  }

}


// ------------ UI --------------

// Homepage
const generateHomePage = () => {
  root.append(generateHeader(), generateTodaySection(day), generateInput());
}


// ------------ RENDER -----------
generateHomePage();
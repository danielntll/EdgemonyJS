import { getEl, createEl } from "../Utils/DOM.js";

// ----------- UI ---------------
let cityInfo = createEl("div");
cityInfo.className = "cityInfo";

export const generateCityInfo = (data) => {
  cityInfo.textContent = "";

  let generalImage = createEl("img");
  generalImage.className = "generalImage";
  generalImage.src = data.current.weather_icons[0];
  generalImage.alt = "city icon weather";

  let cityName = createEl("h2");
  cityName.textContent = data.location.name;

  let regionName = createEl("p");
  regionName.textContent = data.location.region;


  let gridInfo = createEl("div");
  gridInfo.className = "gridInfo";

  gridInfo.append(generateInfoCityWind(data), generateInfoCityHum(data), generateInfoCityTemp(data));

  cityInfo.append(generalImage, cityName, regionName, gridInfo)

  return cityInfo;
}

const generateInfoCityWind = (data) => {
  let infoCity = createEl("div");
  infoCity.className = "infoCity";

  let img = createEl("img");
  img.src = "./Assets/icons/wind.png";
  img.alt = "info city icon wind";
  img.className = "infoCityIcon"

  let data1 = createEl("p");
  data1.textContent = "Speed: " + data.current.wind_speed;
  let data2 = createEl("p");
  data2.textContent = "Degree: " + data.current.wind_degree;
  let data3 = createEl("p");
  data3.textContent = "Dir: " + data.current.wind_dir;

  infoCity.append(img, data1, data2, data3);
  return infoCity;
}
const generateInfoCityHum = (data) => {
  let infoCity = createEl("div");
  infoCity.className = "infoCity";

  let img = createEl("img");
  img.src = "./Assets/icons/humidity.png";
  img.alt = "info city icon humidity";
  img.className = "infoCityIcon"
  let data1 = createEl("p");
  data1.textContent = "Precip: " + data.current.precip;
  let data2 = createEl("p");
  data2.textContent = "Humidity: " + data.current.humidity;
  let data3 = createEl("p");
  data3.textContent = "Cloud: " + data.current.cloudcover;

  infoCity.append(img, data1, data2, data3);
  return infoCity;
}
const generateInfoCityTemp = (data) => {
  let infoCity = createEl("div");
  infoCity.className = "infoCity";

  let img = createEl("img");
  img.src = "./Assets/icons/thermometer.png";
  img.alt = "info city icon thermometer";
  img.className = "infoCityIcon"
  let data1 = createEl("p");
  data1.textContent = "Temp: " + data.current.temperature;
  let data2 = createEl("p");
  data2.textContent = "UV: " + data.current.uv_index;
  let data3 = createEl("p");
  data3.textContent = "Visibility: " + data.current.visibility;

  infoCity.append(img, data1, data2, data3);
  return infoCity;
}

// ---------- functions ---------

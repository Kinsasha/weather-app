import rain from "./asset/rainy.svg";
import drizzle from "./asset/light rain.svg";
import clouds from "./asset/cloudy.svg";
import snow from "./asset/snow.svg";
import clear from "./asset/sunny.svg";
import thunderstorm from "./asset/thunderstorm.svg";
import mixed from "./asset/mixed.svg";
import { hideLoader } from "./ui";

const images = {
  rain,
  drizzle,
  clouds,
  snow,
  clear,
  thunderstorm,
  mixed,
};

const renderData = (data) => {
  const body = document.querySelector(".bodyContainer");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("p");
  const main = document.createElement("p");
  const description = document.createElement("p");
  const temp = document.createElement("p");
  const tempMinMax = document.createElement("p");
  const humidity = document.createElement("p");
  const feelsLike = document.createElement("p");

  const weatherContainer = document.querySelector(".weatherContainer");
  hideLoader();
  weatherContainer.style.display = "flex";
  weatherContainer.innerHTML = "";

  const mixed = [images["mixed"]];

  const imgLink = data.weather[0].main.toLowerCase();
  const iconSrc = images[imgLink] || mixed;
  console.log(iconSrc);

  img.src = iconSrc;

  imgContainer.classList.add("imgContainer");
  img.classList.add("img");
  imgContainer.append(img);

  name.textContent = `Location : ${data.name}`;
  main.textContent = data.weather[0].main;
  description.textContent = data.weather[0].description;
  temp.textContent = `Temperature : ${data.main.temp} C`;
  tempMinMax.textContent = `Temperature Range : ${data.main.temp_min} C - ${data.main.temp_max} C`;
  humidity.textContent = `Humidity : ${data.main.humidity}%`;
  feelsLike.textContent = `It feels like ${data.main.feels_like} C out there`;

  weatherContainer.append(
    imgContainer,
    name,
    main,
    description,
    temp,
    tempMinMax,
    humidity,
    feelsLike
  );
  body.append(weatherContainer);
};

export { renderData };

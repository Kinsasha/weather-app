import { renderData } from "./render";
import { hideLoader } from "./ui";
import { getWeather } from "./weather";

// localStorage.clear();

const domEvent = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    let data = localStorage.getItem("weather");

    if (!data) {
      data = "lagos";
    }

    const weatherData = await getWeather(data);

    renderData(weatherData);
  });
};

const btnHandler = () => {
  const bodyContainer = document.querySelector(".bodyContainer");
  const locationInput = document.querySelector(".locationInput");

  bodyContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("submitBtn")) {
      e.preventDefault();

      //safeguards
      if (locationInput.value.length <= 2)
        return alert("Location must be more than two letters");

      const data = {
        location: locationInput.value.toLowerCase().trim(),
      };

      const weatherData = await getWeather(data.location);

      if (!weatherData) {
        return;
      }

      localStorage.setItem("weather", weatherData.name);

      renderData(weatherData);
      locationInput.value = "";
    }
  });
};

export { btnHandler, domEvent };

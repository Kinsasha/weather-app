import { renderData } from "./render";
import { hideLoader, showLoader } from "./ui";

const getWeather = async (data) => {
  showLoader();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=e052cb7881539bd15cc4b6033e2332eb&units=metric`
    );

    if (!response.ok) {
      hideLoader();
      return alert(`Error: ${response.status}`);
    }
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    alert(error);
  } finally {
    hideLoader();
  }
};

export { getWeather };

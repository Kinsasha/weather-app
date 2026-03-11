import { renderData } from "./render";
import { hideLoader, showLoader } from "./ui";

const getWeather = async (data) => {
  // console.log(data);
  showLoader();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=e052cb7881539bd15cc4b6033e2332eb&units=metric`
    );

    if (!response.ok) {
      return alert(`Error: ${response.status}`);
    }
    const weatherData = await response.json();

    renderData(weatherData);
  } catch (error) {
    alert(error);
  } finally {
    hideLoader();
  }
};

export { getWeather };

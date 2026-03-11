import { getWeather } from "./weather";

const btnHandler = () => {
  const bodyContainer = document.querySelector(".bodyContainer");
  const locationInput = document.querySelector(".locationInput");

  locationInput.focus();

  bodyContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("submitBtn")) {
      e.preventDefault();

      //safeguards
      if (locationInput.value.length <= 2)
        return alert("Location must be more than two letters");

      const data = {
        location: locationInput.value.toLowerCase().trim(),
      };

      getWeather(data.location);
      locationInput.value = "";
      locationInput.focus();
    }
  });
};

export { btnHandler };

import "./styles.css";
import { btnHandler } from "./events";
import { colorRandomizer } from "./ui";
import { renderData } from "./render";

const header = document.querySelector(".headerText");
const location = document.querySelector(".location");

const focus = () => {
  const locationInput = document.querySelector(".locationInput");

  locationInput.focus();
};

const init = () => {
  colorRandomizer(header);
  colorRandomizer(location);
  btnHandler();
};

init();

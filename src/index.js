import "./styles.css";
import { btnHandler, domEvent } from "./events";
import { renderData } from "./render";

const init = () => {
  domEvent();
  btnHandler();
};

init();

const colorRandomizer = (element) => {
  const options = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const text = element.textContent;
  const coloredText = text
    .split("")
    .map((letter) => {
      const randomizer = Math.floor(Math.random() * options.length);
      const color = options[randomizer];

      return `<span style="color: ${color}">${letter}</span>`;
    })
    .join("");

  element.innerHTML = coloredText;
};

const showLoader = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
};
const hideLoader = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
};

export { colorRandomizer, showLoader, hideLoader };

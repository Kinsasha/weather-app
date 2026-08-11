const showLoader = () => {
  const loader = document.querySelector(".loaderContainer");
  loader.style.display = "block";
};
const hideLoader = () => {
  const loader = document.querySelector(".loaderContainer");
  loader.style.display = "none";
};

export { showLoader, hideLoader };

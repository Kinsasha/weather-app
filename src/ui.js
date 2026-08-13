const showLoader = () => {
  const loader = document.querySelector(".loaderContainer");
  const overlay = document.getElementById("loadingOverlay");

  loader.style.display = "block";
  overlay.classList.add("active");
};
const hideLoader = () => {
  const loader = document.querySelector(".loaderContainer");
  const overlay = document.getElementById("loadingOverlay");

  loader.style.display = "none";
  overlay.classList.remove("active");
};

export { showLoader, hideLoader };

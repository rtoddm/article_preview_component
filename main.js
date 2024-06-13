// DOM Selectors
const button = document.getElementById("share-button");
const footer = document.querySelector("footer");
const buttonImage = document.getElementById("button-image");
const activeSection = document.getElementById("active");
const arrow = document.getElementById("arrow");

// Event Listener
button.addEventListener("click", function (e) {
  if (activeSection.style.display === "block") {
    activeSection.style.display = "none";
    arrow.style.display = "none";
    button.style.backgroundColor = "rgb(236, 242, 248)"; //#ECF2F8
    buttonImage.style.filter =
      "brightness(0) saturate(100%) invert(47%) sepia(39%) saturate(260%) hue-rotate(175deg) brightness(98%) contrast(85%)"; //#6E8098
  } else {
    activeSection.style.display = "block";
    arrow.style.display = "block";
    button.style.backgroundColor = "rgb(110, 128, 152)";
    buttonImage.style.filter =
      "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(259deg) brightness(100%) contrast(100%)";
  }
});

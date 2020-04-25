let time = 5000;
let currentImgIndex = 0;
let images = document.querySelectorAll("#slide img");
let max = images.length;

const next = () => {
  images[currentImgIndex].classList.remove("selected");
  currentImgIndex++;
  if (currentImgIndex >= max) currentImgIndex = 0;
  images[currentImgIndex].classList.add("selected");
};

const start = () => {
  setInterval(() => {
    next();
  }, time);
};

window.addEventListener("load", start);

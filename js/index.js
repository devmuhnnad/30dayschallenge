//DOM SELECTING
const cube = document.querySelector("#cube");

const rightFace = document.querySelector(".right");
const backFace = document.querySelector(".back");
const leftFace = document.querySelector(".left");
const frontFace = document.querySelector(".front");

let rotateValue = 45;

function rotateCube() {
  rotateValue += 90;
  cube.style.transform = `translateZ(-500px) rotateX(-30deg) rotateY(-${rotateValue}deg)`;
}

let currentIndex = 1;
const orderedCubeFaces = [rightFace, backFace, leftFace, frontFace];

setInterval(() => {
  if (currentIndex >= orderedCubeFaces.length) {
    currentIndex = 0;
    orderedCubeFaces[orderedCubeFaces.length - 1].classList.remove("shadowed");
  }

  if (currentIndex > 0) {
    orderedCubeFaces[currentIndex - 1].classList.remove("shadowed");
  }

  orderedCubeFaces[currentIndex].classList.add("shadowed");
  rotateCube();
  currentIndex++;
}, 1000);

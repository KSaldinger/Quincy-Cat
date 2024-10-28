const fans = document.querySelector(".fans");
const fish = document.querySelector(".fish");
const pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

const toggle = document.querySelector("#toggle");
const ball = document.querySelector(".ball");
const titleQuincy = document.querySelector("h1");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    titleQuincy.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    titleQuincy.innerText = "Party Quincy";
  }
});

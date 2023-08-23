"use strict";

var result = document.querySelector(".counter__result");
var decreaseBtn = document.querySelector(".counter__decrease");
var resetBtn = document.querySelector(".counter__reset");
var increaseBtn = document.querySelector(".counter__increase");
var currentNum = 0;
increaseBtn.addEventListener("click", function () {
  currentNum++;

  if (currentNum > 0) {
    result.style.color = "green";
  } else if (currentNum == 0) {
    result.style.color = "black";
  }

  result.textContent = currentNum;
});
resetBtn.addEventListener("click", function () {
  result.style.color = "black";
  currentNum = 0;
  result.textContent = currentNum;
});
decreaseBtn.addEventListener("click", function () {
  currentNum = currentNum - 1;

  if (currentNum < 0) {
    result.style.color = "red";
  } else if (currentNum == 0) {
    result.style.color = "black";
  }

  result.textContent = currentNum;
});
"use strict";

var result = document.querySelector('.counter__result');
var decreaseBtn = document.querySelector('.counter__decrease');
var resetBtn = document.querySelector('.counter__reset');
var increaseBtn = document.querySelector('.counter__increase');
var previousNum = null;
var nextNum = null;
var currentNum = 0;
increaseBtn.addEventListener('click', function () {
  currentNum++;
  result.textContent = currentNum;

  if (currentNum > 0) {
    result.style.color = 'green';
  } else if (currentNum === 0) {
    result.style.color = 'black';
  } else {
    result.style.color = 'red';
  }

  console.log(currentNum);
});
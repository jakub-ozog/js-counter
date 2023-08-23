const result = document.querySelector(".counter__result");

const decreaseBtn = document.querySelector(".counter__decrease");
const resetBtn = document.querySelector(".counter__reset");
const increaseBtn = document.querySelector(".counter__increase");

let currentNum = 0;

increaseBtn.addEventListener("click", () => {
  currentNum++;

  if (currentNum > 0) {
    result.style.color = "green";
  } else if (currentNum == 0) {
    result.style.color = "black";
  }
  result.textContent = currentNum;
});

resetBtn.addEventListener("click", () => {
  result.style.color = "black";
  currentNum = 0;
  result.textContent = currentNum;
});

decreaseBtn.addEventListener("click", () => {
  currentNum = currentNum - 1;
  if (currentNum < 0) {
    result.style.color = "red";
  } else if (currentNum == 0) {
    result.style.color = "black";
  }
  result.textContent = currentNum;
});

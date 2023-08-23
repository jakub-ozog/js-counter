const result = document.querySelector('.counter__result');

const decreaseBtn = document.querySelector('.counter__decrease')
const resetBtn = document.querySelector('.counter__reset')
const increaseBtn = document.querySelector('.counter__increase')


let previousNum = null;
let nextNum = null; 
let currentNum = 0;

increaseBtn.addEventListener('click', () => {

    currentNum++

    result.textContent = currentNum

    if (currentNum > 0) {
        result.style.color = 'green'
    } else if (currentNum === 0) {
        result.style.color = 'black'
    } else {
        result.style.color = 'red'
    }
    console.log(currentNum);
})


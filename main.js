const screen = document.querySelector(".screen")
const numbersButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operator")

let numberAlreadyInserted = false
let firstNumber = 0
let secondNumber = 0
let operator = ""

numbersButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const { target } = event;
        if (numberAlreadyInserted) {
            screen.value = screen.value + target.value
        } else {
            screen.value = target.value
            numberAlreadyInserted = true
        }
    })
})

operationButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const { target } = event;
        firstNumber = screen.value
        operator = target.value
        screen.value = ""
        numberAlreadyInserted = false
    })
})

document.getElementById("equal-button").addEventListener("click", (event) => {
    secondNumber = screen.value
    if (operator === "+") {
        screen.value = parseInt(firstNumber) + parseInt(secondNumber)
    }
    if (operator === "-") {
        screen.value = parseInt(firstNumber) - parseInt(secondNumber)
    }
    if (operator === "*") {
        screen.value = parseInt(firstNumber) * parseInt(secondNumber)
    }
    if (operator === "/") {
        screen.value = parseInt(firstNumber) / parseInt(secondNumber)
    }
})

document.getElementById("all-clear").addEventListener("click", (event) => {
    numberAlreadyInserted = false
    screen.value = ""
})


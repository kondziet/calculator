const previousNumberDisplay = document.querySelector('.previous-number-display')
const currentNumberDisplay = document.querySelector('.current-number-display')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const numbersBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')

let previousNumber = ""
let operator = undefined
let currentNumber = ""

function appendNumber(digit) {
    if (digit === "." && currentNumber.includes(".")) {
        return
    } else if (digit === "." && currentNumber === "") {
        currentNumber += "0."
        return
    }

    currentNumber += digit
}

function updateDisplay() {
    previousNumberDisplay.textContent = previousNumber + " " + (operator === undefined ? "" : operator)
    currentNumberDisplay.textContent = currentNumber
}

numbersBtns.forEach(button => {
    button.addEventListener("click", e => {
        const digit = e.target.textContent
        appendNumber(digit)
        updateDisplay()
    })
})
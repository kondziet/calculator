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

function performOperation(operation) {
    if (currentNumber === "") {
        return
    }

    if (previousNumber === "" && operator === undefined) {
        previousNumber = currentNumber
        operator = operation
        currentNumber = ""
        return
    }

    getResult()
        
    if (operation === "=") { 
        previousNumber = ""   
        operator = undefined
    } else {
        previousNumber = currentNumber
        operator = operation
        currentNumber = ""
    }

}

function getResult() {

    const firstOperand = Number(previousNumber)
    const secondOperand = Number(currentNumber)
    
    switch (operator) {
        case "÷":
            currentNumber = firstOperand / secondOperand
            break
        case "x":
            currentNumber = firstOperand * secondOperand
            break
        case "-":
            currentNumber = firstOperand - secondOperand
            break
        case "+":
            currentNumber = firstOperand + secondOperand
            break
    }

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

operatorsBtns.forEach(button => {
    button.addEventListener("click", e => {
        const operation = e.target.textContent
        performOperation(operation)
        updateDisplay()
    })
})
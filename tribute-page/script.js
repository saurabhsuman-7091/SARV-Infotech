// Get the display from HTML
const display = document.getElementById("display");

// Get all number buttons
const numberButtons = document.querySelectorAll(".number");

// Get all operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Get equal and clear buttons
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

// Variables for calculator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// Add event listeners to number buttons
numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.getAttribute("data-value");

        // If the value is a decimal point
        if (value === "." && display.value.includes(".")) {
            return;
        }

        // If operator is not selected
        if (operator === "") {
            firstNumber = firstNumber + value;
            display.value = firstNumber;
        }

        // If operator is selected
        else {
            secondNumber = secondNumber + value;
            display.value = secondNumber;
        }

    });

});


// Add event listeners to operator buttons
operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Check if first number exists
        if (firstNumber !== "") {

            operator = button.getAttribute("data-value");

            display.value = "0";

        }

    });

});


// Equal button
equalButton.addEventListener("click", function() {

    // Convert strings into numbers
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    // Check which operator was selected
    if (operator === "+") {

        result = num1 + num2;

    }

    else if (operator === "-") {

        result = num1 - num2;

    }

    else if (operator === "*") {

        result = num1 * num2;

    }

    else if (operator === "/") {

        // Check division by zero
        if (num2 === 0) {

            display.value = "Cannot divide by 0";
            return;

        }

        result = num1 / num2;

    }

    else {

        display.value = "Invalid Operation";
        return;

    }

    // Show result
    display.value = result;

    // Store result for next calculation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";

});


// Clear button
clearButton.addEventListener("click", function() {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";

    display.value = "0";

});
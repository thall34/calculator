// variable for numbers

const numbers = document.querySelectorAll(".number");

// variables for operators

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");

// variables for special buttons

const clear = document.getElementById("clear");
const plusMinus = document.getElementById("plus-minus");
const percent = document.getElementById("percent");
const decimal = document.getElementById("decimal");

// setting default display for calculator to read 0 and setting variable for display

const display = document.getElementById("display-screen");
const defaultState = "0"
display.innerHTML = defaultState

// operation variables

var num1 = ""
var num2 = ""
var operator = ""

function addition (num1, num2) {
    let numbers = display.innerHTML.split ("+")
    let num1 = parseInt (numbers [0]);
    let num2 = parseInt (numbers [1]);
    display.innerHTML = num1 + num2;
};

function subtraction (num1, num2) {
    let numbers = display.innerHTML.split ("-")
    let num1 = parseInt (numbers [0]);
    let num2 = parseInt (numbers [1]);
    display.innerHTML = num1 - num2;
};

function multiplication (num1, num2) {
    let numbers = display.innerHTML.split ("*")
    let num1 = parseInt (numbers [0]);
    let num2 = parseInt (numbers [1]);
    display.innerHTML = num1 * num2;
};

function division (num1, num2) {
    let numbers = display.innerHTML.split ("/")
    let num1 = parseInt (numbers [0]);
    let num2 = parseInt (numbers [1]);
    display.innerHTML = num1 / num2;
};

function operate (num1, num2, operator) {
    if (operator === "+") {
        addition (num1, num2);
    } else if (operator === "-") {
        subtraction (num1, num2);
    } else if (operator === "*") {
        multiplication (num1, num2);
    } else if (operator === "/") {
        division (num1, num2);
    }
};

// function to update display value

function displayUpdate (input) {
    if (display.innerHTML === "0") {
        display.innerHTML = input;
    } else {
    display.innerHTML += input;
    }
};

function displayOperator (input) {
    display.innerHTML += input;
    operator = input
}

// click events for all number buttons

numbers.forEach((number) => {
    number.addEventListener ("click", () => {
        let value = number.innerHTML;
        displayUpdate (value);
    });
});

// click events for operator buttons

add.addEventListener ("click", () => {
    displayOperator("+");
});

subtract.addEventListener ("click", () => {
    displayOperator("-");
});

multiply.addEventListener ("click", () => {
    displayOperator("*");
});

divide.addEventListener ("click", () => {
    displayOperator("/");
});

// click event to reset display to default state

clear.addEventListener ("click", () => {
    display.innerHTML = defaultState;
});

// click event to run appropriate operation based on user input

equal.addEventListener ("click", () => {
    operate (num1, num2, operator)
});
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
const backspace = document.getElementById("backspace");
const decimal = document.getElementById("decimal");

// setting default display for calculator to read 0 and setting variable for display

const display = document.getElementById("display-screen");
const defaultState = "0";
display.innerHTML = defaultState;

// operation variables

var num1 = "";
var num2 = "";
var operator = "";

// simple function to display error on the display 
function error () {
    display.innerHTML = "ERROR";
}

// functions to do basic math operations

function addition (num1, num2) {
    let numbers = display.innerHTML.split ("+")
    num1 = parseInt (numbers [0]);
    num2 = parseInt (numbers [1]);
    let sum = num1 + num2;
    let rounded = sum.toFixed(1);
    display.innerHTML = rounded
};

function subtraction (num1, num2) {
    let numbers = display.innerHTML.split ("-")
    num1 = parseInt (numbers [0]);
    num2 = parseInt (numbers [1]);
    let sum = num1 - num2;
    let rounded = sum.toFixed(1);
    display.innerHTML = rounded
};

function multiplication (num1, num2) {
    let numbers = display.innerHTML.split ("*")
    num1 = parseInt (numbers [0]);
    num2 = parseInt (numbers [1]);
    let sum = num1 * num2;
    let rounded = sum.toFixed(1);
    display.innerHTML = rounded
};

function division (num1, num2) {
    let numbers = display.innerHTML.split ("/")
    num1 = parseInt (numbers [0]);
    num2 = parseInt (numbers [1]);
    if (num2 === 0) {
        error ();
    } else {
    let sum = num1 / num2;
    let rounded = sum.toFixed(1);
    display.innerHTML = rounded
    }
};

// function to check for operator and run the appropriate operation function

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

// function to update display value when hitting number buttons

function displayUpdate (input) {
    if (display.innerHTML === "0") {
        display.innerHTML = input;
    } else {
    display.innerHTML += input;
    }
};

// function to update display value when hitting operator buttons

function displayOperator (input) {
    display.innerHTML += input;
    operator = input;
};

// click events for all number buttons

numbers.forEach((number) => {
    number.addEventListener ("click", () => {
        let value = number.innerHTML;
        if (display.innerHTML === "ERROR") {
            ;
        } else {
        displayUpdate (value);
        };
    });
});

// click events for operator buttons

add.addEventListener ("click", () => {
    if (display.innerHTML === "ERROR") {
        ;
    } else if (operator !== "") {
    operate (num1, num2, operator);
    displayOperator ("+");
    } else {
    displayOperator("+");
    }
});

subtract.addEventListener ("click", () => {
    if (display.innerHTML === "ERROR") {
        ;
    } else if (operator !== "") {
    operate (num1, num2, operator);
    displayOperator ("-");
    } else {
    displayOperator("-");
    }
});

multiply.addEventListener ("click", () => {
    if (display.innerHTML === "ERROR") {
        ;
    } else if (operator !== "") {
    operate (num1, num2, operator);
    displayOperator ("*");
    } else {
    displayOperator("*");
    }
});

divide.addEventListener ("click", () => {
    if (display.innerHTML === "ERROR") {
        ;
    } else if (operator !== "") {
    operate (num1, num2, operator);
    displayOperator ("/");
    } else {
    displayOperator("/");
    }
});

// click event to reset display to default state

clear.addEventListener ("click", () => {
    display.innerHTML = defaultState;
    num1 = "";
    num2 = "";
    operator = "";
});

// click event for operate function

equal.addEventListener ("click", () => {
    if (display.innerHTML === "ERROR") {
        ;
    } else {
        operate (num1, num2, operator);
    }
});
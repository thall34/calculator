// variable for numbers

const numbers = document.querySelectorAll(".number");

// variables for operators

const operators = document.querySelectorAll(".operators");
const equal = document.getElementById("equal");

// variables for special buttons

const clear = document.getElementById("clear");
const plusMinus = document.getElementById("plus-minus");
const backspace = document.getElementById("backspace");
const decimal = document.getElementById("decimal");

// operation variables

var num1 = "0";
var num2 = "";
var operator = "";
var counter = "0"

// setting default display for calculator to read 0 and setting variable for display

const display = document.getElementById("display-screen");

// simple function to display error on the display 

function error () {
    num1 = "ERROR";
    num2 = "";
    operator = "";
    displayUpdate ();
}

// functions to do basic math operations

function addition (a, b) {
    let num1Int = parseInt (a)
    let num2Int = parseInt (b)
    let total = (num1Int + num2Int);
    if (total % 1 !== 0) {
        num1 = total.toFixed(1);
    } else {
        num1 = total;
    };
    num2 = "";
    operator = "";
    displayUpdate ();
}

function subtraction (a, b) {
    let num1Int = parseInt (a)
    let num2Int = parseInt (b)
    let total = (num1Int - num2Int);
    if (total % 1 !== 0) {
        num1 = total.toFixed(1);
    } else {
        num1 = total;
    };
    num2 = "";
    operator = "";
    displayUpdate ();
};

function multiplication (a, b) {
    let num1Int = parseInt (a)
    let num2Int = parseInt (b)
    let total = (num1Int * num2Int);
    if (total % 1 !== 0) {
        num1 = total.toFixed(1);
    } else {
        num1 = total;
    };
    num2 = "";
    operator = "";
    displayUpdate ();
};

function division (a, b) {
    let num1Int = parseInt (a)
    let num2Int = parseInt (b)
    if (num2Int === 0) {
        error ();
    } else {
    let total = (num1Int / num2Int);
    if (total % 1 !== 0) {
        num1 = total.toFixed(1);
    } else {
        num1 = total;
    };
    num2 = "";
    operator = "";
    displayUpdate ();
    };
};

// function to check for operator and run the appropriate operation function

function operate (a, b, op) {
    if (op === "+") {
        addition (a, b);
    } else if (op === "-") {
        subtraction (a, b);
    } else if (op === "x") {
        multiplication (a, b);
    } else if (op === "÷") {
        division (a, b);
    };
};

// function to update display value when any number or operator button is hit

function displayUpdate () {
    display.innerHTML = num1 + operator + num2;
};

// function that resets display values to defaults

function clearDisplay () {
    num1 = "0";
    num2 = "";
    operator = "";
    displayUpdate ();   
};

// function to reset counter variable to 0

function clearCounter () {
    counter = "0";
};

// click events for all number buttons

numbers.forEach((number) => {
    number.addEventListener ("click", () => {
        let value = number.innerHTML;
        if (num1 === "ERROR") {
            ;
        } else if (operator !== "") {
            num2 += value;
        } else if (counter === "0") {
            num1 = value;
        } else {
            num1 += value;
        };
        counter++;
        displayUpdate ();
    });
});

// click events for all operator buttons

operators.forEach((sign) => {
    sign.addEventListener ("click", () => {
        let symbol = sign.innerHTML;
        if (num1 === "ERROR") {
            ;
        } else if (operator !== "" && num2 === "") {
            operator = symbol;
        } else if (operator !== "") {
            operate (num1, num2, operator);
            operator = symbol;
        } else {
            operator = symbol;
        };
        counter++
        displayUpdate ();                 
    });
});

// click event to reset display to default state

clear.addEventListener ("click", () => {
    clearDisplay ();
    clearCounter ();
});

// click event for equal button to run operate function

equal.addEventListener ("click", () => {
    if (num1 !== "" && num2 !== "" && operator !== "") {
        operate (num1, num2, operator);
        clearCounter ();
    } else {
        ;
    };
});
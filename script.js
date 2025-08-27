// variable for numbers

const numbers = document.querySelectorAll(".number");
const zero = document.getElementById("zero");

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
var counter = "0";

// variable to get display screen and variable for max number length

const display = document.getElementById("display-screen");
displayUpdate ();

// function to perform all basic math operations

function operate (a, b, op) {
    console.log(op)
    let num1Float = parseFloat (a);
    let num2Float = parseFloat (b);
    let total = 0;
    switch (op) {
        case "+":
            total = num1Float + num2Float;
            console.log(total)
            break;
        case "-":
            total = num1Float - num2Float;
            break;
        case "x":
            total = num1Float * num2Float;
            break;
        case "÷":
            if (num2Float === 0) {
                total = "ERROR";
            } else {
                total = num1Float / num2Float;
            };
            break;
    };
    if (total === "ERROR") {
        num1 = total;
    } else if (total % 1 !== 0) {
        num1 = total.toFixed(1);
    } else {
        num1 = total;
    };
    num2 = ""
    operator = ""
    displayUpdate ();
};

// basic function to update display when anything but the number variables are being updated

function displayUpdate () {
    display.innerHTML = num1 + operator + num2;
};

// click events for all number buttons

numbers.forEach((number) => {
    number.addEventListener ("click", () => {
        let value = number.innerHTML;
        if (num1 === "ERROR") {
            ;
        } else if (operator !== "" && num2 === "0") {
            ;
        } else if (operator !== "") {
            num2 += value;
            counter++;
        } else if (counter === "0") {
            num1 = value;
            counter++;
        } else {
            num1 += value;
            counter++;
        };
        displayUpdate ();
    });
});

// special click event for zero button

zero.addEventListener ("click", () => {
    let value = zero.innerHTML;
    if (num1 === "ERROR") {
        ;
    } else if (operator !== "" && num2 === "") {
        num2 = value;
        counter++;
    } else if (operator !== "" && num2 !== "0") {
        num2 += value;
        counter++;
    } else if (operator !== "" && num2 === "0") {
        ;
    } else if (counter === "0" && num1 !== "0") {
        num1 = value;
        counter++;
    } else if (num1 === "0") {
        ;
    } else {
        num1 += value;
        counter++;
    };
    displayUpdate ();
});

// click events for all operator buttons

operators.forEach((sign) => {
    sign.addEventListener ("click", () => {
        let symbol = sign.innerHTML;
        if (num1 === "ERROR") {
            ;
        } else if (operator !== "" && num2 === "") {
            operator = symbol;
            counter++;
        } else if (operator !== "") {
            operate (num1, num2, operator);
            operator = symbol;
            counter++;
        } else {
            operator = symbol;
            counter++;
        };
        displayUpdate ();                 
    });
});

// click event to reset display to default state

clear.addEventListener ("click", () => {
    num1 = "0";
    num2 = "";
    operator = "";
    displayUpdate ();
    counter = "0";
});

// click event for equal button to run operate function

equal.addEventListener ("click", () => {
    if (num1 !== "" && num2 !== "" && operator !== "") {
        operate (num1, num2, operator);
        counter = "0"
    } else {
        ;
    };
});

// decimal click event that allows one decimal place to be added per number

decimal.addEventListener ("click", () => {
    if (num1 === "ERROR") {
        ;
    } else {
        switch (operator === "") {
            case true:
                if (num1.includes(".") == true) {
                    ;
                } else {
                    num1 += ".";
                    counter++;
                    displayUpdate ();
                }
                break;
            case false:
                if (num2.includes(".") == true) {
                    ;
                } else {
                    num2 += ".";
                    counter++;
                    displayUpdate ();
                }
                break;
        };
    };
});

// backspace click event that allows user to clear their most recent number input

backspace.addEventListener ("click", () => {
    if (num1 === "ERROR") {
        ;
    } else {
        switch (operator === "") {
            case true:
                if (num1.length == 1) {
                    num1 = "0";
                    counter++;
                    displayUpdate ();
                } else if (num1.length > 1) {
                    num1 = num1.slice(0, -1);
                    counter++;
                    displayUpdate ();
                }
                break;
            case false:
                displayUpdate ();
                if (num2 === "") {
                    operator = "";
                    counter++;
                    displayUpdate ();
                } else if (num2.length == 1) {
                    num2 = "";
                    counter++;
                    displayUpdate ();
                } else {
                    num2 = num2.slice(0, -1);
                    counter++;
                    displayUpdate ();
                }
                break; 
        };
    };
});

// click event for plus minus button that will change the active integer from positive to negative or vice versa

plusMinus.addEventListener ("click", () => {
    if (num1 === "ERROR") {
        ;
    } else {
        switch (operator === "") {
            case true:
                if (num1.includes("-") == true) {
                    num1 = num1.replace("-", "")
                    counter++;
                    displayUpdate ();
                } else if (num1 === "0") {
                    ;
                } else {
                    num1 = "-" + num1;
                    counter++;
                    displayUpdate ();
                }
                break;
            case false:
                if (num2.includes("-") == true) {
                    num2 = num2.replace("-", "");
                    counter++;
                    displayUpdate ();
                } else if (num2 === "") {
                    ;
                } else {
                    num2 = "-" + num2;
                    counter++;
                    displayUpdate ();
                }
                break;
        };
    };
});
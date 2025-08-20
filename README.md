# calculator

Creating a calculator using HTML, CSS and JS

Created basic HTML for calculator interface
Created CSS Styling to make calculator look like Apple calculator
Created functions for all basic operations that take user input and convert it to the appropriate equation
Created operate function that takes user input operator and decides the appropriate operation function to run
Created mouse events for all number and operator keys to update the display div
Created if statement for dividing by 0 to output an error message
Created if statements so that all buttons except the clear button don't do anything when the calculator is in error mode
Changed percent button to backspace button
Created if statements so that if a second operator is typed in, it will perform the operation on the first two numbers first, then add the current operator
Created values in the operation functions to round the answers to the nearest one decimal point

Aug 20 - Update 2.0
Combined operators into an array constant
Re-tooled the default variables of the operation variables and added a counter for extra functionality
Re-tooled the display so that it is now made up of the num1, operator and num2 variables
Re-configured the error function with the new defaults for operation variables, added call to displayUpdate function
Re-configured operation functions to have different variable names from num1 and num2
Also re-configured all operation functions to round to nearest one decimal place if needed, and added call to displayUpdate function
Changed if statement for operate function to include "x" for multiply and "÷" for divide, so I could use the array and forEach function to assign event listeners easier
Added displayUpdate function that updates the HTML display screen div
Added clearDisplay function that resets operation valuables to defaults and calls the displayUpdate function
Added clearCounter function that resets the counter, this is used to solve the last problem on the Calculator assignment before the extra credit
Re-tooled the click events for number buttons to update the num1 and num2 variables instead of directly manipulating the HTML
Added click event forEach loop to quickly assign click events to all the operator buttons
Updated the clear click event to call clearDisplay and clearCounter functions
Re-configured the equal button click event to only do operation when all the operation variables are assigned, otherwise it does nothing
Added extra if statement so if you type in a second operator before putting in a second number, it replaces the operator
Added decimal button that can add one decimal number per number on each side of the operator
Added a backspace button that will delete the last input

KNOWN BUGS
Need to figure out how to limit the max character length of the screen or have it wrap
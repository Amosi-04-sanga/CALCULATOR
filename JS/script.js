// calculator---js.

// collect all buttons in an array.
const buttons = document.querySelectorAll("button");

// get display class.
const display = document.querySelector(".display");

// add event listener to each button.
buttons.forEach( function(button) {
    button.addEventListener('click', calculate);
});


// calculate function.
function calculate(event) {
    // get button clicked value.
    const buttonClickedValue = event.target.value;


    if(buttonClickedValue === '=') {
        // if display is not empty, do calculation.
        if(display.value !== '') {
            display.value = eval(display.value);
        }
    } 
    
    // if C is clicked, display nothing or clear all.
    else if(buttonClickedValue === 'C') {
        display.value = '';
    }

    // Otherwise, if other button is clicked, concatenate clicked value.
    else {
        display.value += buttonClickedValue;
    }
}
const calculator = document.querySelector('.calculator')
calculator.style.height = "500px";
calculator.style.width = "350px";

const display = document.querySelector('.display') //Set the size of the display
const calcheight = parseInt(calculator.style.height);
display.style.height =  (`${calcheight*3/7}px`)


const buttons = document.querySelector('.buttons') //Set the size of the buttons container
buttons.style.height = (`${calcheight*4/7}px`); 


function operate (num1, operator, num2){
    
}
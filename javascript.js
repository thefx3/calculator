const calculator = document.querySelector('.calculator')
calculator.style.height = "500px";
calculator.style.width = "600px";

const display = document.querySelector('.display') //Set the size of the display
const calcheight = parseInt(calculator.style.height);
display.style.height =  (`${calcheight*3/7}px`)

const buttons = document.querySelector('.buttons') //Set the size of the buttons container
buttons.style.height = (`${calcheight*4/7}px`); 



/* Calculator operations */

let num1 = "";
let num2 = "";
let operator = ""; 
let result = "";

const allnumbers = document.querySelectorAll('.number')

allnumbers.forEach(button => { // Display the number when button clicked
    button.addEventListener('click',function() {

        let value = button.textContent;

            if(result!=""){    // If there is already a result, start over
                if (value === "." && num1.includes(".")) return;
                num1 = button.textContent;
                display.textContent = num1;
                operator = "";
                num2 = "";
                result = "";
            }
            else if (operator === ""){ 
                if (value === "." && num1.includes(".")) return;
            num1 += button.textContent;
            display.textContent = num1;
            }
            else {
                if (value === "." && num2.includes(".")) return;
            num2 += button.textContent;
            display.textContent = num2;
            }
        }
    )
});

const alloperators = document.querySelectorAll('.operator') //+, -, *, / 

alloperators.forEach(button => {
    button.addEventListener('click',function() {

        if (num1 !="" && num2 != "" && operator != ""){ //Run the operation continously
            operate(num1,operator,num2);
            operator = button.textContent;
            num1 = result; 
            num2 = ""; 
            result = "";
        }
            operator = button.textContent;
            display.textContent = num1; 
        }
    )
});

const allspecials = document.querySelectorAll('.special')

allspecials.forEach(button => {                     //To clear the display
    button.addEventListener('click',function() {
            switch (button.textContent){
                case 'C':
                    display.textContent = "0";
                    num1 = "";
                    operator = "";
                    num2 = "";
            }
        }
    )
})

const equal = document.querySelector('.equal')      //Equal button
equal.addEventListener('click',function() {
    operate(num1,operator,num2);
})

const erase = document.querySelector('.erase')      //Backspace_delete button
erase.addEventListener('click',function() {
    if (num1!="" && operator==="" && num2 === ""){
        num1 = num1.slice(0,-1);
        display.textContent = num1;
    } else if (num1!="" && operator!="" && num2 === ""){
        operator="";
    } else if (num1!="" && operator!="" && num2 != "" && result===""){
        num2 = num2.slice(0,-1);
        display.textContent = num2;
    } else if (result!=""){
        display.textContent = result;
        num1="";
        operator="";
        num2="";
    }
})

function operate (num1, operator, num2){ //Main function to do the math

    if (num1 !== "" && num2 !== "" && operator !== "") {
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2); 

    switch (operator){
        case '÷': result = number2 !== 0 ? number1/number2 : "Error";
        break;
        case 'x': result = number1*number2;
        break;
        case '-': result = number1-number2;
        break;
        case '+': result = number1+number2;
        break;
    }
    display.textContent = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}
}

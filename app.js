const display = document.getElementById('display');

let firstNumber = "";
let operator = "";
let number = null;
let clicked = false;

function getOperator(id) {
    if (firstNumber !== "") {
        calculate(); 
    }
    
    operator = id;
    clicked = false;
    console.log(`Operator set to ${operator}`);
}

function getValue(ii) {
    if (clicked) {
        firstNumber = ""; 
        clicked = false;
    }
    firstNumber += ii;
    console.log(`First number: ${firstNumber}`);
    display.innerHTML = `${firstNumber}`;
}

function calculate() {
    if (firstNumber === "") return; 
    
    let value = Number(firstNumber);

    if (number === null) {
        number = value; 
    } else {
        switch (operator) {
            case "*":
                number *= value;
                break;
            case "+":
                number += value;
                break;
            case "-":
                number -= value;
                break;
            case "/":
                if (value === 0) {
                    display.innerHTML = "Error";
                    console.log("Error: Division by zero");
                    return;
                }
                number /= value;
                break;
        }
    }

    console.log(`Result: ${number}`);
    clicked = true;
    display.innerHTML = `${number}`;
    firstNumber = "";
}

function cleardisplay() {
    display.innerHTML = "0";
    firstNumber = "";
    number = null;
    operator = "";
    clicked = false;
    console.log("Calculator reset");
}

function deleteLast() {
    firstNumber = firstNumber.slice(0, -1); 
    display.innerHTML = firstNumber || "0"; 
}


/* const display = document.getElementById('display');
const ac = document.getElementById('AC');
const del = document.getElementById('DEL');
const percent = document.getElementById('%');
const divide = document.getElementById('/');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const multiply = document.getElementById('*');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const subtract = document.getElementById('-');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const add = document.getElementById('+');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const equals = document.getElementById('=');

let firstNumber ="";
let clicked = false;

let operator;
let operatorOld;
let number = 0;
first = true;


function getOperator(id) {
    if (clicked===true){
        firstNumber='';
        clicked= false;
    }
    if (id != operator && first===false){
        operator=id;
        calculate()
    }else{
    if (id === '+'){
        operator="+"
        number = number + Number(firstNumber);
        display.innerHTML=`${number}`
    }else if(id === "-"){
        operator="-"
        number = number - Number(firstNumber);
        display.innerHTML=`${number}`
    }else if(id === "/") {
        operator = "/";
    
        // If firstNumber is empty, don't process division
        if (firstNumber === '') return; 
    
        // Prevent division by zero
        if (Number(firstNumber) === 0) {
            display.innerHTML = "Error"; 
            console.log("Error: Division by zero");
        }
    
        // If it's the first operation, set number to firstNumber
        if (number === 0) {
            number = Number(firstNumber);
        } else {
            number = number / Number(firstNumber);
        }
    
        display.innerHTML = `${number}`;
        console.log(`number is ${number}`);
    }else if (id === '*'){
        operator="*"
        if(number === 0){
            number = 1;
        }
        if (firstNumber === ''){
            firstNumber = '1';
        }
        number = number * Number(firstNumber);
        display.innerHTML=`${number}`
    }
    console.log(operator);
    firstNumber = '';
    first = false;
}
}
function getValue(ii) {
        firstNumber += ii;
        console.log(firstNumber)
        display.innerHTML=`${firstNumber}`
}

function calculate(){
    switch (operator){
        case "*": number = number * Number(firstNumber);break;
        case "+": number = number + Number(firstNumber);break;
        case "-": number = number - Number(firstNumber);break;
        case "/": number = number / Number(firstNumber);break;
    }
    console.log(number);
    clicked = true;
    display.innerHTML=`${number}`
    firstNumber = '';
}

function cleardisplay(){
    display.innerHTML = '0'
    firstNumber = '';
    number = 0;
    operator = '';
    console.log('clicked')
    first = 'true'
}

function deleteLast() {
        firstNumber = "";
        display.innerHTML = '0'
}
 */
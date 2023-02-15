function Add() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('Answer').innerText=result;
    console.log(num1,num2,"Type is: ",typeof num1, typeof num2);
}
function Divide() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('Answer').innerText=result;
    console.log(num1,num2,"Type is: ",typeof num1, typeof num2);
}
function multi() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('Answer').innerText=result;
    console.log(num1,num2,"Type is: ",typeof num1, typeof num2);
}

function Div() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num1 / num2;
    document.getElementById('Answer').innerText=result;
    console.log(num1,num2,"Type is: ",typeof num1, typeof num2);
}
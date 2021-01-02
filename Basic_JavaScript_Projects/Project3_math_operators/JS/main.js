function addition_Function() {
    var addition = 2 + 2 ;
    document.getElementById("Math").innerHTML="2 + 2 = " + addition; 
}

function subtraction_Function() {
    var Subtraction = 5 - 2 ;
    document.getElementById("Math2").innerHTML="5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var Multiplication = 6 * 8 ;
    document.getElementById("Math3").innerHTML="6 * 8 = " + Multiplication;
}

function division_Function() {
    var Division = 48 / 6 ;
    document.getElementById("Math4").innerHTML="48 / 6 = " + Division;
}

function more_Math() { // equation with multiple operators
    var simple_Math= (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var Modulus = 25 % 6;
    document.getElementById("Math6").innerHTML= "When you divide 25 by 6 you have a remainder of: " + Modulus;
}

function negative_Operator() {
    var x = 10;
    document.getElementById("negative").innerHTML= -x;
}

var y = 5; //increment operator
y++
document.write(y);

//how do you make a space print between these two peices of code??

var z = 5.25; //decrement operator
z--
document.write(z);

window.alert(Math.random()); //window alert returning random number between 0 and 1

window.alert(Math.random() *100); //window alert returning random number between 1 and 100

function PI() { // using a new Math Object
    document.getElementById("PI").innerHTML= Math.PI;
}
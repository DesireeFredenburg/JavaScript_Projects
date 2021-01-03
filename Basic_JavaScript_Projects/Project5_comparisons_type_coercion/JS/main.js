document.write(typeof "a couple of words"); //using "typeof" operator
document.write("<br>");

function my_Function() { // creating and displaying a NaN result
    document.getElementById("Test").innerHTML = 0/0 ;
}

function NaN_Function() { // creating a displaying "true" because the string is NaN
    document.getElementById("Test2").innerHTML = isNaN ("this is a string") ;
}

function false_NaN_Function() { //creating and displaying "false" because the digits are not NaN
    document.getElementById("Test3").innerHTML = isNaN ("808") ;
}

document.write(2E310); // printing infinity
document.write("<br>");

document.write(-3E310); //printing -infinity
document.write("<br>");

document.write(10>8); //printing boolean logic "true"
document.write("<br>");

document.write(10>20); //printing boolean logic "false"
document.write("<br>");

console.log(2+8); //showing in console

document.write("10"+5); //type coercion combining number and string
document.write('<br>');

console.log(10<9); // displaying fasle in console with boolean logic

document.write(10==10); //using "==" to compare
document.write("<br>");

document.write(10==9); //usuing "==" to compare
document.write("<br>");

a=10
b=10
document.write(a===b); //displaying "true" using "===" to compare
document.write("<br>");

c="cat"
d=2
document.write(c===d); //displaying "false" using "===" to compare
document.write("<br>")

e="11"
f=11
document.write(e===f); //displaying "false" using "===" to compare
document.write("<br>");

g=12
h=13
document.write(g===h); //displaying "false" using "===" to compare
document.write("<br>");

document.write(10>9&&8<10); //displaying "true" using AND Boolean logic
document.write("<br>");

document.write(10>20&&10<11); //displaying "false" using AND Boolean logic
document.write("<br>");

document.write(10>9||10<9); //displaying "true" using OR Boolean logic
document.write("<br>");

document.write(10<9||9>10); //displaying "false" using OR Boolean logic
document.write("<br>");

function not_Function() { //displaying "true" using NOT Boolean logic
    document.getElementById("Not").innerHTML = !(20>30) ;
} 

function false_not_Function() { //displaying "false" using NOT Boolean logic
    document.getElementById("Not2").innerHTML = !(20>10) ;
}
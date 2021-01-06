var x=10; //global variable
function Add_numbers_1() {
    document.write(20+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+100+"<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //local variable
    var X =10;
    document.write(20+X+"<br>");
}
Add_numbers_3();

function Add_numbers_5() { // making an intentional error and using console.log method
    var Y=10;
    console.log(15+Y);
}
function Add_numbers_6() {
    console.log(Y+100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() { // utilizing Date().getHours() method , IF statement , and referencing HTML file
    if(new Date().getHours() <17) {
        document.getElementById("Greeting").innerHTML = "Good Day";
    }
}

function compare() { //if statement
if (17 <18) {
    document.getElementById("if_statement").innerHTML = "Left number is less than right.";
}
}

function Height_Function() { //if else statement 
    Height = document.getElementById("Height").value;
    if (Height >= 45) {
        Ride = "You are tall enough to ride.";
    }
    else {
        Ride = "You are NOT tall enough to ride.";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Ride;
}

function Time_function() { // time function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
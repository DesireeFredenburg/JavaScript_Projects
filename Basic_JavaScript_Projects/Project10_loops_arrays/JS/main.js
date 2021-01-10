function Call_Loop() { //a while loop that counts to 10
    var Digit = "";
    var X = 1;
    while (X <11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function lengthFunction() {  // string length property 
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //array with function to be called
    var Vacation_Picture = [];
    Vacation_Picture[0] = "ocean"; // "vacation_picture" is the object, [0] is the index, and ocean is the property
    Vacation_Picture[1] = "mountains";
    Vacation_Picture[2] = "river";
    Vacation_Picture[3] = "desert";
    document.getElementById("Array").innerHTML = "In this picture, I am at the " + Vacation_Picture[2] + ".";
}

function constant_function() { // assigning constants with const 
    const Holiday_Traditions = {food:"fondue", music:"carols", decorations:"twinkly lights"};
    Holiday_Traditions.food = "pie";
    Holiday_Traditions.trips = "Jacksonville";
    document.getElementById("Constant").innerHTML = "This Christmas the " + Holiday_Traditions.decorations + " will be hung, and the " + Holiday_Traditions.music + " will play. And we will we eat " + Holiday_Traditions.food + " in " + Holiday_Traditions.trips +"!";
}

var A = 88;  // not printing in browser because of defer attribute in HTML -- works when I remove that attribute
document.write(A);
{
    let A = 55;
    document.write("<br>" + A)
}

function returnFunction() { //using return statement
    return Math.PI;
}
document.getElementById("math").innerHTML = returnFunction();

let cat = {  // created an object, used the "let" keyword, included properties (bree, color, age, eyes) and method (description function)
    breed: "siamese",
    color: "brown",
    age: "1",
    eyes: "blue",
    description : function() {
        return "The " + this.breed + " cat is " + this.age + " year old, she has " + this.eyes + " eyes, and she has " + this.color + " fur.";
    }  
};
document.getElementById("cat_object").innerHTML = cat.description();

var text = "";  // break statement -43
var i;
for (i = 0; i < 10; i++) {
    if (i ===3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var txt = ""; // continue statement -43
var d;
for (d = 0; d < 10; d++) {
    if (d === 3) {continue; }
    txt += "The numer is " + d + "<br>";
}
document.getElementById("cont").innerHTML = txt;
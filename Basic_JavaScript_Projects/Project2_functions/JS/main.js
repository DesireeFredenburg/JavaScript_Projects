var A = "What is the date?"; //assign string to variable A
document.write(A); //print variable A
var B = "Click the button to find out."; //assign string to variable B
document.write(B); //print variable B
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
} //create function that displays date

function myFunction() {
    var sentence = "I am learning a lot";
    sentence += " from this course!";
    document.getElementById("Concatenate").innerHTML=sentence;
} //create function that uses += operator and concatenate 
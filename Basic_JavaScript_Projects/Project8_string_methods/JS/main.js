function full_Sentence() { //using the concatenate method 
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // using slice method that displays a section of string
    var Sentence = "All work and no play makes Des a dull girl.";
    var Section = Sentence.slice(27,30);
    document.getElementById("Slice").innerHTML = Section;
}

function upperCase() {  //using the toUpperCase method
    var str = "Bye Bye";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function search_Function() {  //using the search method
    var str = "I love my cat."
    var n = str.search("cat");
    document.getElementById("search").innerHTML = n;
}

function string_Method() { // using toString method
    var X =808;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //using toPrecision method
    var Y = 5758383.47483656373847487483983747;
    document.getElementById("Precision").innerHTML = Y.toPrecision(15);
}

function fixed_Method() { //using toFixed method
    var num = 5.58392849;
    var z = num.toFixed(2);
    document.getElementById("fixed").innerHTML = z;
}

function valueOf_Method() {  //using valueOf method
    var strn = "Hot digitty dog!";
    var res = strn.valueOf();
    document.getElementById("valueOf").innerHTML = res;
}
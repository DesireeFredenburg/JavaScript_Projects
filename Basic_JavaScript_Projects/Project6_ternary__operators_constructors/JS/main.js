function Ride_Function() { //ternary operation with input from browser
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Animal(Species, Breed, Color, Age) { //constructor function using "new" and "this" keywords
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Color = Color;
    this.Animal_Age = Age;
}
var Merl = new Animal("Dog", "Beagle mix", "Black", 12);
var Cece = new Animal("Cat", "Siamese", "Tan and Brown", 1);
var Chewy = new Animal("Chinchilla", "Lanigera", "Silver", 3);
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Cece is a " + Cece.Animal_Breed + " " + Cece.Animal_Species + " she is " + Cece.Animal_Color + " and she is " + Cece.Animal_Age +"year old.";
}

function count_Function() { // nested function
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
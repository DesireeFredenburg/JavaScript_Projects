function my_Dictionary() { //dictionary that will output KVP in html
    var Animal = {
        Species:"Cat",
        Color:"Tan",
        Breed:"Siamese",
        Age:"4 months",
        Sound:"Meow",
        Sound:"Purr" //Purposely put in two exact to keys to see result. Code ran and displayed only second of the 2 "purr"
    };
    delete Animal.Breed; //delete operator
    document.getElementById("Dictionary").innerHTML=Animal.Breed;
}
let pets = [];//empty array
//object literal
let petSalon = {
    name: "Your Pet Your Style",
    address: {
        street: "Breezy Street",
        zip: "22500"
    }
}

//object constuctor
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}
// Define the Dog class (or constructor function)
class Dog {
    constructor(name, age, gender, breed, service) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = "dog"; // You might want to store the type
    }
}// Define the Dog class (or constructor function)
class Cat {
    constructor(name, age, gender, breed, service) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = "cat"; // You might want to store the type
    }
}// Define the Dog class (or constructor function)
class Bird {
    constructor(name, age, gender, breed, service) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = "bird"; // You might want to store the type
    }
}
//add breed and service
//register function
function register() {
    let inputName = document.getElementById("txtName").ariaValueMax;
    let inputAge = document.getElementById("txtAge").ariaValueMax;
    let inputGender = document.getElementById("txtGender").ariaValueMax;
    let inputBreed = document.getElementById("txtBreed").ariaValueMax;
    let inputService = document.getElementById("txtService").ariaValueMax;
    let inputType = document.getElementById("txtType").ariaValueMax;

    console.log(inputName, inputAge, inputGender, inputBreed, inputService, inputType);
    // create the obj
    // create the appropriate pet object based on the type NEW OBJECT
    let newPet;
    if (inputType === "dog") {
        newPet = new Dog(inputName, inputAge, inputGender, inputBreed, inputService);
    } else if (inputType === "cat") {
        newPet = new Cat(inputName, inputAge, inputGender, inputBreed, inputService);
    } else if (inputType === "bird") {
        newPet = new Bird(inputName, inputAge, inputGender, inputBreed, inputService);
    } else {
        // Default to generic Pet if type is not recognized
        newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType);
    }
    //push the obj to the array
    pets.push(newPet);
    //display the obj on the console
    console.log(pets);
    //clear the form after registration
    clearForm();

}

function clearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";
    document.getElementById("txtType").value = "";

}
//validation function

function init() {
    //execution code should be inside of this function
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming", "Dog");//creating an obj
    //create two more pets
    console.log(pet1);

    let pet2 = new Pet("Johnny", 38, "Male", "Beagle", "Vaccines", "Dog");
    console.log(pet2);

    let pet3 = new Pet("Paola", 22, "Female", "Chihuahua", "Haircut", "Dog");
    console.log(pet3);

    pets.push(pet1, pet2, pet3);
    console.log(pet1, pet2, pet3);
}

window.onload = init;//wait to rend the HTML
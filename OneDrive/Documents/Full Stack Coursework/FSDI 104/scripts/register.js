let pets = []; //empty array
//object literal
let petSalon = {
    name: "Your Pet, Your Style",
    address: {
        street: "Breezy Street",
        zip: "22500"
    }
};

//object constructor
function Pet(name, age, gender, breed, service, type, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.color = color;
}

//validations
/*function isValid(pet) {
    let validation = true;
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");
    let inputGender = document.getElementById("txtGender");
    let inputBreed = document.getElementById("txtBreed");
    let inputService = document.getElementById("txtService");
    let inputColor = document.getElementById("txtColor"); */

    // Register function with notification using jQuery
function register() {
    let inputName = $("#txtName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputBreed = $("#txtBreed").val();
    let inputService = $("#txtService").val();
    let inputType = $("#txtType").val();
    let inputColor = $("#txtColor").val();

    if (pet.name == "") {
        validation = false;
        inputName.classList.add("error");
    }

    if (pet.age == "") {
        validation = false;
        inputAge.classList.add("error");
    }
    if (pet.gender == "") {
        validation = false;
        inputGender.classList.add("error");
    }
    if (pet.breed == "") {
        validation = false;
        inputBreed.classList.add("error");
    }
    if (pet.service == "") {
        validation = false;
        inputService.classList.add("error");
    }
    if (pet.color == "") {
        validation = false;
        inputColor.classList.add("error");
    }

    return validation;
}

//register function
function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;
    let inputColor = document.getElementById("txtColor").value;

    console.log(inputName, inputAge, inputGender, inputBreed, inputService, inputType, inputColor);

    // create the obj
    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType, inputColor);
    console.log("newPet = ", newPet);

    // check validations
    if (isValid(newPet) == true) {
        //push the obj to the array
        pets.push(newPet);
        displayRow();
        console.log(pets);
        clearForm();
    }
}

function clearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";
    document.getElementById("txtType").value = "";
    document.getElementById("txtColor").value = "";
}

// Display the pets in the table
function displayRow() {
    const tableBody = document.getElementById("petsTableBody");
    tableBody.innerHTML = ""; // Clear the table before re-rendering

    // Loop through the pets array and create table rows
    pets.forEach((pet, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td>${pet.color}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Delete a pet from the list
function deletePet(index) {
    pets.splice(index, 1); // Remove the pet from the array
    displayRow(); // Re-render the table
    console.log("Deleted pet at index:", index);
}

// Initialization function
function init() {
    console.log("testing");

    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming", "Dog", "Brown");
    let pet2 = new Pet("Johnny", 38, "Male", "Beagle", "Vaccines", "Dog", "White");
    let pet3 = new Pet("Paola", 22, "Female", "Chihuahua", "Nails", "Dog", "Other");

    pets.push(pet1, pet2, pet3);

    displayRow();
}

window.onload = init; // Wait to render the HTML

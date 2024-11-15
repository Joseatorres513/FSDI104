let pets =[];//empty array

let petSalon = {
    name:"Your Pet Your Style",
    address:{
        street:"Breezy Street",
        zip:"22500"
    }
}

//creating the pets
let pet1={
    name:"Koda",
    age:1,
    gender:"Male",
    service:"Full Spa",
    breed:"German Shepherd"

}

let pet2={
    name:"Daisy",
    age:5,
    gender:"Female",
    service:"Trim & Belly Rub",
    breed:"Beagle"
}

let pet3={
    name:"Lady",
    age:3,
    gender:"Female",
    service:"Shower &",
    breed:"Labrador"
}
//push the obj in the array
pets.push(pet1,pet2,pet3);
console.log("Pets array after initialization:", pets);

function displayPetNames(){
    console.log("Displaying pet names...");
    console.log(pets[1].name);
    console.log(pets[2].name);
    console.log(pets[3].name);
    console.log("We have: " + pets.length  + " pets");
}
// func to display pet numbers
function displayPetNumbers() {
    let petNumbers = pets.length;
    document.getElementById("petNumbersDisplay").innerText = petNumbers;

}
//func to display names of pets
function displayPetNames() {
    let petNamesList = document.getElementById("petNamesList");
    petNamesList.innerHTML = ""; //Clear the board
    
    for (let i = 0; i < pets.length; i++) {
        const li = document.createElement("li");
        li.textContent = pets[i].name;
        petNamesList.appendChild(li);
        console.log("Pet name added to list:", pets[i].name);
    }
}

// Function to calculate and display the average age
function displayAverageAge() {
    let totalAge = pets.reduce((sum, pet) => sum + pet.age, 0); // Sum up all pet ages
    let averageAge = (totalAge / pets.length).toFixed(1); // Calculate average and round to 1 decimal
    console.log("Total age of pets:", totalAge);
    console.log("Average age of pets:", averageAge);
    document.getElementById("averageAgeDisplay").innerText = averageAge;
}

// Function to initialize and display all required information
function initializePetSalon() {
    console.log("Initializing Pet Salon display...");
    displayPetNumbers();
    displayPetNames();
    displayAverageAge();
    console.log("Pet Salon display initialized.");
}

// Call initialize function on load for initial setup
initializePetSalon();
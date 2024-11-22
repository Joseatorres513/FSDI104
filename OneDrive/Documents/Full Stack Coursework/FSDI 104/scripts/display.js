function displayRow() {
    let tableBody = document.getElementById("petsTableBody");
    //tableBody.innerHTML = ""; // Clear the table body to avoid duplication
    //let cardsSection = document.getElementById("pets");
    let result = "";
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];

        result += `
            <tr>
                <td>${pet.name}</th>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
                <td>${pet.color}</td>

                
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i});"}>Delete</button></td>
            </tr>
        `
    }

    tableBody.innerHTML = result;
    displayInfo();
}

function displayInfo() {
    let groomingDiv = document.getElementById("gTotal");
    let totalDiv = document.getElementById("total");
    let vaccinesDiv = document.getElementById("vTotal");
    let nailsDiv = document.getElementById("nTotal");
    let grooming = 0;
    let vaccines = 0;
    let nails = 0;

    totalDiv.innerHTML = pets.length;// total pets

    for (let i = 0; i < pets.length; i++) {
        console.log(pets[i].service)
        if (pets[i].service == "Grooming") {
            grooming++;
        } else if (pets[i].service == "Vaccines") {
            vaccines++;
        } else if (pets[i].service == "Nails") {
            nails++;
        }
        groomingDiv.innerHTML = grooming;
        vaccinesDiv.innerHTML = vaccines;
        nailsDiv.innerHTML = nails;
    }

    totalDiv.innerHTML = pets.length;// total pets

    for (let i = 0; i < pets.length; i++) {
        console.log(pets[i].service)
        if (pets[i].service == "grooming") {
            grooming++;
        }
        groomingDiv.innerHTML = grooming;
    }

    for (let i = 0; i < pets.length; i++) {
        console.log(pets[i].service)
        if (pets[i].service == "vaccines") {
            vaccines++;

            vaccinesDiv.innerHTML = vacines;
        }
        vaccinesDiv.innerHTML = vaccines;
    }
    for (let i = 0; i < pets.length; i++) {
        console.log(pets[i].service)
        if (pets[i].service == "nails") {
            nails++;
        }

        let vaccinesDiv = document.getElementById("gTotal");
        let totalDiv = document.getElementById("total");
        let vaccines = 0;

        let nailsDiv = document.getElementById("gTotal");
        let nails = 0;
    }


}
/*
        `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
                    <p class="card-text">${pet.gender}, ${pet.age} years old</p>
                    <p class="card-text">${pet.service}, ${pet.type}</p>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        ` 
*/
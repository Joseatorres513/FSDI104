function displayRow() {
    let cardsSection = document.getElementById("pets");
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
                <td><button class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        `
    }

    cardsSection.innerHTML = result;
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
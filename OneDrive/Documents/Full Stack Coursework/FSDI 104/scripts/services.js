console.log("services");

// Logs a message to the console to confirm that the script has loaded.

let services = JSON.parse(localStorage.getItem('services')) || [];
let inputDescription = $("#txtDescription");
let inputPrice = $("#txtPrice");

// Initializes an empty array `services` to store service objects if none exist in local storage.
// Assigns jQuery objects for the input fields `txtDescription` and `txtPrice` to variables for later use.

$("#txtDescription").val(""); // Clear input
$("#txtPrice").val(""); // Clear input

// Clears any pre-existing values in the input fields for `txtDescription` and `txtPrice` when the script runs.

// Constructor for Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}

// Defines a constructor function `Service` to create objects with `description` and `price` properties.

// Validations
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if (service.description === "") {
        isValidDescription = false;
        $("#txtDescription").addClass("is-invalid");
        $("#descRequiredText").show();
    } else {
        isValidDescription = true;
        $("#txtDescription").removeClass("is-invalid");
        $("#descRequiredText").hide();
    }

    if (service.price === "" || service.price <= 0) {
        isValidPrice = false;
        $("#txtPrice").addClass("is-invalid");
        $("#priceRequiredText").show();
    } else {
        isValidPrice = true;
        $("#txtPrice").removeClass("is-invalid");
        $("#priceRequiredText").hide();
    }

    return isValidDescription && isValidPrice;
}

// Returns `true` if both `description` and `price` validations pass; otherwise, returns `false`.

// Save service to local storage
function save(service) {
    services.push(service);
    localStorage.setItem('services', JSON.stringify(services));
}

// Use jQuery to register
function register() {
    let newService = new Service(inputDescription.val(), inputPrice.val());

    if (validService(newService)) {
        save(newService);
        $("input").val(""); // Clear the form inputs
        $("#serviceNotification").text("Service registered successfully!").show().fadeOut(3000);
    }
}

// Initialize
function init() {
    $("#btnRegister").on("click", register);
}

window.onload = init; // Assigns the `init` function to `window.onload`, ensuring it runs when the page loads.

console.log("services");

let services = [];
let inputDescription = $("#txtDescription");
let inputPrice = $("#txtPrice");

$("#txtDescription").val(""); // Clear input
$("#txtPrice").val(""); // Clear input

// Constructor for Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}

// Validations
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if (service.description === "") {
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show(); // Ensure this element exists in HTML
    } else {
        isValidDescription = true;
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide();
    }

    if (service.price === "") {
        isValidPrice = false;
        $("#txtPrice").addClass("error");
        $("#priceRequiredText").show(); // Ensure this element exists in HTML
    } else {
        isValidPrice = true;
        $("#txtPrice").removeClass("error");
        $("#priceRequiredText").hide();
    }

    return isValidDescription && isValidPrice;
}

// Use jQuery to register
function register() {
    let newService = new Service(inputDescription.val(), inputPrice.val());
    if (validService(newService)) {
        save(newService); // Assuming `save` is defined in `storeManager.js`
        $("input").val(""); // Clear the form inputs
    }
}

// Initialize
function init() {
    $("#btnRegister").on("click", register);
}

window.onload = init; // Kept window.onload as requested

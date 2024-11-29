console.log("services");

// Get stored services or initialize as empty array
let services = JSON.parse(localStorage.getItem('services')) || [];
let inputDescription = $("#txtDescription");
let inputPrice = $("#txtPrice");

// Constructor for Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}

// Validation function for services
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if (service.description === "") {
        isValidDescription = false;
        $("#txtDescription").addClass("is-invalid");
        $("#descRequiredText").show();
    } else {
        $("#txtDescription").removeClass("is-invalid");
        $("#descRequiredText").hide();
    }

    if (service.price === "" || service.price <= 0) {
        isValidPrice = false;
        $("#txtPrice").addClass("is-invalid");
        $("#priceRequiredText").show();
    } else {
        $("#txtPrice").removeClass("is-invalid");
        $("#priceRequiredText").hide();
    }

    return isValidDescription && isValidPrice;
}

// Save service to local storage
function save(service) {
    services.push(service);
    localStorage.setItem('services', JSON.stringify(services));
}

// Register service with notification
function register() {
    let newService = new Service(inputDescription.val(), inputPrice.val());

    if (validService(newService)) {
        save(newService);
        $("input").val(""); // Clear the form inputs
        $("#serviceNotification").text("Service registered successfully!").show().fadeOut(3000);

        // Update services dropdown in the register page
        updateServiceDropdown();
    }
}

// Update service dropdown in register page
function updateServiceDropdown() {
    let services = JSON.parse(localStorage.getItem('services')) || [];
    let options = `<option value="" disabled selected>-- select a service --</option>`;

    services.forEach(service => {
        options += `<option value="${service.description}">${service.description}</option>`;
    });

    $("#txtService").html(options);
}

// Initialize
function init() {
    $("#btnRegister").on("click", register);
    updateServiceDropdown(); // Ensure dropdown is updated on load
}

window.onload = init;
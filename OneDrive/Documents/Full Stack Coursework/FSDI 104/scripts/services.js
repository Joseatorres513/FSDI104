console.log ("services");
let services = [];

//constructor Service
function Service(description, price) {
    //
        this.description = description;
        this.price = price;
}

//validations
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if (service.description == "") {
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show();
    } else {
        isValidDescription = true;
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide();
    }

    // service.price validation

    return isValidDescription && isValidPrice;
}

//use jQuery
function register() {
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    
    
    let newService = new Service(inputDescription, inputPrice);
    console.log("newService = ", newService);

    $("#txtDescription").val(""); //clear input
    $("#txtPrice").val(""); //clear input


}

function init() {
    //hook events
    $("#btnRegister").on("click", register)

}

window.onload = init;
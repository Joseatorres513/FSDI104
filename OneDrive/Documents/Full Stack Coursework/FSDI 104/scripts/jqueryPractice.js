console.log("Welcome to jQuery");

/*
document.getElementById("reuslts");
$("#reslut");

document.getElementByTagName("p");
$("p");

js ... document.getElementByClassName("text");
jquery ... $(".text");

*/

//let redParagrpah =documet.getElementById("red");
let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph ", redParagraph);

let blueParagraph = $("#blue")
    .css("background", "blue")
    .css("color", "white");

    // CLASS SELECTORS
    let myParagraphWithBorder = $(".with-border");

    myParagraphWithBorder.css("border", "5px dashed yellow");

    //JQUERY Function vs JS - function functionName(){whatever code}
    myParagraphWithBorder.click(function(){
        console.log("Clicked");

        $(this).addClass("bg-gray");
    });

    //TAG SELECTORS
    let paragraph = $("p")
    paragraph.css("cursor", "pointer");

    // SIMPLE AND COMMON FUNCTION
    function register() {
        console.log("Registering Function");


        let testEntry = $("#testInput").val();
        $("#results").append(`<li>${testEntry}</li>`);

        $("#testInput").val(""); //clear input
    }


    //EVENTS
    $("#btnRegister").on("click", register)


    // SIMPLE AND COMMON FUNCTION
    function clickMe() {
        console.log("ClickMe btn");

        $("p:first").hide();
        $("p:last").css("border", "5px solid skyblue");
    }

    $("#newBtn").on("click", clickMe);

    // ANIMATIONS
    function showName() {
        $("#user-name").slideDown();
    }

    function hideName() {
        $("#user-name").slideUp();
    }


    //constructer Service


    //valications
    function validService(service) {
        let isValidDescription = true;
        let isValidPrice = true;

        if(service.description == "") {
            isValidDescription = false;
            $("#txtDescription").addClass("error");
            $(descRequiredText)            
        }
    }
    //use jQuery
    function register() {
        let newService = new ServiceWorker();
        }

        function init() {
            //hook events
        }

        window.onload = init;
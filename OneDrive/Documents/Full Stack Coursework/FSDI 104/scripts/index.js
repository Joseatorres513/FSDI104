// Store testimonials, services, and pet facts dynamically
let testimonials = [
    "Best grooming service ever! My dog loves it here! 🐶",
    "Amazing staff and excellent care for my cat! 🐱",
    "Highly recommend their spa treatments for pets. 🛁"
];

let services = [
    { name: "Grooming", description: "Professional grooming to keep your pets clean and stylish." },
    { name: "Vaccination", description: "Protect your pets with our trusted vaccination services." },
    { name: "Bath & Spa", description: "Relaxing baths and spa treatments for happy pets." },
];

let funFacts = [
    "Dogs have three eyelids! 🐾",
    "A cat can jump up to six times its length! 😸",
    "Golden Retrievers are the most popular family dogs in the US."
];

// Function to display a random testimonial
function showRandomTestimonial() {
    let testimonialElement = document.getElementById("testimonial");
    let randomIndex = Math.floor(Math.random() * testimonials.length);
    testimonialElement.textContent = testimonials[randomIndex];
}

// Function to display service cards
function displayServices() {
    let servicesContainer = document.getElementById("servicesContainer");
    services.forEach(service => {
        let serviceCard = `
            <div class="col-md-4 text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${service.name}</h5>
                        <p class="card-text">${service.description}</p>
                    </div>
                </div>
            </div>
        `;
        servicesContainer.innerHTML += serviceCard;
    });
}

// Function to display a random fun fact
function showRandomFact() {
    let factElement = document.getElementById("funFact");
    let randomIndex = Math.floor(Math.random() * funFacts.length);
    factElement.textContent = funFacts[randomIndex];
}

// Initialization function
function init() {
    // Display random testimonial on load
    showRandomTestimonial();

    // Display services dynamically
    displayServices();

    // Show a random fact every 5 seconds
    setInterval(showRandomFact, 5000);
}

window.onload = init; // Initialize when the page loads

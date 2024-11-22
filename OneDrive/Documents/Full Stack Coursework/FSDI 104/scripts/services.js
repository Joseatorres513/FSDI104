// Array of service data
const services = [
    {
        title: "Professional Grooming",
        description: "We provide professional grooming services for your pets, ensuring they look and feel their best.",
        price: "$95",
        image: "./img/scared pup.jpg"
    },
    {
        title: "Vaccination Services",
        description: "Protect your pets with our safe and reliable vaccination services.",
        price: "$50",
        image: "./img/fluff ball.webp"
    },
    {
        title: "Nail Trimming",
        description: "Pain-free nail trimming services for your furry friends.",
        price: "$40",
        image: "./img/trimmed-nails.jpeg"
    },
    {
        title: "Pet Spa Treatments",
        description: "Pamper your pets with luxurious spa treatments.",
        price: "$150",
        image: "./img/spa.jpg"
    }
];

// Function to dynamically display services
function displayServices() {
    const container = document.getElementById("servicesContainer");
    container.innerHTML = "";

    services.forEach(service => {
        const serviceCard = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${service.image}" class="card-img-top" alt="${service.title}">
                    <div class="card-body">
                        <h5 class="card-title">${service.title}</h5>
                        <p class="card-text">${service.description}</p>
                        <p class="text-success fw-bold">${service.price}</p>
                        <a href="register.html" class="btn btn-warning">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += serviceCard;
    });
}

// Initialize the page
window.onload = displayServices;

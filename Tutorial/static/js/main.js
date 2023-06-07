// Global variable to store the map
var map;

// Function to initialize the map
function initializeMap() {
    // Create the map and set the initial view
    map = L.map('map').setView([37.8, -96], 4);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Fetch the data from the server
    fetch('/data')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Create markers from the data
            createMarkers(data);
        });
}




        

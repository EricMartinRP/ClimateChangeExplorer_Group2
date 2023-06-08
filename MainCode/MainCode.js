// Creating the map object
let myMap = L.map("map", {
  center: [37.5, -100],
  zoom: 5.45
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data and add it to the map.
let geoData = "states.json";

let data = "Averages.csv";
let url = "https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_5m.json";


//grab data from the states.json and add the state outlines to the map from the geojson data

let geojson;

// Get the data with d3.
d3.json(geoData).then(function(data) {

  // Create a new choropleth layer.
  geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: "NAME",

    // Set the color scale from red to blue.
    scale: ["#FF0000", "#0000FF"],

    // The number of breaks in the step range
    steps: 50,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color in black
      color: "#000000",
      
      weight: 3,
      fillOpacity: 0.5
    },

    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + feature.properties.NAME);
    }
  }).addTo(myMap);


  // // Adding the legend to the map
  // legend.addTo(myMap);

});

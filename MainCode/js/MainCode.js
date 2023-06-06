// Creating the map object
let myMap = L.map("map", {
  center: [27.96044, -82.30695],
  zoom: 7
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data and add it to the map.
let geoData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/ACS-ED_2014-2018_Economic_Characteristics_FL.geojson";

let data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/ACS-ED_2014-2018_Economic_Characteristics_FL.csv";

// Grab data with fetch
fetch(geoData)
  .then(response => response.json())
  .then(data => {
    geojson = L.geoJSON(data).addTo(myMap);
  });

// Grab data with d3
d3.json(geoData).then(function(data) {
  // Create a new choropleth layer.
  let choroplethLayer = L.choropleth(data, { 
    // Define which property in the features to use.
    valueProperty: "DP03_16E",
    // Set the color scale.
    scale: ["#ffffb2", "#b10026"],
    // The number of breaks in the step range
    steps: 5,
    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("name" + ": " + feature.properties.NAME + "<br>estimated employed population with children aged 6–17:<br>" + feature.properties.DP03_16E);
    }
  }).addTo(myMap); 

  // Set up the legend.
  let legend = L.control({ position: "bottomright" });

  legend.onAdd = function(map) {
    let div = L.DomUtil.create("div", "info legend");
    let limits = choroplethLayer.options.limits;
    let colors = choroplethLayer.options.colors;
    let labels = [];

    // Add minimum and maximum.
    div.innerHTML = "<h4>Legend Title</h4>";
    div.innerHTML += "<div class='labels'><div class='min'>" + limits[0] + "</div> \
                      <div class='max'>" + limits[limits.length - 1] + "</div></div>";

    // Generate labels for each interval.
    for (let i = 0; i < limits.length - 1; i++) {
      div.innerHTML += "<div class='labels'><i style='background:" + colors[i] + "'></i> \
                        <span>" + limits[i] + " &ndash; " + limits[i + 1] + "</span></div>";
    }

    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);
});
  
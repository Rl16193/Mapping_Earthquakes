// Add console.log to check to see if our code is working.
console.log("working");

// load cities to a variable
var cityData = cities;

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([47.116386, -101.299591], 4);

//  Add a marker for Each location
cityData.forEach(function(city){
    var mark = L.circleMarker(city.location, {radius: city.population/100000, color:"orange", fillColor: "#FFA500", lineweight: 4})
    .bindPopup("<h4>" + city.city + city.state + "</h4> <hr> Population is: " + city.population.toLocaleString() + "</hr>").addTo(map);


})


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
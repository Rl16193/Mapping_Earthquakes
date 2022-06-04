// latitudes + longitudes for Airports

let lineMap = [ 
    [37.615223, -122.389977],
    [30.1944444444, -97.67],
    [ 43.691,-79.6255],
    [40.641766, -73.780968]
];

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 7);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Plot Multiple Lines
L.polyline(lineMap, {
    color: "blue",
    dashArray: "20,20",
    weight: "2",
}).addTo(map);
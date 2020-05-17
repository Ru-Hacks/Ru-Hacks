//import {map1, marker1} from './weather.js';
// var map;
var map;
var marker;

function initMap() {
    var place = {lat: 43.6532, lng: -79.3832};

    var options = {
        zoom: 14,
        center: place
    };
    map = new google.maps.Map(document.getElementById('map'), options);

    marker = new google.maps.Marker({position: place, map: map});

    // var trafficlayer = new google.maps.TrafficLayer(); // Shows traffic (red places)
    // trafficlayer.setMap(map);
}

// function changeMap(map1, marker1){
//     map = map1;
//     marker = marker1;
    
// }
var trafficLayer;
var bicyclelayer;
var transitLayer;
//added by krish:
function switchTraffic(clicked_id){
    trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    document.getElementById(clicked_id).style.background = "black";
    document.getElementById(clicked_id).style.color = "#97CAEF";
}


function switchBicycle(clicked_id){
    bicyclelayer = new google.maps.BicyclingLayer();
    bicyclelayer.setMap(map);
    document.getElementById(clicked_id).style.background = "black";
    document.getElementById(clicked_id).style.color = "#97CAEF";
}

function switchTransit(clicked_id){
    transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    document.getElementById(clicked_id).style.background = "black";
    document.getElementById(clicked_id).style.color = "#97CAEF";
}

function switchClear(){
    trafficLayer.setMap(null);
    bicyclelayer.setMap(null);
    transitLayer.setMap(null);
    document.getElementById("trafficChoice").style.color = "black";
    document.getElementById("trafficChoice").style.background = "#97CAEF";
    document.getElementById("bicycleChoice").style.color = "black";
    document.getElementById("bicycleChoice").style.background = "#97CAEF";
    document.getElementById("transitChoice").style.color = "black";
    document.getElementById("transitChoice").style.background = "#97CAEF";
}

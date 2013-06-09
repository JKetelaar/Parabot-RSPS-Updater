// Google Maps API
function initialize() {
	var latlng = new google.maps.LatLng(48.856614,2.312222);
	var settings = {
		zoom: 14,
		center: latlng,
		scrollwheel: false,
		navigationControl: false,
		scaleControl: false,
		streetViewControl: false,
		draggable: true, 
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
var point = new google.maps.LatLng(48.856614,2.352222);

  
var image = new google.maps.MarkerImage(
  'images/icons/blue_dot.png',
  new google.maps.Size(73,73),
  new google.maps.Point(0,0),
  new google.maps.Point(60,70)
);



var shape = {
  coord: [27,0,29,1,31,2,33,3,34,4,35,5,36,6,37,7,38,8,38,9,39,10,39,11,40,12,40,13,40,14,41,15,41,16,41,17,41,18,41,19,41,20,41,21,41,22,41,23,41,24,41,25,41,26,40,27,40,28,40,29,40,30,39,31,39,32,39,33,38,34,38,35,37,36,37,37,37,38,36,39,36,40,35,41,35,42,34,43,34,44,33,45,33,46,32,47,31,48,31,49,30,50,30,51,29,52,28,53,28,54,27,55,26,56,26,57,25,58,24,59,23,60,22,61,20,61,18,60,17,59,17,58,16,57,15,56,14,55,14,54,13,53,12,52,12,51,11,50,11,49,10,48,9,47,9,46,8,45,8,44,7,43,7,42,6,41,6,40,5,39,5,38,4,37,4,36,4,35,3,34,3,33,2,32,2,31,2,30,2,29,1,28,1,27,1,26,1,25,1,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,1,16,1,15,1,14,1,13,2,12,2,11,3,10,3,9,4,8,5,7,6,6,7,5,8,4,9,3,10,2,12,1,15,0,27,0],
  type: 'poly'
};

var marker = new google.maps.Marker({
  draggable: true,
  raiseOnDrag: false,
  icon: image,
  shape: shape,
  map: map,
  position: point
});


var red_road_styles = [
  {
    featureType: "all",
    stylers: [
      { saturation: -100 }
    ]
  },
  {
    featureType: "road.highway",
    stylers: [
      { hue: "#E1704B" },
      { saturation: 100 }
    ]
  }
];

map.setOptions({styles: red_road_styles});
}




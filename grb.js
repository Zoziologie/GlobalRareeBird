var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 5
	});
	infoWindow = new google.maps.InfoWindow;
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
  }
}

function addRare(regionCode){
	jQuery.ajax({
		"url": "https://api.ebird.org/v2/data/obs/"+regionCode+"/recent/notable?detail=full",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"X-eBirdApiToken": "vcs68p4j67pt"
		},
	}).done(function (response) {
		console.log(response);
		var markers = response.map(function(res, i) {
			var m = new google.maps.Marker({
				position: res,
				title: res.comName,
			})
			var content = res.comName;     

			var infowindow = new google.maps.InfoWindow()

			google.maps.event.addListener(m,'click', (function(m,content,infowindow){ 
				return function() {
					infowindow.setContent(content);
					infowindow.open(map,m);
				};
			})(m,content,infowindow)); 

			return m
		});

		var markerCluster = new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	});

}
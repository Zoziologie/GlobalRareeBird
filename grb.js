
var cntr= [["AF","Afghanistan"],["AL","Albania"],["DZ","Algeria"],["AS","American Samoa"],["AD","Andorra"],["AO","Angola"],["AI","Anguilla"],["AQ","Antarctica"],["AG","Antigua and Barbuda"],["AR","Argentina"],["AM","Armenia"],["AW","Aruba"],["AC","Ashmore and Cartier Islands"],["AU","Australia"],["AT","Austria"],["AZ","Azerbaijan"],["BS","Bahamas"],["BH","Bahrain"],["BD","Bangladesh"],["BB","Barbados"],["BY","Belarus"],["BE","Belgium"],["BZ","Belize"],["BJ","Benin"],["BM","Bermuda"],["BT","Bhutan"],["BO","Bolivia"],["BA","Bosnia and Herzegovina"],["BW","Botswana"],["BV","Bouvet Island"],["BR","Brazil"],["IO","British Indian Ocean Territory"],["BN","Brunei"],["BG","Bulgaria"],["BF","Burkina Faso"],["BI","Burundi"],["KH","Cambodia"],["CM","Cameroon"],["sub","Canada"],["CV","Cape Verde"],["BQ","Caribbean"],["NL","Netherlands"],["KY","Cayman Islands"],["CF","Central African Republic"],["TD","Chad"],["CL","Chile"],["CN","China"],["CX","Christmas Island"],["CP","Clipperton Island"],["CC","Cocos (Keeling) Islands"],["CO","Colombia"],["KM","Comoros"],["CG","Congo"],["CK","Cook Islands"],["CS","Coral Sea Islands"],["CR","Costa Rica"],["CI","Côte d'Ivoire"],["HR","Croatia"],["CU","Cuba"],["CW","Curaçao"],["CY","Cyprus"],["CZ","Czech Republic"],["DK","Denmark"],["DJ","Djibouti"],["DM","Dominica"],["DO","Dominican Republic"],["CD","DR Congo"],["EC","Ecuador"],["EG","Egypt"],["SV","El Salvador"],["GQ","Equatorial Guinea"],["ER","Eritrea"],["EE","Estonia"],["SZ","Eswatini"],["ET","Ethiopia"],["FK","Falkland Islands (Malvinas)"],["FO","Faroe Islands"],["FJ","Fiji"],["FI","Finland"],["FR","France"],["GF","French Guiana"],["PF","French Polynesia"],["TF","French Southern and Antarctic Lands"],["GA","Gabon"],["GM","Gambia"],["GE","Georgia"],["DE","Germany"],["GH","Ghana"],["GI","Gibraltar"],["GR","Greece"],["GL","Greenland"],["GD","Grenada"],["GP","Guadeloupe"],["GU","Guam"],["GT","Guatemala"],["GG","Guernsey"],["GN","Guinea"],["GW","Guinea-Bissau"],["GY","Guyana"],["HT","Haiti"],["HM","Heard Island and McDonald Islands"],["XX","High Seas"],["HN","Honduras"],["HK","Hong Kong"],["HU","Hungary"],["IS","Iceland"],["IN","India"],["ID","Indonesia"],["IR","Iran"],["IQ","Iraq"],["IE","Ireland"],["IM","Isle of Man"],["IL","Israel"],["IT","Italy"],["JM","Jamaica"],["JP","Japan"],["JE","Jersey"],["JO","Jordan"],["KZ","Kazakhstan"],["KE","Kenya"],["KI","Kiribati"],["XK","Kosovo"],["KW","Kuwait"],["KG","Kyrgyzstan"],["LA","Laos"],["LV","Latvia"],["LB","Lebanon"],["LS","Lesotho"],["LR","Liberia"],["LY","Libya"],["LI","Liechtenstein"],["LT","Lithuania"],["LU","Luxembourg"],["MO","Macau"],["MG","Madagascar"],["MW","Malawi"],["MY","Malaysia"],["MV","Maldives"],["ML","Mali"],["MT","Malta"],["MH","Marshall Islands"],["MQ","Martinique"],["MR","Mauritania"],["MU","Mauritius"],["YT","Mayotte"],["MX","Mexico"],["FM","Micronesia"],["MD","Moldova"],["MC","Monaco"],["MN","Mongolia"],["ME","Montenegro"],["MS","Montserrat"],["MA","Morocco"],["MZ","Mozambique"],["MM","Myanmar"],["NA","Namibia"],["NR","Nauru"],["NP","Nepal"],["NL","Netherlands"],["NC","New Caledonia"],["NZ","New Zealand"],["NI","Nicaragua"],["NE","Niger"],["NG","Nigeria"],["NU","Niue"],["NF","Norfolk Island"],["MP","Northern Mariana Islands"],["KP","North Korea"],["MK","North Macedonia"],["NO","Norway"],["OM","Oman"],["PK","Pakistan"],["PW","Palau"],["PS","Palestinian Territory"],["PA","Panama"],["PG","Papua New Guinea"],["PY","Paraguay"],["PE","Peru"],["PH","Philippines"],["PN","Pitcairn Islands"],["PL","Poland"],["PT","Portugal"],["PR","Puerto Rico"],["QA","Qatar"],["RE","Réunion"],["RO","Romania"],["RU","Russia"],["RW","Rwanda"],["BL","Saint Barthélemy"],["SH","Saint Helena, Ascension, and Tristan da Cunha"],["KN","Saint Kitts and Nevis"],["LC","Saint Lucia"],["MF","Saint Martin (French part)"],["PM","Saint Pierre and Miquelon"],["VC","Saint Vincent and the Grenadines"],["WS","Samoa"],["SM","San Marino"],["ST","São Tomé and Príncipe"],["SA","Saudi Arabia"],["SN","Senegal"],["RS","Serbia"],["SC","Seychelles"],["SL","Sierra Leone"],["SG","Singapore"],["SX","Sint Maarten"],["SK","Slovakia"],["SI","Slovenia"],["SB","Solomon Islands"],["SO","Somalia"],["ZA","South Africa"],["GS","South Georgia and South Sandwich Islands"],["KR","South Korea"],["SS","South Sudan"],["ES","Spain"],["LK","Sri Lanka"],["SD","Sudan"],["SR","Suriname"],["SJ","Svalbard"],["SE","Sweden"],["CH","Switzerland"],["SY","Syria"],["TW","Taiwan"],["TJ","Tajikistan"],["TZ","Tanzania"],["TH","Thailand"],["TL","Timor-Leste"],["TG","Togo"],["TK","Tokelau"],["TO","Tonga"],["TT","Trinidad and Tobago"],["TN","Tunisia"],["TR","Turkey"],["TM","Turkmenistan"],["TC","Turks and Caicos Islands"],["TV","Tuvalu"],["UG","Uganda"],["UA","Ukraine"],["AE","United Arab Emirates"],["GB","United Kingdom"],["sub","United States"],["UM","United States Minor Outlying Islands"],["UY","Uruguay"],["UZ","Uzbekistan"],["VU","Vanuatu"],["VA","Vatican City (Holy See)"],["VE","Venezuela"],["VN","Vietnam"],["VG","Virgin Islands (British)"],["VI","Virgin Islands (U.S.)"],["WF","Wallis and Futuna"],["EH","Western Sahara"],["YE","Yemen"],["ZM","Zambia"],["ZW","Zimbabwe"]];
var cntr_us = [["US-AL","Alabama"],["US-AK","Alaska"],["US-AZ","Arizona"],["US-AR","Arkansas"],["US-CA","California"],["US-CO","Colorado"],["US-CT","Connecticut"],["US-DE","Delaware"],["US-DC","District of Columbia"],["US-FL","Florida"],["US-GA","Georgia"],["US-HI","Hawaii"],["US-ID","Idaho"],["US-IL","Illinois"],["US-IN","Indiana"],["US-IA","Iowa"],["US-KS","Kansas"],["US-KY","Kentucky"],["US-LA","Louisiana"],["US-ME","Maine"],["US-MD","Maryland"],["US-MA","Massachusetts"],["US-MI","Michigan"],["US-MN","Minnesota"],["US-MS","Mississippi"],["US-MO","Missouri"],["US-MT","Montana"],["US-NE","Nebraska"],["US-NV","Nevada"],["US-NH","New Hampshire"],["US-NJ","New Jersey"],["US-NM","New Mexico"],["US-NY","New York"],["US-NC","North Carolina"],["US-ND","North Dakota"],["US-OH","Ohio"],["US-OK","Oklahoma"],["US-OR","Oregon"],["US-PA","Pennsylvania"],["US-RI","Rhode Island"],["US-SC","South Carolina"],["US-SD","South Dakota"],["US-TN","Tennessee"],["US-TX","Texas"],["US-UT","Utah"],["US-VT","Vermont"],["US-VA","Virginia"],["US-WA","Washington"],["US-WV","West Virginia"],["US-WI","Wisconsin"],["US-WY","Wyoming"]];
var cntr_ca = [["CA-AB","Alberta"],["CA-BC","British Columbia"],["CA-MB","Manitoba"],["CA-NB","New Brunswick"],["CA-NL","Newfoundland and Labrador"],["CA-NT","Northwest Territories"],["CA-NS","Nova Scotia"],["CA-NU","Nunavut"],["CA-ON","Ontario"],["CA-PE","Prince Edward Island"],["CA-QC","Quebec"],["CA-SK","Saskatchewan"],["CA-YT","Yukon Territory"]]

function addRegion(regionCode,callback) {
	$('#ebirddata').hide();$('#markeronmap').hide();$('#mymodal').modal('show');
	cntr_sel.push(regionCode)
	window.history.pushState("", "", "/globalrareebird?r="+ cntr_sel.join(','));
	$(".country-added-div").append( '<span class="badge badge-primary" id="'+regionCode+'">' + $("#countrySelect option[value='"+regionCode+"']").text()+'</span>')
	$("#countrySelect option[value='"+regionCode+"']").remove();
	$("#countrySelect").val('0');
	$('#ebirddata').show();
	jQuery.ajax({
		"url": "https://api.ebird.org/v2/data/obs/"+regionCode+"/recent/notable?detail=full",
		"method": "GET",
		"timeout": 0,
		"headers": {"X-eBirdApiToken": "vcs68p4j67pt"},
	}).done(function (observations) {
		$('#markeronmap').show();
		console.log(observations)
		var id = observations.map(item => item.obsId);
		observations = observations.filter( (val,index,self) => id.indexOf(val.obsId) === index )

		var spe_list = [];//$('#filter-specie').children().map( (id,e) => e.innerHTML).get()
		var item =''

		observations.forEach(function(obs, idx, array) {

			var pop = '<span class="obs-min-name">'+obs.howMany+' '+obs.comName+'</span>';
			pop += obs.hasRichMedia ? '<i class="fas fa-lg fa-camera obs-icon"></i>':"";
			pop += obs.hasComments ? '<i class="fas fa-lg fa-comment obs-icon"></i>':"";
			pop += '<a href="https://ebird.org/view/checklist/'+obs.subId+'" target="_blank"><i class="fas fa-link obs-icon"></i></a><br>';
			pop += '<ul class="fa-ul">'
			pop += '<li><span class="fa-li"><i class="fas fa-calendar obs-icon"></i></span>' + obs.obsDt + '</li>';
			pop += '<li><span class="fa-li"><img class="hotspot-icon" src="https://zoziologie.raphaelnussbaumer.com/assets/Merge2Hotspot/images/hotspot-icon-hotspot_small.png"/></span>';
			pop += obs.locationPrivate ? obs.locName :  '<a href="https://ebird.org/hotspot/'+obs.locId+'"  target="_blank">'+obs.locName+'</a>';
			pop += '<a href="https://www.google.com/maps/search/?api=1&query='+obs.lat+','+obs.lng+'" target="_blank"><i class="fas fa-map obs-icon"></i></a></li>';
			pop += '<li><span class="fa-li"><i class="fas fa-binoculars obs-icon"></i></span>' + obs.userDisplayName + '</li>';
			pop += '</ul>'
			var m = L.marker([obs.lat, obs.lng], {
				title: obs.comName,
				id: obs.obsId,
				icon:L.icon({
					iconUrl: "https://zoziologie.raphaelnussbaumer.com/assets/Merge2Hotspot/images/hotspot-icon_perso_small.png",
					iconAnchor: [12, 34],
					popupAnchor: [0, -34],
				})
			}).bindPopup(pop, {
				maxWidth : 350,
				minWidth : 350
			}).addTo(markers)

			var dayago = Math.floor((new Date()-new Date(obs.obsDt))/(1000*60*60*24));
			item += '<button class="button-obs" id="button-'+obs.obsId+'" daysago="'+dayago+'" spCode="'+obs.speciesCode+'" onclick="center(\''+obs.obsId+'\')">';
			item += '<div class="obs-min">';
			item += '<span class="obs-min-name">'+obs.howMany+' '+obs.comName+'</span>';
			item += obs.hasRichMedia ? '<i class="fas fa-camera obs-icon"></i>':"";
			item += obs.hasComments ? '<i class="fas fa-comment obs-icon"></i>':"";
			item += '<a href="https://ebird.org/view/checklist/'+obs.subId+'" target="_blank"><i class="fas fa-link obs-icon"></i></a>';
			item += '<a data-toggle="collapse" class="obs-collapse" data-target="#div-'+obs.obsId+'">'
			item += '<i class="fa fa-chevron-down" id="fa-'+obs.obsId+'"></i></a>';
			item += '</div>';
			item += '<div class="obs-detail collapse" id="div-'+obs.obsId+'"><ul class="fa-ul">'
			item += '<li><span class="fa-li"><i class="fas fa-calendar obs-icon"></i></span>' + obs.obsDt + '</li>';
			item += '<li><span class="fa-li"><img class="hotspot-icon" src="https://zoziologie.raphaelnussbaumer.com/assets/Merge2Hotspot/images/hotspot-icon-hotspot_small.png"/></span>'
			item += obs.locationPrivate ? obs.locName :  '<a href="https://ebird.org/hotspot/'+obs.locId+'"  target="_blank">'+obs.locName+'</a>';
			item += '</li><li><span class="fa-li"><i class="fas fa-binoculars obs-icon"></i></span> ' + obs.userDisplayName + '</li>';
			item += '</ul></div></button>';

			if (spe_list.indexOf(obs.comName)==-1){
				$('#filter-specie').append($('<option>', { 
					value: obs.speciesCode,
					text : obs.comName
				}));
				spe_list.push(obs.comName)
			}

			if (idx === array.length - 1){ 
				map.fitBounds(markers.getBounds());
				setTimeout(function(){
    				$('#mymodal').modal('hide');
				}, 1000);
			}
		});
		$('#app-obs').append(item); 

		if (observations.length==0){
			setTimeout(function(){
				$('#mymodal').modal('hide');
			}, 1000);
			alert('No rare bird for this region! Try another one')
		}
		//var spe_list = observations.map(e => e.comName);
		//var spe_list = spe_list.filter((value, index, self) => self.indexOf(value) === index);
	});
}

function center(id){
	var m = markers.getLayers().find( (l) => l.options.id==id);
	map.setView(m.getLatLng(),10);
}

function filter(){
	var daysago =  parseFloat($('#formControlRange').val());
	$('#range-value').html(daysago)
	var specie = $('#filter-specie').val();
	$('.button-obs').each(function(e){
		if (specie=='0'){
			sp = true
		} else {
			sp = this.getAttribute('spcode') == specie
		}
		var da = parseFloat(this.getAttribute('daysago')) < daysago ;
		if ( sp & da){
			this.hidden=false
		} else{
			this.hidden=true
		}
	})
}


var cntr_sel=[], map, markers, win;

$( document ).ready(function() {

	map = new L.Map('map');
	map.fitWorld().zoomIn();
	control = L.control.layers({
		'MapBox': L.tileLayer.provider('MapBox', {id: 'rafnuss.npl3amec',accessToken: token.mapbox}).addTo(map),
		'OpenStreetMap': L.tileLayer.provider('OpenStreetMap.Mapnik'),
		'Satellite': L.tileLayer.provider('Esri.WorldImagery')
	}, null, { collapsed: false	}).addTo(map);

	L.MakiMarkers.accessToken = token.mapbox;
	markers = L.markerClusterGroup({	
		showCoverageOnHover:1, 
		maxClusterRadius:50,
		iconCreateFunction: function(cluster) {
			return L.icon({
				iconUrl: "https://zoziologie.raphaelnussbaumer.com/assets/Merge2Hotspot/images/hotspot-icon-hotspot-plus_small.png",
				iconAnchor: [12, 30],
				popupAnchor: [0, -12],
			})
		}
	}).addTo(map);

	$.each(cntr, function (i, item) {
		if (item[0] == 'sub'){
			$('#countrySelect').append('<optgroup label="' + item[1] + '"></optgroup>')
		} else {
			$('#countrySelect').append($('<option>', { 
				value: item[0],
				text : item[1] 
			}));
		}
		if (i==cntr.length-1){
			$.each(cntr_us, function (i, item1) {
				$('#countrySelect optgroup[label="United States"]').append($('<option>', { 
					value: item1[0],
					text : item1[1] 
				}));
			});
			$.each(cntr_ca, function (i, item1) {
				$('#countrySelect optgroup[label="Canada"]').append($('<option>', { 
					value: item1[0],
					text : item1[1] 
				}));
			});
		}
	});

	$('#countrySelect').change(function(){
		addRegion($('#countrySelect').val())
	});

	$('#sidebar').on('hidden.bs.collapse', function (e) {
		if ($(this).is(e.target)) {
			$('.collapse-sidebar').css('left','0');
			$("#caret").attr('data-icon', 'caret-right');
		} else{
			$('#fa-'+e.target.id.split('-')[1]).removeClass('fa-chevron-up').addClass('fa-chevron-down');
		}
	}).on('shown.bs.collapse', function (e) {
		if ($(this).is(e.target)) {
			$('.collapse-sidebar').css('left','408px');
			$("#caret").attr('data-icon', 'caret-left');
		} else{
			$('#fa-'+e.target.id.split('-')[1]).removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}
	})

	$('.obs-detail').on('hidden.bs.collapse', function (e) {
		$("#caret").attr('data-icon', 'caret-right');
	}).on('shown.bs.collapse', function (e) {
		$("#caret").attr('data-icon', 'caret-left');
	})

	var tmp = window.location.href.split('?r=')[1]
	if (tmp){
		tmp.split(',').forEach(addRegion)
	}

	$('#formControlRange').on('change',filter)

	$('#filter-specie').change(filter);
	
});


//https://api.ebird.org/v2/ref/region/find/?key=jfekjedvescr&q=ex



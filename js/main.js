//initialize the map         
  var map = L.map('map').setView([45.438296, 12.333483], 13);
  
  //Create baselayer - tiles         
  var backgroundMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
  backgroundMap.addTo(map);

var waveicon = L.icon({
    iconUrl: 'img/icon2.png',

    iconSize: [38, 30],
    iconArchor: [22, 94],
    popupArchor: [-3, -76]
});

var marker = L.marker([45.438369, 12.318234], {icon: waveicon}).addTo(map);
var popup = "<h5>De Piazzale Roma</h5> dient als vervoersknooppunt voor Venetië, in de nabijheid van de treinstations, bus- en kabelbaanstations van de stad. Wanneer zich overstromingen voordoen, kunnen veel van deze vervoersmogelijkheden worden uitgesteld of volledig worden stopgezet.<br><img src='img/roma.jpg'style='height: 200px; width=300px;'/> ";marker.bindPopup(popup); 

var Ponte = L.marker([45.439703, 12.317011], {icon: waveicon}).addTo(map);
var popup = "<h5>Ponte della Libertà</h5> Deze brug, die de historische stad Venetië met het vasteland verbindt, werd in opdracht van Benito Mussolini in de jaren 1930 gebouwd. Hoewel de brug de enige manier is om Venetië met de auto te bereiken, kan de bouw ervan de omstandigheden van de acqua alta in Venetië hebben verergerd.<br><img src='img/brug.jpg'style='height:150px; width:120px;'/>"
;Ponte.bindPopup(popup); 

var Zattere = L.marker([45.430948, 12.327091], {icon: waveicon}).addTo(map);
var popup = "<h5>De Zattere promenade</h5> is een lange, relatief rustige promenade over een groot deel van de zuidelijke kust van Venetië, recht tegenover het eiland Giudecca. In het verleden werd de Zattere gebruikt als aanlegplaats voor houtbenodigdheden voor de bouw van boten en gebouwen, nu biedt de Zattere een prachtig uitzicht op vele beroemde kerken in Venetië. Bij hoog water wordt de promenade vaak volledig onder water gezet door getijdengolven van de zee.<br><img src='img/zattere.jpg'style='height:150px; width:250px;'/>";Zattere.bindPopup(popup); 
        
var Ca = L.marker([45.440811, 12.333910],{icon: waveicon}).addTo(map);
var popup = "<h5>Ca' d'Oro</h5>Ook bekend als Palazzo Santa Sofia, deze voormalige privéwoning werd in 1430 voltooid. Nu een openbare kunstgalerie, het palazzo toont Renaissance werken, voornamelijk van Venetiaanse kunstenaars zoals Titiaan en Tintoretto. Van tijd tot tijd werden de fresco's die de muren van het palazzo sieren, bedreigd of zelfs beschadigd door een recordaantal overstromingen, wat uitgebreide restauratie-inspanningen vereist.<br><img src='img/cdoro.jpg'style='height:150px; width:250px;'/>";Ca.bindPopup(popup);
        
var Marco = L.marker([45.433887, 12.333751],{icon: waveicon}).addTo(map);
var popup = "<h5>Het Teatro la Fenice</h5> (Engels: Phoenix Theatre) operahuis heeft een turbulente geschiedenis van branden en juridische problemen ondergaan, waardoor het drie keer is gebouwd en herbouwd. De locatie van het theater in een van de laagste delen van Venetië maakt het vatbaar voor overstromingen, en voorstellingen kunnen worden afgelast als het water te hoog wordt.<br><img src='img/fenice.jpg'style='height:150px; width:250px;'/>";Marco.bindPopup(popup);
        
var santa = L.marker([45.430902, 12.334722],{icon: waveicon}).addTo(map);
var popup = "<h5>Santa Maria della Salute</h5> Deze rooms-katholieke kerk werd aan het einde van de 17e eeuw voltooid en werd gebouwd in het kielzog van een enorme plaag die de stad verwoestte. Het was gewijd aan de Maagd Maria, die de Republiek Venetië zou beschermen. Meer recentelijk, de kerk dient de gezondheid van de stad op een andere manier, want het is gelegen in de buurt van het hydrografische station dat het overstromingswater in Venetië in de gaten houdt.<br><img src='img/santa.jpg'style='height:150px; width:250px;'/>";santa.bindPopup(popup);
        
var Campo = L.marker([45.439154, 12.341919],{icon: waveicon}).addTo(map);
var popup = "<h5>De Campo Santi Giovanni e Paolo</h5> is minder bekend dan de Piazza San Marco, maar het Campo Santi Giovanni e Paolo is de thuisbasis van een van de grootste kerken van Venetië, evenals een massief ruiterstandbeeld van de beroemde Renaissance kunstenaar Andrea del Verrocchio. Bovenop een verhoogde sokkel heeft het publieke standbeeld niets te vrezen van het overstromingswater.<br><img src='img/compo.jpg'style='height:150px; width:250px;'/>";Campo.bindPopup(popup);
        
var Piazza = L.marker([45.434282, 12.337554],{icon: waveicon}).addTo(map);
var popup = "<h5>Het Piazza San Marco</h5> Het belangrijkste openbare plein van Venetië, is een van de meest bezochte plaatsen in de stad, met enkele van de beroemdste bezienswaardigheden. Populaire attracties zijn onder andere de San Marco-basiliek, de Biblioteca Nazionale Marciana en het Dogepaleis. Het plein is een van de laagst gelegen gebieden van Venetië en overstroomt vaak als het water stijgt.<br><img src='img/marco.jpg'style='height:150px; width:250px;'/>";Piazza.bindPopup(popup)
        var photoImg = '<img src="img/marco.jpeg" height="150px" width="150px"/>';
        
var Riva = L.marker([45.434081, 12.342594],{icon: waveicon}).addTo(map);
var popup = "<h5>De Riva degli Schiavoni</h5> Is een lange, levendige promenade die zich uitstrekt van het Dogenpaleis tot de Arsenale di Venezia. Ooit een marktplaats voor Griekse en Slavische vissers om hun waren te verkopen, biedt de promenade nu voornamelijk souvenirs. Wanneer het overstromingswater stijgt, verkopen ondernemende winkeliers in plaats daarvan rubberen laarzen.<br><img src='img/riva.jpg'style='height:150px; width:250px;'/>";Riva.bindPopup(popup);
        
var Ars = L.marker([45.435129, 12.349933],{icon: waveicon}).addTo(map);
var popup = "<h5>Arsenale di Venezia</h5>Een vroeg voorbeeld van een industrieel complex, dit scheepsbouwcentrum was van groot belang voor de dominantie van Venetië tijdens de Renaissance. Na het verval van de Republiek werd de productie stopgezet en raakte het Arsenaal in verval. Onlangs heeft het gebied een nieuw leven gevonden als controlecentrum voor het MOSE-project, een grootschalig ingenieursbureau dat de overstromingen in Venetië een halt wil toeroepen door de bouw van een reeks poorten rond de lagune.<br><img src='img/ars.jpg'style='height:150px; width:250px;'/>";Ars.bindPopup(popup);
        
// Create a marker first
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
 
//create a empty geojson layer
var canallayer = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);

 // new Http Request
var canals = new XMLHttpRequest();
// set the request method and data file
canals.open('GET', encodeURI("js/Canals.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
canals.onload = function() {
    console.log('hello')
  if (canals.readyState === 4) {
      // add the json data to the geojson layer we created before!
      canallayer.addData(JSON.parse(canals.responseText));
    } else {
      alert('Request failed.  Returned status of ' + canals.status);
    }
};

canals.send();

//create a empty geojson layer
var floodlayer = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
 // new Http Request
var flood = new XMLHttpRequest();
// set the request method and data file
flood.open('GET', encodeURI("js/Venice_floodwater.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
flood.onload = function() {
    console.log('hello flood')
  if (flood.readyState === 4) {
      // add the json data to the geojson layer we created before!
      floodlayer.addData(JSON.parse(flood.responseText));
    } else {
      alert('Request failed.  Returned status of ' + flood.status);
    }
};
// send the request
flood.send(); 



//map2
  //initialize the map         
  var map2 = L.map('map2').setView([16.013516, 101.901765], 5);
  
  //Create baselayer - tiles         
  var backgroundMap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
  backgroundMap2.addTo(map2);

var waveicon = L.icon({
    iconUrl: 'img/icon2.png',

    iconSize: [38, 30],
    iconArchor: [22, 94],
    popupArchor: [-3, -76]
});

var cantho = L.marker([10.740474, 106.582483], {icon: waveicon}).addTo(map2);
var popup= "<h5>Ho Chi Minh</h5>Behoort tot de top 10 van steden in de wereld die het meest te lijden hebben onder de klimaatverandering. Het overstromingsbeheersysteem van de stad staat aan de rand van zijn capaciteit. Tijdens het natte seizoen (mei tot november) komt de stad gemiddeld twee keer per dag onder water te staan, maar slechts een paar uur per keer. Overstromingen ontstaan door hoogwater in combinatie met rivierafvoer. In de afgelopen 10-15 jaar zijn de maximale getijdenniveaus met ongeveer 20 tot 30 cm toegenomen.<br><img src='img/cant.jpg'style='height:150px; width:250px;'/>";cantho.bindPopup(popup)

var camb= L.marker([12.547603, 104.884577], {icon: waveicon}).addTo(map2);
var popup= "<h5>Cambodja</h5> De stad Can Tho wordt bedreigd door terugkerende overstromingen, die drie oorzaken hebben: hoge rivierafvoeren, getijden- en stormvloeden op zee pieken, evenals zware lokale neerslag. Op lange termijn worden overstromingen versterkt door bodemdaling, zowel door natuurlijke verdichting en verhoogde wateronttrekking. Deze verlaging van de bodem zal direct bijdragen aan het overstromingsprobleem. Extreme regenval gebeurtenissen kunnen in een paar uur meer dan 100 mm opleveren.<br><img src='img/camb.jpg'style='height:150px; width:250px;'/>";camb.bindPopup(popup)

var thai= L.marker([14.947612, 100.797011], {icon: waveicon}).addTo(map2);
var popup= "<h5>Thailand</h5> Overstromingen in Thailand zijn regelmatige natuurrampen in Thailand die zich bijna elk jaar tijdens de regentijd voordoen. De regentijd seizoenen in het land verschillen per regio. Thailand kampt jaarlijks tussen droogte en overstromingen. Per jaar ontvangt Thailand ongeveer 754.000 miljoen m3 regen.<br><img src='img/thai.jpg'style='height:150px; width:250px;'/>";thai.bindPopup(popup)

var laos= L.marker([19.367029, 102.550660], {icon: waveicon}).addTo(map2);
var popup= "<h5>Laos</h5>In Laos zijn meerdere doden gevallen en zeker honderd mensen vermist geraakt na het instorten van een stuwdam. De overstroming die ontstond na de dambreuk overspoelde zes dorpen. Zo’n 1.300 gezinnen, ongeveer 6.600 mensen, raakten dakloos. <br><img src='img/laos.jpg'style='height:150px; width:250px;'/>";laos.bindPopup(popup)

var viet= L.marker([14.252445, 108.117600], {icon: waveicon}).addTo(map2);
var popup= "<h5>Vietnam</h5>Bijna elk jaar wordt Vietnam verwoest door stormen, overstromingen en tyfoons die honderden mensen doden en miljoenen dollars schade veroorzaken. Het probleem dat door rampen is ontstaan is verergerd door houtkap, erosie en een overmaat aan ontwikkeling. Het Vietnamese leger wordt vaak aan het werk gezet om reparaties uit te voeren, dijken te repareren, zandzakken te leggen en hulp en noodvoorraden te leveren.<br><img src='img/viet.jpg'style='height:150px; width:250px;'/>";viet.bindPopup(popup)

        
// Create a marker first
var geojsonMarkerOptions2 = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
 
//create a empty geojson layer
var Mekong = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions2);
  }
}).addTo(map2);

 // new Http Request
var xhttp2 = new XMLHttpRequest();
// set the request method and data file
xhttp2.open('GET', encodeURI("js/gms_river.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
xhttp2.onload = function() {
  if (xhttp2.readyState === 4) {
      // add the json data to the geojson layer we created before!
     Mekong.addData(JSON.parse(xhttp2.responseText));
    } else {
      alert('Request failed.  Returned status of ' + xhttp2.status);
    }
};
// send the request
xhttp2.send();
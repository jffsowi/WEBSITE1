<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    
    <script>
  //initialize the map         
  var map = L.map('map').setView([45.4408474, 12.3155151], 13);
  
  //Create baselayer - tiles         
  var backgroundMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
  backgroundMap.addTo(map);
        
 //initialize the map         
  var map2 = L.map('map2').setView([16.013516, 101.901765], 6);
  
  //Create baselayer - tiles         
  var backgroundMap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
  backgroundMap.addTo(map);
        
        
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
var geojson2 = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
        
var marker = L.marker([45.438369, 12.318234]).addTo(map);
var popup = "De Piazzale Roma dient als vervoersknooppunt voor Venetië, in de nabijheid van de treinstations, bus- en kabelbaanstations van de stad. Wanneer zich overstromingen voordoen, kunnen veel van deze vervoersmogelijkheden worden uitgesteld of volledig worden stopgezet. ";marker.bindPopup(popup); 
        

var marker = L.marker([45.438369, 12.318234]).addTo(map);
var popup = "De Piazzale Roma dient als vervoersknooppunt voor Venetië, in de nabijheid van de treinstations, bus- en kabelbaanstations van de stad. Wanneer zich overstromingen voordoen, kunnen veel van deze vervoersmogelijkheden worden uitgesteld of volledig worden stopgezet. ";marker.bindPopup(popup); 

var Ponte = L.marker([45.439703, 12.317011]).addTo(map);
var popup = "Ponte della Libertà: Deze brug, die de historische stad Venetië met het vasteland verbindt, werd in opdracht van Benito Mussolini in de jaren 1930 gebouwd. Hoewel de brug de enige manier is om Venetië met de auto te bereiken, kan de bouw ervan de omstandigheden van de acqua alta in Venetië hebben verergerd.  ";Ponte.bindPopup(popup); 

var Zattere = L.marker([45.430948, 12.327091]).addTo(map);
var popup = "De Zattere is een lange, relatief rustige promenade over een groot deel van de zuidelijke kust van Venetië, recht tegenover het eiland Giudecca. In het verleden werd de Zattere gebruikt als aanlegplaats voor houtbenodigdheden voor de bouw van boten en gebouwen, nu biedt de Zattere een prachtig uitzicht op vele beroemde kerken in Venetië. Bij hoog water wordt de promenade vaak volledig onder water gezet door getijdengolven van de zee.";Zattere.bindPopup(popup); 
        
var Ca = L.marker([45.440811, 12.333910]).addTo(map);
var popup = "Ook bekend als Palazzo Santa Sofia, deze voormalige privéwoning werd in 1430 voltooid. Nu een openbare kunstgalerie, het palazzo toont Renaissance werken, voornamelijk van Venetiaanse kunstenaars zoals Titiaan en Tintoretto. Van tijd tot tijd werden de fresco's die de muren van het palazzo sieren, bedreigd of zelfs beschadigd door een recordaantal overstromingen, wat uitgebreide restauratie-inspanningen vereist.";Ca.bindPopup(popup);
        
var Marco = L.marker([45.433887, 12.333751]).addTo(map);
var popup = "Het Teatro la Fenice (Engels: Phoenix Theatre) operahuis heeft een turbulente geschiedenis van branden en juridische problemen ondergaan, waardoor het drie keer is gebouwd en herbouwd. De locatie van het theater in een van de laagste delen van Venetië maakt het vatbaar voor overstromingen, en voorstellingen kunnen worden afgelast als het water te hoog wordt.";Marco.bindPopup(popup);
        
var santa = L.marker([45.430902, 12.334722]).addTo(map);
var popup = "Het Teatro la Fenice (Engels: Phoenix Theatre) operahuis heeft een turbulente geschiedenis van branden en juridische problemen ondergaan, waardoor het drie keer is gebouwd en herbouwd. De locatie van het theater in een van de laagste delen van Venetië maakt het vatbaar voor overstromingen, en voorstellingen kunnen worden afgelast als het water te hoog wordt.";santa.bindPopup(popup);
        
var Campo = L.marker([45.439154, 12.341919]).addTo(map);
var popup = "De Campo Santi Giovanni e Paolo is minder bekend dan de Piazza San Marco, maar het Campo Santi Giovanni e Paolo is de thuisbasis van een van de grootste kerken van Venetië, evenals een massief ruiterstandbeeld van de beroemde Renaissance kunstenaar Andrea del Verrocchio. Bovenop een verhoogde sokkel heeft het publieke standbeeld niets te vrezen van het overstromingswater.";Campo.bindPopup(popup);
        
var Piazza = L.marker([45.434282, 12.337554]).addTo(map);
var popup = "Het Piazza San Marco, het belangrijkste openbare plein van Venetië, is een van de meest bezochte plaatsen in de stad, met enkele van de beroemdste bezienswaardigheden. Populaire attracties zijn onder andere de San Marco-basiliek, de Biblioteca Nazionale Marciana en het Dogepaleis. Het plein is een van de laagst gelegen gebieden van Venetië en overstroomt vaak als het water stijgt." ;Piazza.bindPopup(popup);
        
var Riva = L.marker([45.434081, 12.342594]).addTo(map);
var popup = "De Riva degli Schiavoni is een lange, levendige promenade die zich uitstrekt van het Dogenpaleis tot de Arsenale di Venezia. Ooit een marktplaats voor Griekse en Slavische vissers om hun waren te verkopen, biedt de promenade nu voornamelijk souvenirs. Wanneer het overstromingswater stijgt, verkopen ondernemende winkeliers in plaats daarvan rubberen laarzen.";Riva.bindPopup(popup);
        
var Ars = L.marker([45.435129, 12.349933]).addTo(map);
var popup = "<h1>HI</h1><p>plex, dit scheepsbouwcentrum was van groot belang voor de dominantie van Venetië tijdens de Renaissance. Na het verval van de Republiek werd de productie stopgezet en raakte het Arsenaal in verval. Onlangs heeft het gebied een nieuw leven gevonden als controlecentrum voor het MOSE-project, een grootschalig ingenieursbureau dat de overstromingen in Venetië een halt wil toeroepen door de bouw van een reeks poorten rond de lagune.<p> <img src='./img/marco.jpg'/>";Ars.bindPopup(popup);
        
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
var geojson = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);

 // new Http Request
var xhttp = new XMLHttpRequest();
// set the request method and data file
xhttp.open('GET', encodeURI("./Canals.geojson"));
//specify what must be done with the geojson data to the layer when request is succesfull
xhttp.onload = function() {
  if (xhttp.readyState === 4) {
      // add the json data to the geojson layer we created before!
      geojson.addData(JSON.parse(xhttp.responseText));
    } else {
      alert('Request failed.  Returned status of ' + xhttp.status);
    }
};
// send the request
xhttp.send();        
 
       </script>
// Construct your control in whatever manner is appropriate.
// Generally, your constructor will want access to the
// DIV on which you'll attach the control UI to the Map.

/**
 * The HomeControl adds a control to the map that simply
 * returns the user to Chicago. This constructor takes
 * the control DIV as an argument.
 */
function HomeControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map.
  controlDiv.style.padding = '25px';

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.title = 'Click to set the map to Home';
 
  controlDiv.appendChild(controlUI);

  // VARIABLES

  var chicago = new google.maps.LatLng(-34.397, 150.644);
  // Setup the click event listeners: simply set the map to Chicago.
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(chicago)
  });

   controlUI.innerHTML = '<button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th-large"></span></button>';
}
function FiltersControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map.
  controlDiv.style.padding = '25px';

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.title = 'Click to set the map to Home';
 
  controlDiv.appendChild(controlUI);

  // VARIABLES

  var chicago = new google.maps.LatLng(-34.397, 150.644);
  // Setup the click event listeners: simply set the map to Chicago.
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(chicago)
  });

   controlUI.innerHTML = '<div class="panel panel-default leftpanel"><div class="panel-heading">Panel heading</div><div class="panel-body"><form action="index.html" method="post"><fieldset><h3>Filters</h3><label for="power">POWER</label><br><input type="range" id="power" name="filter_power"><br><label for="time">HOURS/DAY</label><br><input type="range" id="time" name="filter_time"><br><label for="age">AGE</label><br><input type="range" id="age" name="filter_age"></fieldset><fieldset><h3>Remark</h3><input type="checkbox" id="led" name="remark_led"><label for="lef">LED</label><br><input type="checkbox" id="heatmap" name="remark_heatmap"><label for="heatmap">HEATMAP</label><br><input type="checkbox" id="old" name="remark_old"><label for="old">OLD</label></fieldset></form></div></div>';
}
function GraphsControl(graphsControlDiv, map){
  graphsControlDiv.style.padding = '25px';

  var controlUI = document.createElement('div');

  graphsControlDiv.appendChild(controlUI);
  controlUI.innerHTML = '<div class="panel panel-default rightpanel"><div class="panel-heading"><h2>Panel heading</h2><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th"></span></button></div><div class="panel-body"><div><h5>Consumo tipo farola</h5><canvas></canvas></div><div><h5>Consumo horas encendido</h5><select><option value="range1">0-7</option><option value="range2">7-8</option><option value="range3">8-10</option><option value="range4">10-12</option><option value="range5">12-14</option></select><canvas></canvas></div><div><h5>Sustitución</h5><form action="index.html" method="post"><label for="typeA">Type A</label><input type="number" id="typeA" min="0" max="20" step="2" value="10" name="amount_typeA"/><br><label for="typeB">Type B</label><input type="number" id="typeB" min="0" max="20" step="2" value="10" name="amount_typeB"/><br><label for="typeC">Type C</label><input type="number" id="typeA" min="0" max="20" step="2" value="10" name="amount_typeC"/><br></form><canvas></canvas></div></div><div class="panel-footer"><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-filter"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-globe"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-stats"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-warning-sign"></span></button></div></div>';
}


function ExamplesControl(graphsControlDiv, map){
  graphsControlDiv.style.padding = '25px';

  var controlUI = document.createElement('div');

  graphsControlDiv.appendChild(controlUI);
  controlUI.innerHTML = '<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">Examples<span class="caret"></span></button><ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li><li role="presentation" class="divider"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li></ul></div>';
}
function MenuControl(graphsControlDiv, map){
  var controlUI = document.createElement('div');
  graphsControlDiv.appendChild(controlUI);
  controlUI.innerHTML = '<button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th-large"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th-list"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-user"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-comment"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-globe"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-edit"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-info-sign"></span></button><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-leaf"></span></button> ';
}


function initialize() {
  // Create an array of styles.
  var styles = [
      {
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#5c8080" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          { "hue": "#e6ff00" }
        ]
      },{
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          { "hue": "#f6ff00" },
          { "lightness": 41 },
          { "saturation": 23 }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          { "saturation": 23 },
          { "lightness": 41 },
          { "hue": "#f6ff00" }
        ]
      },{
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill"  },{
      }
]
// Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
  var mapOptions = {
    zoom: 8,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // Create the DIV to hold the control and call the HomeControl() constructor
  // passing in this DIV.
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map);
  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

  // Create the DIV to hold the control and call the HomeControl() constructor
  // passing in this DIV.
  var filtersControlDiv = document.createElement('div');
  var filtersControl = new FiltersControl(filtersControlDiv, map);
  filtersControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(filtersControlDiv);

  // Create the DIV to hold the control and call the HomeControl() constructor
  // passing in this DIV.
  var graphsControlDiv = document.createElement('div');
  var graphsControl = new GraphsControl(graphsControlDiv, map);
  graphsControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(graphsControlDiv);

  var examplesControlDiv = document.createElement('div');
  var examplesControl = new ExamplesControl(examplesControlDiv, map);
  examplesControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(examplesControlDiv);

  var menuControlDiv = document.createElement('div');
  var menuControl = new MenuControl(menuControlDiv, map);
  menuControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(menuControlDiv);

}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
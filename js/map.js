


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
  controlDiv.id="home";
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
  console.log($('#home'));
   controlUI.innerHTML = '<div class="panel panel-default leftpanel">'+'<div class="panel-heading">Panel heading</div><div class="panel-body"><form action="index.html" method="post"><fieldset><h3>Filters</h3><label for="power">POWER</label><br><input type="range" id="power" name="filter_power"><br><label for="time">HOURS/DAY</label><br><input type="range" id="time" name="filter_time"><br><label for="age">AGE</label><br><input type="range" id="age" name="filter_age"></fieldset><fieldset><h3>Remark</h3><input type="checkbox" id="led" name="remark_led"><label for="lef">LED</label><br><input type="checkbox" id="heatmap" name="remark_heatmap"><label for="heatmap">HEATMAP</label><br><input type="checkbox" id="old" name="remark_old"><label for="old">OLD</label></fieldset></form></div></div>';
}



function initialize() {
  var mapOptions = {
    zoom: 8,
    disableDefaultUI: true,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Create the DIV to hold the control and call the HomeControl() constructor
  // passing in this DIV.
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map);
  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);




}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
// Modified from https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers

// TO MAKE THE Mapbox MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
// mapboxgl.accessToken = "<your access token here>";

// enumerate ids of the layers
var toggleableLayerIds = [
  "openstreetmap",
  "statmen-watercolor",
  "statmen-terrain",
  "statmen-toner",
  "naturalearthtiles",
  "mapbox-satellite-v9",
  "maptiler-hybrid",
  "tileservice-charts-noaa-gov"
];

var map = new mapboxgl.Map({
  container: "map",
  style:
    "https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/style.json",
  zoom: 6,
  center: [-117, 32]
});

//
var layerInitiallyOff = [
  "naturalearthtiles",
  "mapbox-satellite-v9",  // Needs an Access token in the style.json
  "maptiler-hybrid",  // Needs an Access token in the style.json
  "tileservice-charts-noaa-gov"  // Fetch API cannot load https://tileservice.charts.noaa.gov/tiles/50000_1/6/11/25.png due to access control checks.
];

map.on('load', function() {
  console.log('A load event occurred.');
  
  for (var i = 0; i < layerInitiallyOff.length; i++) {
    console.log(layerInitiallyOff[i])
    map.setLayoutProperty(layerInitiallyOff[i], "visibility", "none")
  }
  
  setupUI()
});


function setupUI () {
  // set up the corresponding toggle button for each layer
  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement("a");
    link.href = "#";
    link.className = "active";
    link.textContent = id;

    link.onclick = function (e) {
      var clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      var visibility = map.getLayoutProperty(clickedLayer, "visibility");

      // toggle layer visibility 
      //   by changing the layout object's visibility property
      if (visibility === "visible") {
        map.setLayoutProperty(clickedLayer, "visibility", "none");
        this.className = "";
      } else {
        this.className = "active";
        map.setLayoutProperty(clickedLayer, "visibility", "visible");
      }
    };

    var layers = document.getElementById("menu");
    layers.appendChild(link);
  }
}
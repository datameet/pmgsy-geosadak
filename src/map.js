var geojsontoosm = require("geojsontoosm");
var osm_geojson = require("osm-and-geojson");

mapboxgl.accessToken =
  "pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiY2l2eDhnNzNpMDAwNzJ5cGowcnpiMXJkdyJ9.NljuPglsRA3mTGf-4CLIEg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/planemad/cknj1leps0ywv17lrj8d16vnj", // style URL
  center: [76, 28], // starting position [lng, lat]
  zoom: 9, // starting zoom
  hash: true,
  projection: "globe",
});

// Add the control to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "in",
  })
);

map.on("load", function () {
  map.addSource("soi", {
    type: "raster",
    tiles: [
      "https://storage.googleapis.com/soi_data/export/tiles/{z}/{x}/{y}.webp",
    ],
    tileSize: 256,
  });

  map.addLayer(
    {
      id: "soi",
      type: "raster",
      source: "soi",
      minzoom: 13,
      maxzoom: 22,
      layout: {
        visibility: "visible",
      },
      paint: {
        "raster-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0,
          16,
          0.6
        ],
      },
    },
    "water"
  );
});

// Convert tile features as OSM XML

map.on("click", (e) => {
  if (map.getZoom() >= 10) {
    // Find all features in one source layer in a vector source
    const features = map.querySourceFeatures("composite", {
      sourceLayer: "geosadak_road_diff",
    });

    const geojson = {
      type: "FeatureCollection",
      features: features,
    };
    const osm_xml = geojsontoosm(geojson);

    function download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    // download("geosadak_diff.osm", osm_xml);

    // window.open(`http://127.0.0.1:8111/load_data?new_layer=true&layer_name=geosadak&mime_type=application/x-osm+xml&data="${enc_osm_xml}"`, '_blank');
  }
});

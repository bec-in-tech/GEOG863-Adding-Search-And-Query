// Load required modules
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/layers/FeatureLayer",
  "esri/renderers/ClassBreaksRenderer",
  "esri/symbols/PolygonSymbol3D",
  "esri/symbols/FillSymbol3DLayer",
  "esri/widgets/Legend",
  "esri/widgets/Search",
], (
  Map,
  SceneView,
  Camera,
  FeatureLayer,
  ClassBreaksRenderer,
  PolygonSymbol3D,
  FillSymbol3DLayer,
  Legend,
  Search
) => {
  // Create a new Map instance
  const map = new Map({
    basemap: "dark-gray",
    ground: "world-elevation",
  });

  // Create a new SceneView instance
  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: new Camera({
      position: [-105, 16, 5000000],
      heading: 1.8,
      tilt: 22,
    }),
  });

  // Define a renderer for the feature layer using Class Breaks
  const fireRenderer = new ClassBreaksRenderer({
    field: "gisacres",
    legendOptions: {
      title: "Acres Burned",
    },
  });

  // Define a function to add a class break to the fire renderer
  const addClass = function (min, max, clr, lbl, renderer) {
    renderer.addClassBreakInfo({
      minValue: min,
      maxValue: max,
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: { color: clr },
            outline: {
              color: "black",
              size: 0.75,
            },
          }),
        ],
      }),
      label: lbl,
    });
  };

  // Add class breaks to the fire renderer for different ranges of fire size in acres
  addClass(0, 20000, "#ffffb2", "<20,000", fireRenderer);
  addClass(20000, 70000, "#fecc5c", "20,000 - 70,000", fireRenderer);
  addClass(70000, 180000, "#fd8d3c", "70,000 - 180,000", fireRenderer);
  addClass(180000, 360000, "#f03b20", "180,000 - 360,000", fireRenderer);
  addClass(360000, 670000, "#bd0026", "360,000 - 670,000", fireRenderer);

  // Define a popup template for the feature layer
  const template = {
    title: "Wildfire Incident Name: {incidentname}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "state",
            label: "State",
          },
          {
            fieldName: "fireyear",
            label: "Fire Year",
          },
          {
            fieldName: "gisacres",
            label: "Acres Burned",
          },
          {
            fieldName: "agency",
            label: "Land Agency",
          },
        ],
      },
    ],
  };

  // Create a search prompt for a fire year
  const fireyear = prompt(
    "Welcome to the USA Wildfire Map! Here, you can explore the history of wildfires across the United States. To get started, please enter a fire year between 2000 and 2018 that you would like to search for."
  );

  // Create the whereClause to show only fireYear features
  const whereClause = "fireyear = " + fireyear;

  /*Create a new feature layer with the provided URL,  renderer, popup template, 
  and query*/
  const fireLyr = new FeatureLayer({
    portalItem: {
      id: "ef25d7e8c9f3499ba9e3d8e09606e488",
    },
    renderer: fireRenderer,
    popupTemplate: template,
    definitionExpression: whereClause,
  });

  // Add fire layer to the map display
  map.add(fireLyr);

  // Creata a new legend widget to display map legend
  const legend = new Legend({
    view: view,
    layerInfos: [
      {
        layer: fireLyr,
        title: "Wildfires in the USA (2000 to 2018)",
      },
    ],
  });

  // Add the legend widget to the bottom-left corner of the map view
  view.ui.add(legend, "bottom-left");

  // Create a new search widget
  const searchWidget = new Search({
    view: view,
    allPlaceholder: "Search for a wildfire name",
    sources: [
      {
        layer: fireLyr,
        searchFields: ["incidentname"],
        exactMatch: false,
        outFields: ["incidentname"],
        name: "Wildfires",
        placeholder: "example: Fork",
        zoomScale: 100000,
      },
    ],
    includeDefaultSources: false,
  });

  // Add the search widget to the top-right corner of the map view
  view.ui.add(searchWidget, {
    position: "top-right",
  });
});

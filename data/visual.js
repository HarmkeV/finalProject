/*
Harmke Vliek
10989137
Programmeerproject
*/

window.onload = function() {
  // load data from data.json
  d3.json('zetelverdeling.json')
    .then(function(data) {
       var municipality = Object.keys(data);
       var parties = Object.values(data);
       var listMun = [];
       var listTotalParties = [];

  // select data to put in map
  for (var index = 0; index < parties.length; index++) {
    listMun.push(parties[index])
    for (var j = 0; j < parties[index].length; j++) {
        listTotalParties.push(parties[index][j])
      }
    }
    // console.log(listMun)
    // console.log(listTotalParties
    // create map showing biggest political party
    createMap(listTotalParties, listMun, parties, data)
  });
};

function createMap(listTotalParties, listMun, parties, data) {
  // set variables for svg
  var width = 400
  var height = 600

  // create svg
  var svg = d3.select("#map")
              .append("svg")
              .attr('width', width)
              .attr('height', height);

  // set variables map
  var projection = d3.geoMercator();
  var path = d3.geoPath()
               .projection(projection);
  var g = svg.append('g');
  var mapLayer = g.append('g')
                  .classed('map-layer', true);

  Promise.resolve(d3.json("geojson_municipalities.json"))
         .then(function(mapData) {
           console.log(mapData.features)
    // Draw each province as a path
      mapLayer.selectAll('path')
        .data(mapData.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('vector-effect', 'non-scaling-stroke')
        .style('fill', "blue")
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)
        .on('click', clicked);
  })
};

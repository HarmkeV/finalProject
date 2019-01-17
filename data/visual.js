/*
Harmke Vliek
10989137
Programmeerproject
*/

window.onload = function() {
  // load data from zetelverdeling.json
  d3.json('zetelverdeling.json')
    .then(function(dataPol) {
       var municipality = Object.keys(dataPol);
       var parties = Object.values(dataPol);

  // load data from religie.json
  d3.json('religie.json')
    .then(function(dataRel) {
       var municipalityRel = Object.keys(dataRel);
       var church = Object.values(dataRel);

  // create map showing biggest political party
  createMap(dataRel, municipalityRel, church, dataPol)

  // create pie chart concerning seat distribution
  createPiePol(dataPol, municipality, parties, dataRel)

  // create piechart concerning religion
  createPieRel(dataRel, municipalityRel, church, dataPol)

  // create scatterplot regarding distibution religious beliefs
  createScatter(dataPol, dataRel, municipality, parties, municipalityRel, church)
  });
  });
};

function createMap(data, municipality, church, dataPol) {
  /* Shows map of the Netherlands containing data regarding secularization */

  // set variables for svg
  var width = 400
  var height = 700

  // create svg
  var svg = d3.select("#map")
              .append("svg")
              .attr('width', width)
              .attr('height', height);

  // select only "Geen kerkelijke gezindte"
  var listAtheist = [];
  for (index in church) {
    listAtheist.push(church[index]["Geen kerkelijke gezindte"])
  };

  // set list to lowercase charachters
  var list_municipalities_low = [];
  for (i in municipality) {
    list_municipalities_low.push(municipality[i].toLowerCase())
  };

  // set strings in listAtheist to numbers
  var list_atheist_float = [];
  for (i in listAtheist) {
    list_atheist_float.push(parseFloat(listAtheist[i]))
  }

  // create a dict with the name of the municipality and the "geen kerkelijke gezindte"
  dictAtheist = {};

  for (i in list_municipalities_low) {
    dictAtheist[list_municipalities_low[i]] = list_atheist_float[i]
  }

  // show chart
  var dataSecularization = [
      ['nl-fr-gm0088', NaN],
      ['nl-3557-gm0448', 61.2],
      ['nl-gr-gm1651', 59.3],
      ['nl-ze-gm1676', 49.9],
      ['nl-fr-gm1900', 47.9],
      ['nl-3560-gm1924', 43.1],
      ['nl-gr-gm0007', 69.2],
      ['nl-fl-gm0050', 58.0],
      ['nl-fl-gm0034', 59.9],
      ['nl-ov-gm0193', 51.9],
      ['nl-3559-gm0307', 53.7],
      ['nl-3559-gm0308', 54.5],
      ['nl-3557-gm1911', 63.0],
      ['nl-3557-gm0398', 57.8],
      ['nl-ov-gm0153', 56.8],
      ['nl-3557-gm0394', 58.4],
      ['nl-3557-gm0358', 57,8],
      ['nl-3560-gm0629', 50.2],
      ['nl-li-gm1640', 17.7],
      ['nl-3559-gm0632', 42.7],
      ['nl-3560-gm1901', 39.0],
      ['nl-3560-gm0599', 50.0],
      ['nl-3560-gm0612', 0],
      ['nl-3560-gm0614', 67.2],
      ['nl-ge-gm1586', 31.6],
      ['nl-ge-gm0197', 32.8],
      ['nl-ge-gm1859', 46.1],
      ['nl-ov-gm1708', 53.1],
      ['nl-dr-gm0119', 59.4],
      ['nl-fr-gm0079', 38.2],
      ['nl-fr-gm0058', 29.4],
      ['nl-fr-gm0072', 65.8],
      ['nl-fr-gm0093', 0],
      ['nl-ov-gm0166', 30.8],
      ['nl-ge-gm0244', 34.4],
      ['nl-ge-gm0269', 23.4],
      ['nl-fl-gm0171', 47.2],
      ['nl-fl-gm0303', 51.0],
      ['nl-ge-gm0302', 23.0],
      ['nl-3557-gm0363', 62.2],
      ['nl-3557-gm0392', 63.3],
      ['nl-3557-gm0479', 63.1],
      ['nl-3557-gm0431', 77.7],
      ['nl-3557-gm0437', 57.3],
      ['nl-3559-gm0736', 49.2],
      ['nl-3557-gm0417', 64.9],
      ['nl-3557-gm0376', 52.5],
      ['nl-3559-gm0317', 56.7],
      ['nl-3557-gm0420', 51.1],
      ['nl-3557-gm0405', 61.9],
      ['nl-3557-gm1598', 46.9],
      ['nl-3557-gm0424', 63.2],
      ['nl-3557-gm0453', 66.6],
      ['nl-3557-gm0375', 62.3],
      ['nl-ze-gm0664', 48.6],
      ['nl-ze-gm0654', 33.7],
      ['nl-ze-gm1695', 49.1],
      ['nl-ze-gm0687', 50.6],
      ['nl-ze-gm0677', 36.3],
      ['nl-3558-gm0748', 34.1],
      ['nl-ze-gm0716', 34.4],
      ['nl-ze-gm0717', 38.9],
      ['nl-3558-gm1723', 19.9],
      ['nl-3558-gm0744', 31.2],
      ['nl-fl-gm0995', 63.4],
      ['nl-3557-gm0388', 60.9],
      ['nl-gr-gm0005', 48.2],
      ['nl-gr-gm1663', 50.2],
      ['nl-gr-gm0053', 55.6],
      ['nl-gr-gm0056', 35.3],
      ['nl-3558-gm1719', 31.4],
      ['nl-3558-gm1709', 36.6],
      ['nl-3558-gm0758', 45.3],
      ['nl-3558-gm1655', 23.5],
      ['nl-gr-gm1895', 71.7],
      ['nl-gr-gm1987', 84.2],
      ['nl-gr-gm0040', 66.3],
      ['nl-fr-gm0140', 60.4],
      ['nl-fr-gm0055', 68.8],
      ['nl-fr-gm0051', 46.1],
      ['nl-fr-gm0653', 46.1],
      ['nl-3558-gm0828', 31.0],
      ['nl-3558-gm1671', 31.0],
      ['nl-gr-gm0010', 67.5],
      ['nl-gr-gm0024', 55.6],
      ['nl-gr-gm0003', 55.2],
      ['nl-ge-gm0267', 32.8],
      ['nl-fr-gm1891', 39.4],
      ['nl-fr-gm1722', 41.4],
      ['nl-fr-gm0096', 0],
      ['nl-ov-gm1896', 30.9],
      ['nl-ge-gm0232', 45.7],
      ['nl-fr-gm0082', 46.1],
      ['nl-ge-gm0230', 25.9],
      ['nl-ge-gm0243', 40.9],
      ['nl-ge-gm0233', 34.1],
      ['nl-ge-gm0203', 26.4],
      ['nl-ge-gm0273', 27.2],
      ['nl-3559-gm0313', 15.3],
      ['nl-3557-gm0451', 65.2],
      ['nl-3557-gm0362', 56.2],
      ['nl-3557-gm0415', 76.8],
      ['nl-3557-gm0384', 65.2],
      ['nl-3557-gm0432', 34.3],
      ['nl-3557-gm0532', 58.8],
      ['nl-3557-gm0457', 64.9],
      ['nl-3557-gm0425', 63.2],
      ['nl-3557-gm0381', 63.2],
      ['nl-3557-gm0402', 62.2],
      ['nl-3557-gm0406', 58.5],
      ['nl-3557-gm0377', 57.9],
      ['nl-3560-gm0588', 46.3],
      ['nl-3560-gm0584', 53.3],
      ['nl-ze-gm0718', 58.3],
      ['nl-ze-gm0678', 38.9],
      ['nl-ze-gm0715', 49.0],
      ['nl-ze-gm1714', 52.7],
      ['nl-3558-gm0851', 36.5],
      ['nl-3558-gm1674', 31.7],
      ['nl-3560-gm1783', 35.1],
      ['nl-3560-gm0518', 49.6],
      ['nl-3560-gm0556', 44.0],
      ['nl-3560-gm1842', 32.0],
      ['nl-gr-gm0765', 79.7],
      ['nl-fr-gm0070', 59.2],
      ['nl-3557-gm0373', 63.6],
      ['nl-3557-gm0441', 59.0],
      ['nl-gr-gm0009', 63.0],
      ['nl-gr-gm0014', 71.5],
      ['nl-fr-gm0059', 39.3],
      ['nl-fr-gm1908', 52.0],
      ['nl-fr-gm0063', 55.7],
      ['nl-gr-gm0022', 59.5],
      ['nl-fr-gm0086', 61.3],
      ['nl-gr-gm0015', 34.3],
      ['nl-fr-gm0090', 55.0],
      ['nl-gr-gm0025', 59.7],
      ['nl-ov-gm0148', 32.6],
      ['nl-ov-gm0160', 30.9],
      ['nl-ov-gm0158', 33.0],
      ['nl-ov-gm0164', 54.7],
      ['nl-ov-gm0173', 33.1],
      ['nl-ov-gm0163', 27.1],
      ['nl-ov-gm0175', 31.5],
      ['nl-ov-gm0177', 24.6],
      ['nl-fl-gm0184', 2.2],
      ['nl-ov-gm0180', 19.4],
      ['nl-ge-gm0200', 53.2],
      ['nl-ge-gm0202', 59.4],
      ['nl-ge-gm1705', 37.7],
      ['nl-ge-gm0241', 30.5],
      ['nl-ge-gm0252', 38.4],
      ['nl-ge-gm0265', 29.6],
      ['nl-ge-gm0213', 57.2],
      ['nl-ge-gm0277', 0],
      ['nl-3559-gm0352', 51.2],
      ['nl-ge-gm0216', 46.2],
      ['nl-ge-gm0236', 38.5],
      ['nl-ge-gm0281', 46.7],
      ['nl-ge-gm0275', 56.8],
      ['nl-ge-gm0293', 52.7],
      ['nl-ge-gm0225', 34.5],
      ['nl-ge-gm0296', 37.3],
      ['nl-ge-gm0299', 46.8],
      ['nl-ge-gm0222', 51.4],
      ['nl-3559-gm0339', 18.2],
      ['nl-ge-gm0279', 20.7],
      ['nl-ge-gm0228', 40.1],
      ['nl-3559-gm0340', 49.6],
      ['nl-ge-gm0289', 62.5],
      ['nl-3559-gm0344', 61.0],
      ['nl-3559-gm0312', 40.5],
      ['nl-3559-gm0321', 50.8],
      ['nl-3559-gm0335', 38.6],
      ['nl-3559-gm0353', 54.1],
      ['nl-3559-gm0351', 32.7],
      ['nl-3559-gm0355', 54.5],
      ['nl-3557-gm0393', 60.3],
      ['nl-3557-gm0365', 62.0],
      ['nl-3557-gm0370', 73.5],
      ['nl-3560-gm0534', 44.8],
      ['nl-3557-gm0383', 59.8],
      ['nl-3557-gm0361', 62.0],
      ['nl-3557-gm0416', 56.1],
      ['nl-3557-gm0439', 71.3],
      ['nl-3557-gm0400', 64.6],
      ['nl-3557-gm0385', 36.3],
      ['nl-3557-gm0478', 36.3],
      ['nl-3557-gm0396', 55.6],
      ['nl-3560-gm0484', 48.2],
      ['nl-3560-gm0499', 48.2],
      ['nl-ge-gm0297', 32.1],
      ['nl-3560-gm0512', 49.2],
      ['nl-3558-gm0797', 35.3],
      ['nl-3558-gm0865', 39.3],
      ['nl-3560-gm0523', 31.1],
      ['nl-3558-gm0870', 30.7],
      ['nl-3560-gm0482', 48.2],
      ['nl-3560-gm0531', 41.5],
      ['nl-3560-gm0537', 28.1],
      ['nl-3560-gm0545', 36.1],
      ['nl-3560-gm0546', 62.8],
      ['nl-3560-gm0553', 39.2],
      ['nl-3560-gm0569', 34.4],
      ['nl-3557-gm0473', 65.5],
      ['nl-3560-gm0576', 38.9],
      ['nl-3560-gm0489', 53.0],
      ['nl-3560-gm0585', 54.7],
      ['nl-3560-gm0610', 38.0],
      ['nl-3560-gm0505', 56.8],
      ['nl-3560-gm0617', 56.3],
      ['nl-3560-gm0590', 56.4],
      ['nl-3560-gm0503', 61.7],
      ['nl-3560-gm1892', 52.3],
      ['nl-3560-gm0644', 54.0],
      ['nl-3560-gm0623', 54.0],
      ['nl-3560-gm0491', 54.0],
      ['nl-3560-gm0611', 49.5],
      ['nl-3560-gm0613', 55.6],
      ['nl-3560-gm0608', 54.0],
      ['nl-3559-gm0331', 31.9],
      ['nl-3560-gm0620', 47.4],
      ['nl-3559-gm0356', 49.3],
      ['nl-3560-gm0622', 55.1],
      ['nl-3560-gm0626', 58.6],
      ['nl-3560-gm0547', 50.4],
      ['nl-3560-gm0638', 35.5],
      ['nl-3560-gm0642', 53.2],
      ['nl-3560-gm0597', 54.5],
      ['nl-3560-gm0542', 46.1],
      ['nl-3560-gm0643', 54.0],
      ['nl-3560-gm0502', 60.2],
      ['nl-3560-gm0513', 52.4],
      ['nl-ge-gm0263', 35.3],
      ['nl-ge-gm0668', 26.8],
      ['nl-3560-gm0689', 33.5],
      ['nl-ge-gm0733', 47.3],
      ['nl-ge-gm0304', 36.0],
      ['nl-3559-gm1904', 59.8],
      ['nl-3558-gm0753', 32.6],
      ['nl-3558-gm0772', 46.2],
      ['nl-3558-gm0848', 37.1],
      ['nl-3558-gm0855', 40.4],
      ['nl-3558-gm0766', 28.7],
      ['nl-3558-gm0784', 30.8],
      ['nl-3558-gm0779', 40.5],
      ['nl-3558-gm0785', 35.5],
      ['nl-3558-gm0796', 42.5],
      ['nl-3558-gm0798', 27.5],
      ['nl-3558-gm1667', 29.7],
      ['nl-3558-gm0823', 20.5],
      ['nl-3558-gm1728', 26.4],
      ['nl-3558-gm1659', 23.6],
      ['nl-3558-gm0820', 44.4],
      ['nl-3558-gm0846', 25.1],
      ['nl-3558-gm0845', 29.0],
      ['nl-3558-gm0794', 30.6],
      ['nl-3558-gm1652', 25.5],
      ['nl-3558-gm0847', 15.6],
      ['nl-3557-gm0852', 56.9],
      ['nl-3558-gm0815', 29.6],
      ['nl-3558-gm1685', 28.5],
      ['nl-3558-gm0786', 33.8],
      ['nl-3558-gm0856', 36.4],
      ['nl-3558-gm0858', 32.2],
      ['nl-3558-gm0757', 31.9],
      ['nl-3558-gm1724', 26.9],
      ['nl-3558-gm0861', 40.8],
      ['nl-3558-gm0866', 49.3],
      ['nl-3558-gm0867', 32.9],
      ['nl-3558-gm0874', 36.1],
      ['nl-3557-gm0880', 74.1],
      ['nl-li-gm0889', 24.6],
      ['nl-li-gm0899', 24.7],
      ['nl-li-gm0881', 20.1],
      ['nl-li-gm0882', 17.7],
      ['nl-li-gm0917', 27.6],
      ['nl-li-gm0888', 18.4],
      ['nl-li-gm0971', 20.7],
      ['nl-li-gm1883', 26.5],
      ['nl-li-gm0938', 23.2],
      ['nl-li-gm0962', 24.8],
      ['nl-li-gm0935', 31.7],
      ['nl-li-gm0994', 22.7],
      ['nl-li-gm0986', 17.1],
      ['nl-3560-gm1525', 42.9],
      ['nl-3559-gm0345', 33.4],
      ['nl-3559-gm1581', 53.8],
      ['nl-3557-gm0458', 62.0],
      ['nl-li-gm0984', 28.4],
      ['nl-3558-gm1658', 35.1],
      ['nl-li-gm1669', 19.5],
      ['nl-li-gm1641', 20.8],
      ['nl-li-gm0957', 29.3],
      ['nl-3560-gm0627', 43.5],
      ['nl-3560-gm1672', 48.2],
      ['nl-3560-gm1621', 52.2],
      ['nl-3560-gm0637', 54.7],
      ['nl-3558-gm0873', 31.8],
      ['nl-gr-gm0018', 67.1],
      ['nl-li-gm0907', 32.7],
      ['nl-3558-gm0756', 27.7],
      ['nl-3558-gm1684', 33.2],
      ['nl-3557-gm1696', 58.5],
      ['nl-3559-gm0310', 55.8],
      ['nl-dr-gm1699', 72.9],
      ['nl-ov-gm1700', 29.5],
      ['nl-dr-gm0118', 45.6],
      ['nl-dr-gm1701', 62.0],
      ['nl-dr-gm1731', 59.6],
      ['nl-3558-gm1702', 28.0],
      ['nl-3558-gm0755', 24.4],
      ['nl-ge-gm0196', 34.1],
      ['nl-ge-gm0226', 49.6],
      ['nl-3558-gm1721', 21.4],
      ['nl-li-gm0965', 8.5],
      ['nl-li-gm1729', 10.2],
      ['nl-gr-gm1730', 70.4],
      ['nl-ge-gm1740', 30.6],
      ['nl-ge-gm0262', 51.9],
      ['nl-ov-gm1742', 18.7],
      ['nl-ov-gm0150', 60.1],
      ['nl-3558-gm1771', 36.9],
      ['nl-ge-gm0285', 41.8],
      ['nl-ov-gm1773', 44.3],
      ['nl-ge-gm1876', 49.8],
      ['nl-3560-gm1884', 34.1],
      ['nl-3558-gm0743', 24.6],
      ['nl-li-gm1894', 18.5],
      ['nl-3558-gm0762', 25.9],
      ['nl-3560-gm1916', 56.0],
      ['nl-3560-gm0568', 63.9],
      ['nl-3560-gm1926', 51.9],
      ['nl-3560-gm1927', 36.6],
      ['nl-3557-gm0498', 52.1],
      ['nl-3560-gm0530', 72.2],
      ['nl-3560-gm0501', 71.9],
      ['nl-ze-gm0703', 25.9],
      ['nl-3558-gm0840', 18.8],
      ['nl-3558-gm0879', 23.8],
      ['nl-li-gm0928', 15.4],
      ['nl-li-gm1711', 14.8],
      ['nl-ov-gm1774', 18.2],
      ['nl-gr-gm0037', 52.0],
      ['nl-dr-gm1680', 67.5],
      ['nl-gr-gm0047', 68.4],
      ['nl-fr-gm0080', 68.8],
      ['nl-fr-gm0081', 58.5],
      ['nl-fr-gm0098', 59.7],
      ['nl-dr-gm0109', 52.5],
      ['nl-ov-gm0147', 45.5],
      ['nl-ov-gm0141', 48.3],
      ['nl-ov-gm0189', 24.7],
      ['nl-ge-gm0214', 50.3],
      ['nl-ge-gm0209', 32.2],
      ['nl-ge-gm0246', 41.4],
      ['nl-ge-gm0221', 59.5],
      ['nl-ge-gm0268', 54.2],
      ['nl-ge-gm0282', 30.5],
      ['nl-ge-gm1955', 27.2],
      ['nl-ge-gm0301', 61.8],
      ['nl-3559-gm0327', 50.3],
      ['nl-3559-gm0342', 57.0],
      ['nl-3557-gm0399', 59.7],
      ['nl-3557-gm0397', 59.5],
      ['nl-3560-gm0575', 48.0],
      ['nl-3560-gm0579', 54.8],
      ['nl-3559-gm0589', 31.7],
      ['nl-3560-gm0603', 52.8],
      ['nl-3560-gm0707', 29.2],
      ['nl-fr-gm0737', 47.9],
      ['nl-3558-gm0738', 18.1],
      ['nl-3558-gm0770', 24.5],
      ['nl-3558-gm0809', 32.7],
      ['nl-3558-gm0788', 26.6],
      ['nl-3558-gm0824', 36.9],
      ['nl-3558-gm0826', 37.0],
      ['nl-3558-gm0777', 38.3],
      ['nl-3558-gm0860', 30.4],
      ['nl-li-gm0944', 37.7],
      ['nl-li-gm0946', 15.2],
      ['nl-li-gm1507', 27.4],
      ['nl-li-gm0893', 25.2],
      ['nl-3558-gm1706', 19.3],
      ['nl-gr-gm0048', 57.2],
      ['nl-dr-gm1681', 67.6],
      ['nl-dr-gm1690', 55.1],
      ['nl-ge-gm1734', 41.0],
      ['nl-li-gm0983', 28.0],
      ['nl-ge-gm1509', 35.0],
      ['nl-ov-gm0183', 16.4],
      ['nl-ge-gm0294', 46.7],
      ['nl-li-gm0988', 25.4],
      ['nl-li-gm1903', 19.8],
      ['nl-fr-gm0085', 62.8],
      ['nl-dr-gm0106', 60.5],
      ['nl-ov-gm1735', 38.3],
      ['nl-3557-gm0450', 61.7],
      ['nl-gr-gm0017', 63.0],
      ['nl-3560-gm0606', 54.8],
      ['nl-li-gm0951', 14.7],
      ['nl-fr-gm0060', 0],
      ['nl-ov-gm0168', 33.8],
      ['nl-dr-gm0114', 54.3],
      ['nl-li-gm0981', 20.2],
      ['nl-fr-gm0074', 66.8],
      ['nl-ge-gm0274', 53.6],
      ['nl-3558-gm0844', 26.5],
      ['undefined', 99]
  ];

  // Create chart regarding
  var map = Highcharts.mapChart('map', {
              chart: {
                  map: 'countries/nl/nl-all-all',
                  backgroundColor: '#D3D3D3'
              },
              title: {
                  text: 'Secularization in the Netherlands'
              },
              subtitle: {
                  text: 'distribution of people without any church affiliation'
              },
              mapNavigation: {
                  enabled: true,
                  buttonOptions: {
                      verticalAlign: 'bottom'
                  }
              },
              colorAxis: {
                  min: 0,
                  max: 100
              },
              series: [{
                  data: dataSecularization,
                  name: 'percentage of people without church affiliation',
                  states: {
                      hover: {
                          color: '#BADA55'
                      }
                  },
                  events: {
                    click: function (e) {
                      var munName = e.point.name
                      updatePieRel(data, munName)
                      updatePiePol(dataPol, munName)
                    },
                  },
              }],
            })
}

function createPiePol(dataPol, municipality, parties, dataRel) {
  /* Shows pie chart of data of Nederland totaal
   *  chart source: https://codepen.io/alexmorgan/pen/XXzpZP.
   *  legend is seperated into two parts because I wanted to sort them into rows
   *  but still use the d3.legend.
  */

  // set variables for svg
  var width = 400;
  var height = 200;

  // select set to be seen on first entry
  var beginSet = "Nederland totaal";
  var selection = dataPol[beginSet];
  var parties = Object.keys(selection);

  // create tooltip
  var toolTip = d3.select("body")
                  .append("div")
                  .attr("class", "tooltip")
                  .style("opacity", "0")
                  .style("display", "none");

  // create svg
  var svg = d3.select("#piechart")
              .append("svg")
              .attr('width', width)
              .attr('height', height)
              .style("background", "#D3D3D3")

  group = svg.append("g")
             .attr("transform", "translate(100,120)")
             .attr("class", "group");

   // insert a title
   svg.append("text")
      .attr("transform", "translate(60,25)")
      .attr("class", "pieTitle")
      .text(function () {
        return "Distribution of seats in " + beginSet
      })
      .style("font-size", "18px")

  drawPiePol(svg, group, dataRel, dataPol, selection, parties, toolTip)
}

function drawPiePol(svg, group, dataRel, dataPol, selection, parties, toolTip) {
  /* Draws pie chart containing information pertaining distibution of seats in council */

  var radius = 80;
  var color = ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'];

   // create arc
   arc = d3.arc()
           .innerRadius(5)
           .outerRadius(radius)

   pie = d3.pie()
           .padAngle(.05)
           .value(function(d) { return selection[d] });

   // bind data and append a group for each segment
   var arcs = group.selectAll("arc")
                   .data(pie(parties))
                   .enter()
                   .append("g")
                   .attr("class","arc")
                   .on("mouseover", function(d) {
                     d3.select(this)
                       .style("cursor", "pointer")
                       .style("stroke-width", "3px")
                          toolTip
                           .transition()
                           .duration(300)
                           .style("opacity", "99")
                           .style("display", "block")
                   })

                   // keep the tooltip above the mouse when mouse is on bar
                   .on("mousemove", function(d) {
                      d3.select(this)
                      toolTip
                        .html("<div id='thumbnail'><span> seats:" + d.value + "</div>")
                        .style("left", (d3.event.pageX - 60) + "px")
                        .style("top", (d3.event.pageY - 40) + "px")
                   })

                   // remove tooltip and restore colour
                   .on("mouseout", function(d, i) {
                      d3.select(this)
                        .style("cursor", "normal")
                        .style("stroke-width", "1px")
                      toolTip
                          .transition()
                          .duration(300)
                          .style("opacity", "100")
                          .style("display", "none")
                   })
                   // update scatterplot
                   .on("click", function(d) {
                     d3.select(".select2").property("value", d.data)
                     onchange(dataRel, dataPol)
                   })

   // draw arcs
   arcs.append("path")
         .attr("d", arc)
         .attr("fill", function(d, i) {return color[i]})
         .attr("stroke", "black");

  // create legend (1/2)
    var ord = d3.scaleOrdinal()
                .domain(parties.slice(0,5))
                .range(color.slice(0,5));

    svg.append("g")
       .attr("class", "legendOrdinal")
       .attr("transform", "translate(200,65)");

    var legOrd = d3.legendColor()
                   .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
                   .shapePadding(10)
                   .scale(ord);

    // draw legend
    svg.select(".legendOrdinal")
        .call(legOrd)


    // create legend (2/2)
    var ord = d3.scaleOrdinal()
                .domain(parties.slice(5,11))
                .range(color.slice(5,11));

    svg.append("g")
       .attr("class", "legendOrdinal2")
       .attr("transform", "translate(300,65)");

    var legOrd = d3.legendColor()
                   .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
                   .shapePadding(10)
                   .scale(ord);

    // draw legend
    svg.select(".legendOrdinal2")
        .call(legOrd)

};

function updatePiePol(dataPol, munName) {
  /* Updates pie chart containing information pertaining distibution of seats
   *in council upon clicking on the map
  */

  // update title
  d3.select(".pieTitle")
     .text(function () {
       return "Distribution of seats in "  + munName
     })
     .style("font-size", "18px")

  var selection = dataPol[munName];
  var parties = Object.keys(selection);

  pie = d3.pie()
          .padAngle(.05)
          .value(function(d) {
            return selection[d]
          });

  // rescale segments
  group.selectAll("path")
       .data(pie(parties))
       .transition()
       .attr("d", arc)

   // update the numberd bound to the arcs
   group.selectAll(".arc")
        .data(pie(parties))
}

function createPieRel(dataRel, municipalityRel, church, dataPol) {
  /* Shows pie chart of data of Nederland totaal regarding religion
   *  chart source: https://codepen.io/alexmorgan/pen/XXzpZP.
   *  legend is seperated into two parts because I wanted to sort them into rows
   *  but still use the d3.legend.
  */

   // set variables for svg
   var width = 600;
   var height = 200;

   // select set to be seen on first entry
   var beginSet = "Nederland totaal";
   var selection = dataRel[beginSet];
   var religion = Object.keys(selection);

   // create tooltip
   var toolTip = d3.select("body")
                   .append("div")
                   .attr("class", "tooltipsecond")
                   .style("opacity", "0")
                   .style("display", "none");

   // create svg
   var svg = d3.select("#scatter")
               .append("svg")
               .attr('width', width)
               .attr('height', height)

   group = svg.append("g")
              .attr("transform", "translate(100,120)")
              .attr("class", "group");

   // insert a title
   svg.append("text")
      .attr("transform", "translate(60,25)")
      .attr("class", "pieTitle1")
      .text(function () {
        return "Religious affiliation in " + beginSet
      })
      .style("font-size", "18px")

      drawPieRel(svg, group, dataRel, dataPol, selection, religion, toolTip)
}

function drawPieRel (svg, group, dataRel, dataPol, selection, religion, toolTip) {
  /* Draws pie chart containing information pertaining distibution of religion */

    // set variables
    var radius = 80;
    var color = ['#b35806','#e08214','#fdb863','#fee0b6','#d8daeb','#b2abd2','#8073ac','#542788'];

    // create arc
    arc = d3.arc()
            .innerRadius(5)
            .outerRadius(radius)

    pie = d3.pie()
            .padAngle(.05)
            .value(function(d) { return selection[d] });

    // bind data and append a group for each segment
    var arcs = group.selectAll("arc")
                    .data(pie(religion))
                    .enter()
                    .append("g")
                    .attr("class","arc")
                    .on("mouseover", function(d) {
                      d3.select(this)
                        .style("cursor", "pointer")
                        .style("stroke-width", "3px")
                           toolTip
                            .transition()
                            .duration(300)
                            .style("opacity", "99")
                            .style("display", "block")
                    })

                    // keep the tooltip above the mouse when mouse is on bar
                    .on("mousemove", function(d) {
                       d3.select(this)
                       toolTip
                         .html("<div id='thumbnail'><span> percentage:" + d.value + "</div>")
                         .style("left", (d3.event.pageX - 50) + "px")
                         .style("top", (d3.event.pageY - 40) + "px")
                    })

                    // remove tooltip and restore colour
                    .on("mouseout", function(d, i) {
                       d3.select(this)
                         .style("cursor", "normal")
                         .style("stroke-width", "1px")
                       toolTip
                           .transition()
                           .duration(300)
                           .style("opacity", "100")
                           .style("display", "none")
                    })
                    // update scatterplot
                    .on("click", function(d) {
                      d3.select(".select").property("value", d.data)
                      onchange(dataRel, dataPol)
                    })

    // draw arcs
    arcs.append("path")
          .attr("d", arc)
          .attr("fill", function(d, i) {return color[i]})
          .attr("stroke", "black");

    // create legend (1/2)
      var ord = d3.scaleOrdinal()
                  .domain(religion.slice(0,4))
                  .range(color.slice(0,4));

      svg.append("g")
         .attr("class", "legendOrdinal3")
         .attr("transform", "translate(200,80)");

      var legOrd = d3.legendColor()
                     .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
                     .shapePadding(10)
                     .scale(ord);

      // draw legend
      svg.select(".legendOrdinal3")
          .call(legOrd)


      // create legend (2/2)
      var ord = d3.scaleOrdinal()
                  .domain(religion.slice(4,9))
                  .range(color.slice(4,9));

      svg.append("g")
         .attr("class", "legendOrdinal4")
         .attr("transform", "translate(410,80)");

      var legOrd = d3.legendColor()
                     .shape("path", d3.symbol().type(d3.symbolCircle).size(120)())
                     .shapePadding(10)
                     .scale(ord);

      // draw legend
      svg.select(".legendOrdinal4")
          .call(legOrd)
};

function updatePieRel(dataRel, munName) {
  /* Updates pie chart containing information pertaining distibution of religion
   * upon clicking on the map
  */

  // update title
  d3.select(".pieTitle1")
     .text(function () {
       return "Religious affiliation in " + munName
     })
     .style("font-size", "18px")

  var selection = dataRel[munName];
  var religion = Object.keys(selection);

  pie = d3.pie()
          .padAngle(.05)
          .value(function(d) { return selection[d] });

  // rescale segments
  group.selectAll("path")
       .data(pie(religion))
       .transition()
       .attr("d", arc)

   // update the numberd bound to the arcs
   group.selectAll(".arc")
        .data(pie(religion))
}

function createScatter(dataPol, dataRel, municipalityPol, parties, municipalityRel, church) {
  /* Creates scatterplot showing all municipalities grouped based on the amount
   * seats a party occupies and the percentage of people affliated to a religious
   * group
 */

  // set variables for svg
  var width = 1200;
  var height = 300;

  // create svg
  svg = d3.select("#scatterplot")
              .append("svg")
              .attr('width', width)
              .attr('height', height)

  // create title
  svg.append("text")
     .attr("x", (width / 2))
     .attr("y", 15)
     .attr("text-anchor", "middle")
     .style("font-size", "18px")
     .style("text-decoration", "bold")
     .text("Scatterplot regarding political preference and religious affliation");

  // create dropdown menu (1/2)
  var religion = ["Geen kerkelijke gezindte", "Rooms-katholiek", "Protestants", "Islam", "Joods", "Hindoe", "Boeddhist", "anders"];

  var select = d3.select('#scatterplot')
                 .append('select')
                 .attr('class','select')
                 .on('change',onchange)

  var options = select
                .selectAll('option')
                .data(religion).enter()
                .append('option')
                .text(function (d) {
                  return d;
                });

  // create dropdown menu (2/2)
  var polParty = ["CDA", "VVD", "GL", "CU", "SGP", "PVDA", "SP", "D66", "Lokaal", "Overig"];

  var select = d3.select('#scatterplot')
                 .append('select')
                 .attr('class','select2')
                 .on('change',onchange)

  var options = select
                .selectAll('option')
                .data(polParty).enter()
                .append('option')
                .text(function (d) {
                  return d;
                });

  selectValueRel = d3.select('.select')
                     .property('value')
  selectValuePol = d3.select('.select2')
                     .property('value')

  // update plot
  onchange(dataRel, dataPol, selectValuePol, selectValueRel)

  // set points in plot
  points = createPoints(dataRel, dataPol, selectValuePol, selectValueRel);

  // draw scales
  setScale(points)

  // draw plot
  makePlot(xScale, yScale, points)
};

function setScale(points) {
  /* Set scales of scatterplot */

 // set scales
 window.xScale = d3.scaleLinear()
                .domain([check(points, "x", "min"),
                         check(points, "x", "max") + 1])
                .range([65, 1150]);
 window.yScale = d3.scaleLinear()
                .domain([check(points, "y", "min"),
                         check(points, "y", "max") + 1])
                .range([275, 30]);
};

function check(dataSet, letter, stat) {
  /* Finds min and max of array */

  // loop trough array to find min and max of the arrays
  statistics = [];

  for (point in points) {
      statistics.push(points[point][letter])
  };

  // find min and max of the array
  if (stat === "max") {
      return Math.max.apply(null, statistics);
  }
  else {

      return Math.min.apply(null, statistics);
  };
};

function makePlot(xScale, yScale, points) {
  /* Draw scatterplot */

  // set variables for svg
  var width = 1200;
  var height = 300;

  // create x axis ticks
  svg.append("g")
    .attr("class", "axis")
    .attr("id", "axisX")
    .attr("transform", "translate(0," + (280) + ")")
    .call(d3.axisBottom(xScale));

  // create y axis ticks
  svg.append("g")
    .attr("class", "axis")
    .attr("id", "axisY")
    .attr("transform", "translate(" + 60 + ",0)")
    .call(d3.axisLeft(yScale));

  // create y axis label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 5)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("amount of seats")
    .style("font-size", "10px")

  // create x axis label
  svg.append("text")
      .attr("transform",
            "translate("+[(width - 100) / 2 +
                           50,
                           height]+")")
      .style("text-anchor", "middle")
      .text("percentage of religious affliation")
      .style("font-size", "10px")

  // set circles to fill with points
  var circles = svg.selectAll("circle")
                    .data(points)
                    .enter()
                    .append("circle")
                    .attr("cx", function(d, i) {
                          return xScale(d.x)
                    })
                    .attr("cy", function(d, i) {
                        return yScale(d.y);
                    })
                    .attr("r", 5)
                    .attr("stroke-opacity", .5)
                    .attr("stroke", "black")
                    .attr("id", function(d) {
                      return d.Gemeente
                    })
                    .style("fill", "blue")
                    .attr("class", "normal");
}

function createPoints(rel, pol, part, kerk){
  /* Determines position of points in plot */

 points = []

 pols = Object.keys(pol);
 pols.forEach(function(p){
   tempObj = {}
   tempObj["Gemeente"] = p;

   // useless data and Nederland totaal out of list
   if (rel[p] && pol[p][part] != null) {
     if (rel[p][kerk] != "." && p != "Nederland totaal") {
       tempObj["x"] = parseFloat(rel[p][kerk])
       tempObj["y"] = pol[p][part]
        points.push(tempObj)
    }
   }
 })
 return points;
}

function updateCircle(points) {
  /* Upon update; reposition circles */

   svg.selectAll("circle")
      .data(points)
      .transition()
      .attr("cx", function(d, i) {
            return xScale(d.x)
      })
      .attr("cy", function(d, i) {
          return yScale(d.y);
      })
      .attr("r", 5)
      .attr("stroke-opacity", .5)
      .attr("stroke", "black")
      .attr("id", function(d) {
        return d.Gemeente
      })
      .style("fill", "blue")
      .attr("class", "normal");
 }

function updateAxis(points) {
  /* Upon update, either out of pie charts of out of dropdown; rescale axes */

  svg.select("#axisY")
     .transition()
     .call(d3.axisLeft(yScale));

  svg.select("#axisX")
     .transition()
     .call(d3.axisBottom(xScale))
}

function onchange(dataRel, dataPol) {
  /* Upon update; draw plot based on new values */

   var selectValueRel = d3.select('.select')
                          .property('value')
   var selectValuePol = d3.select('.select2')
                          .property('value')

  // set points in plot
  points = createPoints(dataRel, dataPol, selectValuePol, selectValueRel);
  setScale(points)
  updateCircle(points)
  updateAxis(points)

};

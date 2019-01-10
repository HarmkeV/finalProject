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

    // create map showing biggest political party
    createMap(data, municipality, parties)

    // create pie chart concerning seat distribution
    // createPieChart(data, municipality, parties)
  });
};

function createMap(data, municipality, parties) {
  // set variables for svg
  var width = 400
  var height = 700

  // create svg
  var svg = d3.select("#map")
              .append("svg")
              .attr('width', width)
              .attr('height', height);

  // show chart
  var data = [
      ['nl-fr-gm0088', 0],
      ['nl-3557-gm0448', 1],
      ['nl-gr-gm1651', 2],
      ['nl-ze-gm1676', 3],
      ['nl-fr-gm1900', 4],
      ['nl-3560-gm1924', 5],
      ['nl-gr-gm0007', 6],
      ['nl-fl-gm0050', 7],
      ['nl-fl-gm0034', 8],
      ['nl-ov-gm0193', 9],
      ['nl-3559-gm0307', 10],
      ['nl-3559-gm0308', 11],
      ['nl-3557-gm1911', 12],
      ['nl-3557-gm0398', 13],
      ['nl-ov-gm0153', 14],
      ['nl-3557-gm0394', 15],
      ['nl-3557-gm0358', 16],
      ['nl-3560-gm0629', 17],
      ['nl-li-gm1640', 18],
      ['nl-3559-gm0632', 19],
      ['nl-3560-gm1901', 20],
      ['nl-3560-gm0599', 21],
      ['nl-3560-gm0612', 22],
      ['nl-3560-gm0614', 23],
      ['nl-ge-gm1586', 24],
      ['nl-ge-gm0197', 25],
      ['nl-ge-gm1859', 26],
      ['nl-ov-gm1708', 27],
      ['nl-dr-gm0119', 28],
      ['nl-fr-gm0079', 29],
      ['nl-fr-gm0058', 30],
      ['nl-fr-gm0072', 31],
      ['nl-fr-gm0093', 32],
      ['nl-ov-gm0166', 33],
      ['nl-ge-gm0244', 34],
      ['nl-ge-gm0269', 35],
      ['nl-fl-gm0171', 36],
      ['nl-fl-gm0303', 37],
      ['nl-ge-gm0302', 38],
      ['nl-3557-gm0363', 39],
      ['nl-3557-gm0392', 40],
      ['nl-3557-gm0479', 41],
      ['nl-3557-gm0431', 42],
      ['nl-3557-gm0437', 43],
      ['nl-3559-gm0736', 44],
      ['nl-3557-gm0417', 45],
      ['nl-3557-gm0376', 46],
      ['nl-3559-gm0317', 47],
      ['nl-3557-gm0420', 48],
      ['nl-3557-gm0405', 49],
      ['nl-3557-gm1598', 50],
      ['nl-3557-gm0424', 51],
      ['nl-3557-gm0453', 52],
      ['nl-3557-gm0375', 53],
      ['nl-ze-gm0664', 54],
      ['nl-ze-gm0654', 55],
      ['nl-ze-gm1695', 56],
      ['nl-ze-gm0687', 57],
      ['nl-ze-gm0677', 58],
      ['nl-3558-gm0748', 59],
      ['nl-ze-gm0716', 60],
      ['nl-ze-gm0717', 61],
      ['nl-3558-gm1723', 62],
      ['nl-3558-gm0744', 63],
      ['nl-fl-gm0995', 64],
      ['nl-3557-gm0388', 65],
      ['nl-gr-gm0005', 66],
      ['nl-gr-gm1663', 67],
      ['nl-gr-gm0053', 68],
      ['nl-gr-gm0056', 69],
      ['nl-3558-gm1719', 70],
      ['nl-3558-gm1709', 71],
      ['nl-3558-gm0758', 72],
      ['nl-3558-gm1655', 73],
      ['nl-gr-gm1895', 74],
      ['nl-gr-gm1987', 75],
      ['nl-gr-gm0040', 76],
      ['nl-fr-gm0140', 77],
      ['nl-fr-gm0055', 78],
      ['nl-fr-gm0051', 79],
      ['nl-fr-gm0653', 80],
      ['nl-3558-gm0828', 81],
      ['nl-3558-gm1671', 82],
      ['nl-gr-gm0010', 83],
      ['nl-gr-gm0024', 84],
      ['nl-gr-gm0003', 85],
      ['nl-ge-gm0267', 86],
      ['nl-fr-gm1891', 87],
      ['nl-fr-gm1722', 88],
      ['nl-fr-gm0096', 89],
      ['nl-ov-gm1896', 90],
      ['nl-ge-gm0232', 91],
      ['nl-fr-gm0082', 92],
      ['nl-ge-gm0230', 93],
      ['nl-ge-gm0243', 94],
      ['nl-ge-gm0233', 95],
      ['nl-ge-gm0203', 96],
      ['nl-ge-gm0273', 97],
      ['nl-3559-gm0313', 98],
      ['nl-3557-gm0451', 99],
      ['nl-3557-gm0362', 100],
      ['nl-3557-gm0415', 101],
      ['nl-3557-gm0384', 102],
      ['nl-3557-gm0432', 103],
      ['nl-3557-gm0532', 104],
      ['nl-3557-gm0457', 105],
      ['nl-3557-gm0425', 106],
      ['nl-3557-gm0381', 107],
      ['nl-3557-gm0402', 108],
      ['nl-3557-gm0406', 109],
      ['nl-3557-gm0377', 110],
      ['nl-3560-gm0588', 111],
      ['nl-3560-gm0584', 112],
      ['nl-ze-gm0718', 113],
      ['nl-ze-gm0678', 114],
      ['nl-ze-gm0715', 115],
      ['nl-ze-gm1714', 116],
      ['nl-3558-gm0851', 117],
      ['nl-3558-gm1674', 118],
      ['nl-3560-gm1783', 119],
      ['nl-3560-gm0518', 120],
      ['nl-3560-gm0556', 121],
      ['nl-3560-gm1842', 122],
      ['nl-gr-gm0765', 123],
      ['nl-fr-gm0070', 124],
      ['nl-3557-gm0373', 125],
      ['nl-3557-gm0441', 126],
      ['nl-gr-gm0009', 127],
      ['nl-gr-gm0014', 128],
      ['nl-fr-gm0059', 129],
      ['nl-fr-gm1908', 130],
      ['nl-fr-gm0063', 131],
      ['nl-gr-gm0022', 132],
      ['nl-fr-gm0086', 133],
      ['nl-gr-gm0015', 134],
      ['nl-fr-gm0090', 135],
      ['nl-gr-gm0025', 136],
      ['nl-ov-gm0148', 137],
      ['nl-ov-gm0160', 138],
      ['nl-ov-gm0158', 139],
      ['nl-ov-gm0164', 140],
      ['nl-ov-gm0173', 141],
      ['nl-ov-gm0163', 142],
      ['nl-ov-gm0175', 143],
      ['nl-ov-gm0177', 144],
      ['nl-fl-gm0184', 145],
      ['nl-ov-gm0180', 146],
      ['nl-ge-gm0200', 147],
      ['nl-ge-gm0202', 148],
      ['nl-ge-gm1705', 149],
      ['nl-ge-gm0241', 150],
      ['nl-ge-gm0252', 151],
      ['nl-ge-gm0265', 152],
      ['nl-ge-gm0213', 153],
      ['nl-ge-gm0277', 154],
      ['nl-3559-gm0352', 155],
      ['nl-ge-gm0216', 156],
      ['nl-ge-gm0236', 157],
      ['nl-ge-gm0281', 158],
      ['nl-ge-gm0275', 159],
      ['nl-ge-gm0293', 160],
      ['nl-ge-gm0225', 161],
      ['nl-ge-gm0296', 162],
      ['nl-ge-gm0299', 163],
      ['nl-ge-gm0222', 164],
      ['nl-3559-gm0339', 165],
      ['nl-ge-gm0279', 166],
      ['nl-ge-gm0228', 167],
      ['nl-3559-gm0340', 168],
      ['nl-ge-gm0289', 169],
      ['nl-3559-gm0344', 170],
      ['nl-3559-gm0312', 171],
      ['nl-3559-gm0321', 172],
      ['nl-3559-gm0335', 173],
      ['nl-3559-gm0353', 174],
      ['nl-3559-gm0351', 175],
      ['nl-3559-gm0355', 176],
      ['nl-3557-gm0393', 177],
      ['nl-3557-gm0365', 178],
      ['nl-3557-gm0370', 179],
      ['nl-3560-gm0534', 180],
      ['nl-3557-gm0383', 181],
      ['nl-3557-gm0361', 182],
      ['nl-3557-gm0416', 183],
      ['nl-3557-gm0439', 184],
      ['nl-3557-gm0400', 185],
      ['nl-3557-gm0385', 186],
      ['nl-3557-gm0478', 187],
      ['nl-3557-gm0396', 188],
      ['nl-3560-gm0484', 189],
      ['nl-3560-gm0499', 190],
      ['nl-ge-gm0297', 191],
      ['nl-3560-gm0512', 192],
      ['nl-3558-gm0797', 193],
      ['nl-3558-gm0865', 194],
      ['nl-3560-gm0523', 195],
      ['nl-3558-gm0870', 196],
      ['nl-3560-gm0482', 197],
      ['nl-3560-gm0531', 198],
      ['nl-3560-gm0537', 199],
      ['nl-3560-gm0545', 200],
      ['nl-3560-gm0546', 201],
      ['nl-3560-gm0553', 202],
      ['nl-3560-gm0569', 203],
      ['nl-3557-gm0473', 204],
      ['nl-3560-gm0576', 205],
      ['nl-3560-gm0489', 206],
      ['nl-3560-gm0585', 207],
      ['nl-3560-gm0610', 208],
      ['nl-3560-gm0505', 209],
      ['nl-3560-gm0617', 210],
      ['nl-3560-gm0590', 211],
      ['nl-3560-gm0503', 212],
      ['nl-3560-gm1892', 213],
      ['nl-3560-gm0644', 214],
      ['nl-3560-gm0623', 215],
      ['nl-3560-gm0491', 216],
      ['nl-3560-gm0611', 217],
      ['nl-3560-gm0613', 218],
      ['nl-3560-gm0608', 219],
      ['nl-3559-gm0331', 220],
      ['nl-3560-gm0620', 221],
      ['nl-3559-gm0356', 222],
      ['nl-3560-gm0622', 223],
      ['nl-3560-gm0626', 224],
      ['nl-3560-gm0547', 225],
      ['nl-3560-gm0638', 226],
      ['nl-3560-gm0642', 227],
      ['nl-3560-gm0597', 228],
      ['nl-3560-gm0542', 229],
      ['nl-3560-gm0643', 230],
      ['nl-3560-gm0502', 231],
      ['nl-3560-gm0513', 232],
      ['nl-ge-gm0263', 233],
      ['nl-ge-gm0668', 234],
      ['nl-3560-gm0689', 235],
      ['nl-ge-gm0733', 236],
      ['nl-ge-gm0304', 237],
      ['nl-3559-gm1904', 238],
      ['nl-3558-gm0753', 239],
      ['nl-3558-gm0772', 240],
      ['nl-3558-gm0848', 241],
      ['nl-3558-gm0855', 242],
      ['nl-3558-gm0766', 243],
      ['nl-3558-gm0784', 244],
      ['nl-3558-gm0779', 245],
      ['nl-3558-gm0785', 246],
      ['nl-3558-gm0796', 247],
      ['nl-3558-gm0798', 248],
      ['nl-3558-gm1667', 249],
      ['nl-3558-gm0823', 250],
      ['nl-3558-gm1728', 251],
      ['nl-3558-gm1659', 252],
      ['nl-3558-gm0820', 253],
      ['nl-3558-gm0846', 254],
      ['nl-3558-gm0845', 255],
      ['nl-3558-gm0794', 256],
      ['nl-3558-gm1652', 257],
      ['nl-3558-gm0847', 258],
      ['nl-3557-gm0852', 259],
      ['nl-3558-gm0815', 260],
      ['nl-3558-gm1685', 261],
      ['nl-3558-gm0786', 262],
      ['nl-3558-gm0856', 263],
      ['nl-3558-gm0858', 264],
      ['nl-3558-gm0757', 265],
      ['nl-3558-gm1724', 266],
      ['nl-3558-gm0861', 267],
      ['nl-3558-gm0866', 268],
      ['nl-3558-gm0867', 269],
      ['nl-3558-gm0874', 270],
      ['nl-3557-gm0880', 271],
      ['nl-li-gm0889', 272],
      ['nl-li-gm0899', 273],
      ['nl-li-gm0881', 274],
      ['nl-li-gm0882', 275],
      ['nl-li-gm0917', 276],
      ['nl-li-gm0888', 277],
      ['nl-li-gm0971', 278],
      ['nl-li-gm1883', 279],
      ['nl-li-gm0938', 280],
      ['nl-li-gm0962', 281],
      ['nl-li-gm0935', 282],
      ['nl-li-gm0994', 283],
      ['nl-li-gm0986', 284],
      ['nl-3560-gm1525', 285],
      ['nl-3559-gm0345', 286],
      ['nl-3559-gm1581', 287],
      ['nl-3557-gm0458', 288],
      ['nl-li-gm0984', 289],
      ['nl-3558-gm1658', 290],
      ['nl-li-gm1669', 291],
      ['nl-li-gm1641', 292],
      ['nl-li-gm0957', 293],
      ['nl-3560-gm0627', 294],
      ['nl-3560-gm1672', 295],
      ['nl-3560-gm1621', 296],
      ['nl-3560-gm0637', 297],
      ['nl-3558-gm0873', 298],
      ['nl-gr-gm0018', 299],
      ['nl-li-gm0907', 300],
      ['nl-3558-gm0756', 301],
      ['nl-3558-gm1684', 302],
      ['nl-3557-gm1696', 303],
      ['nl-3559-gm0310', 304],
      ['nl-dr-gm1699', 305],
      ['nl-ov-gm1700', 306],
      ['nl-dr-gm0118', 307],
      ['nl-dr-gm1701', 308],
      ['nl-dr-gm1731', 309],
      ['nl-3558-gm1702', 310],
      ['nl-3558-gm0755', 311],
      ['nl-ge-gm0196', 312],
      ['nl-ge-gm0226', 313],
      ['nl-3558-gm1721', 314],
      ['nl-li-gm0965', 315],
      ['nl-li-gm1729', 316],
      ['nl-gr-gm1730', 317],
      ['nl-ge-gm1740', 318],
      ['nl-ge-gm0262', 319],
      ['nl-ov-gm1742', 320],
      ['nl-ov-gm0150', 321],
      ['nl-3558-gm1771', 322],
      ['nl-ge-gm0285', 323],
      ['nl-ov-gm1773', 324],
      ['nl-ge-gm1876', 325],
      ['nl-3560-gm1884', 326],
      ['nl-3558-gm0743', 327],
      ['nl-li-gm1894', 328],
      ['nl-3558-gm0762', 329],
      ['nl-3560-gm1916', 330],
      ['nl-3560-gm0568', 331],
      ['nl-3560-gm1926', 332],
      ['nl-3560-gm1927', 333],
      ['nl-3557-gm0498', 334],
      ['nl-3560-gm0530', 335],
      ['nl-3560-gm0501', 336],
      ['nl-ze-gm0703', 337],
      ['nl-3558-gm0840', 338],
      ['nl-3558-gm0879', 339],
      ['nl-li-gm0928', 340],
      ['nl-li-gm1711', 341],
      ['nl-ov-gm1774', 342],
      ['nl-gr-gm0037', 343],
      ['nl-dr-gm1680', 344],
      ['nl-gr-gm0047', 345],
      ['nl-fr-gm0080', 346],
      ['nl-fr-gm0081', 347],
      ['nl-fr-gm0098', 348],
      ['nl-dr-gm0109', 349],
      ['nl-ov-gm0147', 350],
      ['nl-ov-gm0141', 351],
      ['nl-ov-gm0189', 352],
      ['nl-ge-gm0214', 353],
      ['nl-ge-gm0209', 354],
      ['nl-ge-gm0246', 355],
      ['nl-ge-gm0221', 356],
      ['nl-ge-gm0268', 357],
      ['nl-ge-gm0282', 358],
      ['nl-ge-gm1955', 359],
      ['nl-ge-gm0301', 360],
      ['nl-3559-gm0327', 361],
      ['nl-3559-gm0342', 362],
      ['nl-3557-gm0399', 363],
      ['nl-3557-gm0397', 364],
      ['nl-3560-gm0575', 365],
      ['nl-3560-gm0579', 366],
      ['nl-3559-gm0589', 367],
      ['nl-3560-gm0603', 368],
      ['nl-3560-gm0707', 369],
      ['nl-fr-gm0737', 370],
      ['nl-3558-gm0738', 371],
      ['nl-3558-gm0770', 372],
      ['nl-3558-gm0809', 373],
      ['nl-3558-gm0788', 374],
      ['nl-3558-gm0824', 375],
      ['nl-3558-gm0826', 376],
      ['nl-3558-gm0777', 377],
      ['nl-3558-gm0860', 378],
      ['nl-li-gm0944', 379],
      ['nl-li-gm0946', 380],
      ['nl-li-gm1507', 381],
      ['nl-li-gm0893', 382],
      ['nl-3558-gm1706', 383],
      ['nl-gr-gm0048', 384],
      ['nl-dr-gm1681', 385],
      ['nl-dr-gm1690', 386],
      ['nl-ge-gm1734', 387],
      ['nl-li-gm0983', 388],
      ['nl-ge-gm1509', 389],
      ['nl-ov-gm0183', 390],
      ['nl-ge-gm0294', 391],
      ['nl-li-gm0988', 392],
      ['nl-li-gm1903', 393],
      ['nl-fr-gm0085', 394],
      ['nl-dr-gm0106', 395],
      ['nl-ov-gm1735', 396],
      ['nl-3557-gm0450', 397],
      ['nl-gr-gm0017', 398],
      ['nl-3560-gm0606', 399],
      ['nl-li-gm0951', 400],
      ['nl-fr-gm0060', 401],
      ['nl-ov-gm0168', 402],
      ['nl-dr-gm0114', 403],
      ['nl-li-gm0981', 404],
      ['nl-fr-gm0074', 405],
      ['nl-ge-gm0274', 406],
      ['nl-3558-gm0844', 407],
      ['undefined', 408]
  ];

  // Create the chart
  Highcharts.mapChart('#map', {
      chart: {
          map: 'countries/nl/nl-all-all'
      },

      title: {
          text: 'Result council election 2018'
      },

      subtitle: {
          text: 'biggest party per municipality'
      },

      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
          min: 0
      },

      series: [{
          data: data,
          name: 'Random data',
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }]
  });
}

function createPieChart(data, municipality, parties) {
  // set variables for svg
  var width = 300;
  var height = 300;
  var radius = 100;
  var color = ['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'];

  // select set to be seen on first entry
  var beginSet = "Appingedam";
  selection = data[beginSet]

  // create svg
  var svg = d3.select("#piechart")
              .append("svg")
              .attr('width', width)
              .attr('height', height)
              .style("background", "pink")
              .attr("transform", "translate(" + radius + "," + radius + ")")

  // indicate separate data
  let party = Object.keys(selection)
  let seats = Object.values(selection)

  // indicate distribution of pie chart
  var data = d3.pie()
               .sort(null)
               .value(function(d) {
                 return d
               })
               (seats);

  // define arc generator function
  var arc = d3.arc()
              .innerRadius(0)
              .outerRadius(radius)
              .padAngle(.015)
              .padRadius(20);

  // define path elements for arc
  var arcs = d3.enter()
               .append("g")
               .attr("transform", "translate(150, 150)")
               .selectAll("path")
               .data(data);

  // append path elements
  arcs.enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function(i) {
        return color[i.data];
      });


  arcs.append("text")
      .attr("transform", "translate(" + 10 + ")")
      .attr("text-anchor", "middle")
      .text(function(i) {
        return party[i];
      });
};

# Design document 
Name: Harmke Vliek

Student number: 10989137

## List of data sources
The data regarding secularization in the Netherlands ranked according to municipal borders is stored in the excel file 'Kerkelijke gezindte en kerkbezoek naar gemeente' from the CBS statline website https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus. This file will be converted, first into an csv file and consequently into a json file.
The data regarding the distribution of seats in council is can't be found in free databases online. However, maps displaying exactly this information are rendered on the site https://lfverkiezingen2018.appspot.com/public/builds/f8p2ht/index.html. Based on this map, I will create a json file myself. These two json files will contain the data necessary for the visualisation.

* [CBS](https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus)
* [Seats in coucil](https://lfverkiezingen2018.appspot.com/public/builds/f8p2ht/index.html)

## Diagram with an overview of the technical components of the visualisation
Code
![design](/doc/designdiagram.png)

Diagram on first entry
![Diagram on first entry](/doc/proposal_voorbeeld-0.png)

Diagram on interaction
![Diagram on interaction](/doc/design_voorbeeld.png)

### Data
* Python code to convert csv files to json files

### Visualisation
* Map of the Dutch municipalities
  - on onmouseclick, pie chart and scatterplot regarding seat distribution and correlation between religion and political preference         appear per municipality
  - on mouseover, the amount of seats of the biggest political party appears
  - legend with colorcoded political parties
* Pie chart
  - displays data of municipality regarding seat distribution
  - title containing name of municipality
  - legend 
* Scatter plot
  - title containing name of municipality
 * Optional
    - select for time period
    - pie chart regarding distribution of religious followers
 
## Plugins providing functionality
* D3
* [Svg containing a map of the Dutch municipalities](https://code.highcharts.com/mapdata/countries/nl/nl-all-all.svg)
* [Legend](https://github.com/susielu/d3-legend)
* [Color schemes](https://github.com/d3/d3-scale-chromatic)   


# Design document 
Name: Harmke Vliek

Student number: 10989137

## List of data sources
The data regarding secularization in the Netherlands ranked according to municipal borders is stored in the excel file 'Kerkelijke gezindte
en kerkbezoek naar gemeente' from the CBS statline website https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus.
This file will be converted, first into an csv file and consequently into a json file.
The data regarding the distribution of seats in council is can't be found in free databases online. However, maps displaying exactly this
information are rendered on the site https://lfverkiezingen2018.appspot.com/public/builds/f8p2ht/index.html. Based on this map, I will
create a json file myself. These two json files will contain the data necessary for the visualisation.

## Diagram with an overview of the technical components of the visualisation
* python code to convert csv files to json files
* map of the Dutch municipalities
  - on onmouseclick, pie chart and scatterplot regarding seat distribution and correlation between religion and political preference
  - on mouseover, the amount of seats of the biggest political party appears
  - legend with colorcoded political parties
* pie chart
  - displays data of municipality regarding seat distribution
  - title containing name of municipality
  - legend 
* scatter plot
  - title containing name of municipality

## Descriptions of each of the components
*
* svg containing a map of the Dutch municipalities, obtained from https://code.highcharts.com/mapdata/countries/nl/nl-all-all.svg
*
*
 
## List of APIs or D3 plugins that you will be using to provide functionality in your app
[Legend](https://github.com/susielu/d3-legend)

[Color schemes](https://github.com/d3/d3-scale-chromatic) 

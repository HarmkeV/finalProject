# Day 1
* Created [proposal](https://github.com/HarmkeV/finalProject/blob/master/README.md) including the notes I've gotten during the discussion     of the previous proposal,
* Started assembling data; data on [religion](https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus) is       found and will be converted into a json file, the data regarding council seats is only available in ready made
  [maps](https://lfverkiezingen2018.appspot.com/public/builds/f8p2ht/index.html) so i will create my own json file based on that.

# Day 2
* Created [design document](https://github.com/HarmkeV/finalProject/blob/master/DESIGN.md),
* Assembled further data regarding seats in council,
* Finalised [json](/data/religie.js) file regarding seats in council,
* Created CONVERT2JSON.py,
* Converted kerkelijke_gezindte_en_kerkbezoek_naar_gemeenten.csv to [religie.json](/data/religie.json).

# Day 3
* Tried to set up an svg with all the municipalities of the Netherlands.
* Started on createPieChart, as loading the map proved to be difficult,
* Found out the GEOjson was using the wrong coordinate system, converted it into the WGS 84 system,
* Implemented map in a svg in a div on the index page.

# Day 4
* Found out quality of map was bad, found another one and implemented it. However, it is not yet complete as it is not filled with data according to plan,
* Decided to fill map with the distribution of church affiliation instead of the biggest political party as I thought the pie chart also shows the seat distribution and this way the overview is more clear,
* Struggling with connecting the data concerning secularization and the municipalities on the map.

# Day 5
* Finished first draft of pie chart, tooltip and legend. Not connected to map yet,
* Tried to fill map again, failed.

# Day 6
* Filled map. I don't think I used the fastest way, however it works for now,
* Created second pie chart regarding the distribution of religious affiliation because I think to compare two things, it has to formatted in the same visualisation. Otherwise in order to compare the two variables, an extra barrier of two different forms of visualisation will be added,
* Wondered what I would create as the third visualisation, as I thought I would make a scatterplot as first but as it turns out that is not possible the way I wanted it,
* Decided the two pie charts should exist of two different colour schemes, as political parties aren't directly linked and using similar colour schemes could suggest there is a direct correlation,
* Updated design webpage, put name top right instead of top middle.

# Day 7
* Decided the third visualisation will be a scatterplot with amount of seats and percentage of religion as axes, municipalities as dots and a dropdown menu with party and religion selection.
* Started creating that scatterplot

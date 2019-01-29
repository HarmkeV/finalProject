This map exists of several files, some of them for code and other files on which for example maps are based.

# Code
The files containing code are CONVERT2JSON.py, style.css, index.html and visual.js
* [CONVERT2JSON.py](CONVERT2JSON.py) converts the csv file [kerkelijke_gezindte_en_kerkbezoek_naar_gemeenten.csv](kerkelijke_gezindte_en_kerkbezoek_naar_gemeenten.csv) to [religie.json](religie.json).
* The file [style.css](style.css) contains all CSS for the webpage and the figures on the page.
* The file [index.html](index.html) is the html file based on which the server launches the page with visualisations.
* The file [about.html](about.html) is the html file based on which the server launches the page with the description of the project.
* The file [visual.js](visual.js) contains the code necessary to create all figures on the page.

# Data
The files containing data are favicon.ico and the map data.
* The file [favicon.ico](favicon.ico) contains the favicon of the webpage.
* The map data contains the file [kerkelijke_gezindte_en_kerkbezoek_naar_gemeenten.csv](data/kerkelijke_gezindte_en_kerkbezoek_naar_gemeenten.csv), which is converted into [religie.json](data/religie.json), a json file containing information pertaining the distribution of religion in the Netherlands and its municipalities. The other json file [zetelverdeling.json](data/zetelverdeling.json) contains information pertaining the distribution of seats in council per political party in municipalities of the Netherlands. The map also contains the files [highcode.js](data/highcode.js), [mapexp.js](data/mapexp.js) and [mapnl.js](data/mapnl.js). These are the files necessary to display the map of Dutch municipalities.

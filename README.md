# Project
Final project of the minor Programmeren. Visualisations created by Harmke Vliek.

link to[Project](https://harmkev.github.io/finalProject/code/)

# Purpose
The number of people who go to church or identify as a member of a religion has decreased in the last century. This decrease started when the pillarification (also known as 'verzuiling') of the Dutch society ended and people of different religions started to mingle. The end of the era of pillarifiction is characterized by the origin of several political parties, of which some weren't linked to a certain creed. The rate with which secularization exists has increased in recent years. In the history of the world, the amount of people without faith has never been this high. Simultaneously, the amount of political parties is Dutch society has increased, most of them not religious. While his has been happening simultaneously, the possible correlation of these two facts is not being thought at schools.

This visualisation tries to offer an answer to the question regarding the correlation of these two events. The map offers an insight in secularization in the Netherlands. The pie charts display information regarding the distribution of seats in council and religious affiliation. The scatterplot shows an approximation of the correlation between the amount of seats a selected party contains and the amount of religious followers in a municipality.

# User guide
Upon opening the page, the screen displays visualisations of the data of the Netherlands as a whole.

![First entry](doc/screenNLtotaal.png) 

Upon clicking on a municipality in the map, the pie charts update according to the data associated with the municipality. This happens as well upon clicking on a circle in the scatterplot.

![update](doc/screenLochem.png)

The scatterplot updates according to both the dropdown menu in the navigation bar on top of the page, as well as upon clicking the slice in the pie charts that corresponds to a political party or a religion.
The links to the data sources are located in the navigation bar.

# Description
The git contains a map called code, a map called doc and several markdown files. The markdown files are
* [DESIGN.md](DESIGN.md), which is a visualisation of the project;
* [PROCESS.md](PROCESS.md), which contains information concerning choices that were made during the process;
* [PROPOSAL.md](PROPOSAL.md), which contains a basic outline of the visualisation created at the start of the project;
* [REPORT.md](REPORT.md), which is a report summarizing the course of the project and the reasons behind design choices;
* [REVIEW.md](REVIEW.md), which contains a retrospective summary of the development of the visualisation;
* [STYLE.md](STYLE.md), containing the style guide created by group I.

The map doc contains all images displayed in the several markdown files. The map code contains the JavaScript file [visual.js](code/visual.js), in which all code necessary for rendering the visualisations is set, as well as the [html page](code/index.html) necessary to display a webpage. Therewithal the favicon, [css file](code/style.css) and the [conversion file](code/CONVERT2JSON.py) is set in there. All data is stored in the map data.

# Sources of external code
* The svg of the Netherlands is obtained from [Highcharts](http://code.highcharts.com/mapdata/countries/no/no-all-all.js).
* The legend is made using the library D3 legend.
* The style of the page is enhanced by [bootstrap](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css).
* Both pie charts are created based on this [example](https://codepen.io/alexmorgan/pen/XXzpZP).

# License
This project is licensed under a public release license - see the [LICENSE](LICENSE) file for details.

© 2019 Harmke Vliek. No Rights Reserved.

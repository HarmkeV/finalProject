// Harmke Vliek

// 10989137

// Proposal: propose an idea for the final project of the minor Programmeren

# Proposal final project Datavisualisation

**Problem statement**

The number of people who go to church or identify as a member of a religion has decreased in the last century. This decrease strated when the pillarification (also known as 'verzuiling') of the Dutch society ended and people of different religions started to mingle. The end of the era of pillarifiction is characterized by the origin of several political parties, of which some weren't linked to a certain creed. The rate with which secularization exists has increased in recent years. In the history of the world, the amount of people without faith has never been this high. Simultaneously, the amount of political parties is Dutch society has increased, most of them not religous. While his has been happening simultaneously, the possible correlation of these two facts is not being thought at shools. Does secularization lead to the decrease of religious political parties and the amount of votes they recieve, or is there no cohesion at all?    

**Solution**

The visualisation of the solution will be a map of the municipalities of the Netherlands displaying the biggest political party in the municipality. When one clicks on a province, a pie chart regarding the distribution of seats in council and a pie chart regarding the percentage of people who identify as a follower of a religion will appear. Finally, a scatterplot will be displayed rendering the amount of seats of a political party in council and the perctages of religious faith. 

![Example visualisation](/doc/proposal_voorbeeld.jpg)

**Prerequisites**

*data sources*

The datasource containing information regarding religion is the file 'Kerkelijke gezindte en kerkbezoek naar gemeenten' on this website of the CBS: https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus. This file contains the amount of time an resident of the municipality visits a religious building and the distribution of religous beliefs in the municipality. The preprossing of this file will result in the distribution of creed per municipality in a json file.

The datasource containing information regarding voting behaviour is obtained from https://www.verkiezingsuitslagen.nl/. 

*external components*

The libraries needed for this project will be chart.js, pandas, a librabry providing an svg with al the municipalities of the Netherlands and D3.

*related visualizations*

Related visualisations regarding comparisons between voting behaviour and religious convictions have not yet been found. However, on this CBS website (https://www.cbs.nl/nl-nl/nieuws/2016/51/helft-nederlanders-is-kerkelijk-of-religieus) there is an interactive map that shows the percentage of people of one religion of one municipalty, and the distribution of that specific religion over the Netherlands. I don't think I can do it exactly the same, but indicating which municipality is done rather well in this map so I'd like to implement it similarily.

Another interesting visualisation is rendered on this website, published by the NRC (https://www.nrc.nl/nieuws/2018/03/21/verkiezingsuitslagen-a1596511). It shows the amount of seats of the political parties of the municipal elections of 2018. The way the seats are represented is very clean, and I would like to follow this example.

*hardest parts*

The hardest part of this visualisation will be the comparison between two different municipalities. Another hard part is making sure the right information will appear in the box containing the pie charts, this will be easier if all municipalities are assigned an individual id in both datasets, which is not the case right now. 

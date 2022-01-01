//[Dashboard Javascript]

//Project:	Pearl Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	
	
	// Morris bar chart

    Morris.Bar( {
        element: 'morris-bar-chart', data: [ 
            { y: 'Blom World', a: 10000, b: 8000, c:7800}, 
            { y: 'Book Show', a: 8500, b: 7000, c:6500}, 
            { y: 'Farming', a: 9000, b: 7500, c:7000}, 
            { y: 'Transfer Amount', a: 9500, b: 8500, c:7500},
            { y: 'Trading Soft', a: 7500, b: 5500, c:5000},
            { y: 'Banking', a: 7500, b: 5500, c:5000}
        ], 
        barGap:8,
        barSizeRatio:0.30,
        barShape: 'soft',
        barRadius: [5, 5, 5, 5],
        xkey: 'y', 
        ykeys: [ 'a', 'b', 'c'], 
        labels: ['Total', 'Used', 'Target'], 
        barColors: ['#2444e8', '#843cf7', '#ec4b71'], 
        hideHover: 'auto',
        preUnits: "$", 
        gridLineColor: '#d2d6e6', 
        gridTextColor: '#8997bd',
        resize: true,
    }
    );
	
	
	// Morris Dounut

	Morris.Donut({
	  element: 'work',
	  data: [
		{label: "Team 1", value: 65},
		{label: "Team 2", value: 98},
		{label: "Team 3", value: 210}
	  ],
	  resize: true,
	  colors:[ '#f7f7f7', '#2444e8', '#ec4b71'], 
	  labelColor: '#4e6a8b',
	  backgroundColor: 'transparent',
	  fillOpacity: 0.1,
	  formatter: function (x) { return x + "h"}
	});
	
	// bar chart
		$(".bar").peity("bar");	
}); // End of use strict


//[Dashboard Javascript]

//Project:	Pearl Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	
	var ts2 = 1484418600000;
    var dates = [];    
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      var innerArr = [ts2, dataSeries[1][i].value];
      dates.push(innerArr)
    }


    var options = {
      chart: {
        type: 'area',
        stacked: false,
        height: 380,
        zoom: {
          type: 'x',
          enabled: true
        },
        toolbar: {
          show: false,
          autoSelected: 'zoom'
        }
      },
      colors: ['#4d79f6'],
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Bitcoin',
        data: dates
      }],
      markers: {
        size: 0,
      },
      // title: {
      //   text: 'Stock Price Movement',
      //   align: 'left'
      // },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        min: 20000000,
        max: 250000000,
        labels: {
          formatter: function (val) {
            return "$" + (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: true,
          color: '#bec7e0',
        },  
        axisTicks: {
          show: true,
          color: '#bec7e0',
        },    
      },

      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return "$" + (val / 1000000).toFixed(0)
          }
        }
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#crypto_dash_main"),
      options
    );

    chart.render();
	
	
	
	if ($('.buy-sall-table').length) {
        setRandomClass();
        setInterval(function () {
            setRandomClass();
        },1000);
        function setRandomClass() {
            var tbody = $(".buy-sall-table table tbody");
            var items = tbody.find("tr");
            var number = items.length;
            var random1 = Math.floor((Math.random() * number));
            var random2 = Math.floor((Math.random() * number));
            items.removeClass("bg-warning");
            items.eq(random1).addClass("bg-warning");
            items.eq(random2).addClass("bg-warning");
        }
    }
	
	
	/*--- Sparkline charts - mini charts ---*/ 
		function sparkline_charts() {
			$('.sparklines').sparkline('html');
		}
		if ($('.sparklines').length) {
			sparkline_charts();
		} 
	
	//ticker
 	if ($('#webticker-1').length) {   
		$("#webticker-1").webTicker({
			height:'auto', 
			duplicate:true, 
			startEmpty:false, 
			rssfrequency:5
		});
	}
	
	
	
	
	
	var chart = AmCharts.makeChart("chartdiv22", {
	  "type": "serial",
	  "theme": "light",
	  "dataDateFormat": "YYYY-MM-DD",
	  "precision": 2,
	  "valueAxes": [{
		"id": "v1",
		"title": "Sales",
		"position": "left",
		"autoGridCount": false,
		"labelFunction": function(value) {
		  return "$" + Math.round(value) + "M";
		}
	  }, {
		"id": "v2",
		"title": "Market Days",
		"gridAlpha": 0,
		"position": "right",
		"autoGridCount": false
	  }],
	  "graphs": [{
		"id": "g3",
		"valueAxis": "v1",
		"lineColor": "#0fd850",
		"fillColors": ["#fc6076", "#ff9a44"],
		"fillAlphas": 1,
		"type": "column",
		"title": "Actual Sales",
		"valueField": "sales2",
		"clustered": false,
		"columnWidth": 0.5,
		"legendValueText": "$[[value]]M",
		"balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
	  }, {
		"id": "g4",
		"valueAxis": "v1",
		"lineColor": "#cc208e",
		"fillColors": ["#cc208e", "#6713d2"],
		"fillAlphas": 1,
		"type": "column",
		"title": "Target Sales",
		"valueField": "sales1",
		"clustered": false,
		"columnWidth": 0.3,
		"legendValueText": "$[[value]]M",
		"balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
	  }, {
		"id": "g1",
		"valueAxis": "v2",
		"bullet": "round",
		"bulletBorderAlpha": 1,
		"bulletColor": "#FFFFFF",
		"bulletSize": 5,
		"hideBulletsCount": 50,
		"lineThickness": 2,
		"lineColor": "#6713d2",
		"type": "smoothedLine",
		"title": "Market Days",
		"useLineColorForBulletBorder": true,
		"valueField": "market1",
		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
	  }, {
		"id": "g2",
		"valueAxis": "v2",
		"bullet": "round",
		"bulletBorderAlpha": 1,
		"bulletColor": "#FFFFFF",
		"bulletSize": 5,
		"hideBulletsCount": 50,
		"lineThickness": 2,
		"lineColor": "#e1ede9",
		"type": "smoothedLine",
		"dashLength": 5,
		"title": "Market Days ALL",
		"useLineColorForBulletBorder": true,
		"valueField": "market2",
		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
	  }],
	  "chartScrollbar": {
		"graph": "g1",
		"oppositeAxis": false,
		"offset": 30,
		"scrollbarHeight": 50,
		"backgroundAlpha": 0,
		"selectedBackgroundAlpha": 0.1,
		"selectedBackgroundColor": "#888888",
		"graphFillAlpha": 0,
		"graphLineAlpha": 0.5,
		"selectedGraphFillAlpha": 0,
		"selectedGraphLineAlpha": 1,
		"autoGridCount": true,
		"color": "#AAAAAA"
	  },
	  "chartCursor": {
		"pan": true,
		"valueLineEnabled": true,
		"valueLineBalloonEnabled": true,
		"cursorAlpha": 0,
		"valueLineAlpha": 0.2
	  },
	  "categoryField": "date",
	  "categoryAxis": {
		"parseDates": true,
		"dashLength": 1,
		"minorGridEnabled": true
	  },
	  "legend": {
		"useGraphSettings": true,
		"position": "top"
	  },
	  "balloon": {
		"borderThickness": 1,
		"shadowAlpha": 0
	  },
	  "export": {
	   "enabled": true
	  },
	  "dataProvider": [{
		"date": "2013-01-16",
		"market1": 71,
		"market2": 75,
		"sales1": 5,
		"sales2": 8
	  }, {
		"date": "2013-01-17",
		"market1": 74,
		"market2": 78,
		"sales1": 4,
		"sales2": 6
	  }, {
		"date": "2013-01-18",
		"market1": 78,
		"market2": 88,
		"sales1": 5,
		"sales2": 2
	  }, {
		"date": "2013-01-19",
		"market1": 85,
		"market2": 89,
		"sales1": 8,
		"sales2": 9
	  }, {
		"date": "2013-01-20",
		"market1": 82,
		"market2": 89,
		"sales1": 9,
		"sales2": 6
	  }, {
		"date": "2013-01-21",
		"market1": 83,
		"market2": 85,
		"sales1": 3,
		"sales2": 5
	  }, {
		"date": "2013-01-22",
		"market1": 88,
		"market2": 92,
		"sales1": 5,
		"sales2": 7
	  }, {
		"date": "2013-01-23",
		"market1": 85,
		"market2": 90,
		"sales1": 7,
		"sales2": 6
	  }, {
		"date": "2013-01-24",
		"market1": 85,
		"market2": 91,
		"sales1": 9,
		"sales2": 5
	  }, {
		"date": "2013-01-25",
		"market1": 80,
		"market2": 84,
		"sales1": 5,
		"sales2": 8
	  }, {
		"date": "2013-01-26",
		"market1": 87,
		"market2": 92,
		"sales1": 4,
		"sales2": 8
	  }, {
		"date": "2013-01-27",
		"market1": 84,
		"market2": 87,
		"sales1": 3,
		"sales2": 4
	  }, {
		"date": "2013-01-28",
		"market1": 83,
		"market2": 88,
		"sales1": 5,
		"sales2": 7
	  }, {
		"date": "2013-01-29",
		"market1": 84,
		"market2": 87,
		"sales1": 5,
		"sales2": 8
	  }, {
		"date": "2013-01-30",
		"market1": 81,
		"market2": 85,
		"sales1": 4,
		"sales2": 7
	  }]
	});

	
	
	
	
}); // End of use strict


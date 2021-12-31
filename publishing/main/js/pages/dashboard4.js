//[Dashboard Javascript]

//Project:	Pearl Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	
	var options = {
        series: [{
          name: 'This Year',
          data: [44, 55, 41, 67, 22, 43, 41, 12, 56, 51, 42, 44]
        }, {
          name: 'Past Year',
          data: [13, 23, 20, 8, 13, 27, 22, 17, 28, 14, 9, 12]
        }],
        chart: {
			foreColor: '#fff',
          type: 'bar',
          height: 313,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
		dataLabels: {
          enabled: false
        },
		colors:['#ef0753', '#2444e8'],
        responsive: [{
          breakpoint: 480,
        }],
        plotOptions: {
          bar: {
            horizontal: false,
			  columnWidth: '20%',
			  endingShape: 'rounded',
          },
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        },
        legend: {
          position: 'top',
           horizontalAlign: 'right',
        },
        fill: {
          opacity: 1
        }
      };

      var chart = new ApexCharts(document.querySelector("#yearly-comparison"), options);
      chart.render();
	
	
	var options = {
        series: [{
          name: 'series1',
          data: [178, 223, 195, 201, 143, 189, 156, 155, 118, 167, 159]
        }],
        chart: {
			foreColor: '#fff',
          height: 280,
			width: 600,
          type: 'line',
			offsetY: 0,
			offsetX: -50,
        },
		colors:['#ffffff'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
        },
			
		markers: {
			size: 0,
		},
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          }
        
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val ;
            }
          }
        
        },
		grid: {
			show: true,
			borderColor: '#5578ed',
			strokeDashArray: 0,
			position: 'back',
			xaxis: {
				lines: {
					show: false,
				}
			},   
			yaxis: {
				lines: {
					show: false
				}
			},  
			row: {
				colors: undefined,
				opacity: 0.5,
			},  
			column: {
				colors: undefined,
				opacity: 0.1
			},  
		}
      };

      var chart = new ApexCharts(document.querySelector("#statisticschart3"), options);
      chart.render();
	
	
	
	var bar = new ProgressBar.Circle(progressbar2, {
	  color: '#ffffff',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 20,
	  trailWidth: 10,
	  trailColor: '#3c55b9',
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
		autoStyleContainer: false
	  },
	  from: { color: '#ffffff', width: 10 },
	  to: { color: '#ffffff', width: 10 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
		circle.path.setAttribute('stroke', state.color);
		circle.path.setAttribute('stroke-width', state.width);

		var value = Math.round(circle.value() * 150);
		if (value === 0) {
		  circle.setText('');
		} else {
		  circle.setText(value);
		}

	  }
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(0.78);

	
	
	
	var options = {
        series: [{
          name: 'Inflation',
          data: [189, 156, 123, 118, 137, 103, 168, 223]
        }],
        chart: {
          height: 248,
          type: 'bar',
			foreColor: '#ccc',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'bottom', // top, center, bottom
            },
			  columnWidth: '40%',
			  endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false,
        },
        colors:['#ffffff'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          position: 'bottom',
			
          labels: {
			show: true,
            offsetY: 0, 
			  colors: ["#ffffff"]
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false,        
          }
        },
		grid: {
		  yaxis: {
			lines: {
			  show: false
			}
		  }
		},
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
      };

      var chart = new ApexCharts(document.querySelector("#ratingchart"), options);
      chart.render();
	
	
	
	 // ------------------------------
    // Basic line chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
        var myChart = echarts.init(document.getElementById('basic-line'));

        // specify chart configuration item and data
        var option = {
                // Setup grid
                grid: {
                     left: '1%',
                    right: '2%',
                    bottom: '3%',
                    containLabel: true
                },

                // Add Tooltip
                tooltip : {
                    trigger: 'axis'
                },

                // Add Legend
                legend: {
                    data:['Online']
                },

                // Add custom colors
                color: ['#4974e0'],

                // Enable drag recalculate
                calculable : true,

                // Horizontal Axiz
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
                    }
                ],

                // Vertical Axis
                yAxis : [
                    {
                        type : 'value',
                    }
                ],

                // Add Series
                series : [
                    {
                        name:'Online',
                        type:'line',
                        data:[10, 8, 14, 19, 17, 12, 14],
                        markPoint : {
                            data : [
                                {type : 'max', name: 'Max'},
                                {type : 'min', name: 'Min'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: 'Average'}
                            ]
                        },
                        lineStyle: {
                            normal: {
                                width: 3,
                                shadowColor: 'rgba(0,0,0,0.1)',
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                    },
                ]
            };
        // use configuration item and data specified to show chart
        myChart.setOption(option);
	
	
	
}); // End of use strict

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
				height: 395,
				zoom: {
				  type: 'x',
				  enabled: true
				},
				toolbar: {
				  autoSelected: 'zoom'
				}
			  },
			  dataLabels: {
				enabled: false
			  },
			  series: [{
				name: 'Stock',
				data: dates
			  }],
			  markers: {
				size: 0,
			  },
			  fill: {
				gradient: {
				  enabled: true,
				  shadeIntensity: 1,
				  inverseColors: false,
				  opacityFrom: 0.9,
				  opacityTo: 0.2,
				  stops: [0, 90, 100]
				},
			  },
			  yaxis: {
				min: 20000000,
				max: 250000000,
				labels: {
				  formatter: function (val) {
					return (val / 1000000).toFixed(0);
				  },
				},
			  },
				
			  xaxis: {
				type: 'datetime',
			  },
				
				
			  tooltip: {
				shared: false,
				y: {
				  formatter: function (val) {
					return (val / 1000000).toFixed(0)
				  }
				}
			  }
			}

			var chart = new ApexCharts(
			  document.querySelector("#chart-line"),
			  options
			);

			chart.render();

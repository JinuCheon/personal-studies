//[Dashboard Javascript]

//Project:	Pearl Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	
	var options = {
    chart: {
      height: 390,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded',        
      },
      
    },
    colors: ["#2444e8", "#fbadbf", "#45b6c6"],
    series: [{
      name: 'Project',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'Supplier',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'Invoice',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        type: 'gradient',
        gradient: {
            inverseColors: true,
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],
    markers: {
      size: 0
    },
    xaxis: {
      type:'datetime',
      axisBorder: {
        show: true,
        color: '#eff1ff',
      },  
      axisTicks: {
        show: true,
        color: '#eff1ff',
      },    
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + "%";
          }
          return y;
          
        }
      }
    },
    legend: {
		position: 'top',
           horizontalAlign: 'right',
      labels: {
        useSeriesColors: true
      },
      offsetX: 0,
      offsetY: -10,
      markers: {
        customHTML: [
          function() {
            return ''
          }, function() {
            return ''
          }, function() {
            return ''
          }
        ]
      }
    }
  }

  var chart = new ApexCharts(
    document.querySelector("#crm_dash_2"),
    options
  );

  chart.render();
	
	
	
	var options = {
        series: [{
          name: 'Inflation',
          data: [189, 156, 123, 118]
        }],
        chart: {
          height: 150,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
			  columnWidth: '15%',
			  endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false,
        },
        colors:['#45b6c6'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr"],
          position: 'bottom',
			
          labels: {
			show: true, 
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

      var chart = new ApexCharts(document.querySelector("#meetingschart3"), options);
      chart.render();
	
	
	
	
	var options = {
        series: [{
          name: 'Inflation',
          data: [189, 156, 123, 118]
        }],
        chart: {
          height: 120,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
			  columnWidth: '15%',
			  endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false,
        },
        colors:['#2444e8'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr"],
          position: 'bottom',
			
          labels: {
			show: true, 
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

      var chart = new ApexCharts(document.querySelector("#meetingschart4"), options);
      chart.render();
	
	
	
	
		

	
	var bar = new ProgressBar.Circle(progressbar1, {
	  color: '#7f4cc1',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 20,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
		autoStyleContainer: false
	  },
	  from: { color: '#7f4cc1', width: 1 },
	  to: { color: '#9c52d5', width: 4 },
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
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 57, 56]
        }],
        chart: {
          type: 'bar',
          height: 135
        },
		colors:['#2444e8'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '20%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
		grid: {
			show: false,  
		},
        stroke: {
          show: false,
          width: 0,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
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
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      };

      var chart = new ApexCharts(document.querySelector("#profit"), options);
      chart.render();
	
	
	
	
	
	var myConfig = {
        "type": "line",
		"utc": true,
        "plot": {
          "animation": {
            "delay": 500,
            "effect": "ANIMATION_SLIDE_LEFT"
          }
        },
        "plotarea": {
          "margin": "10px 25px 70px 46px"
        },
        "scale-y": {
          "values": "0:100:25",
          "line-color": "none",
          "guide": {
            "line-style": "solid",
            "line-color": "#d2dae2",
            "line-width": "1px",
            "alpha": 0.5
          },
          "tick": {
            "visible": false
          },
          "item": {
            "font-color": "#8391a5",
            "font-family": "Arial",
            "font-size": "10px",
            "padding-right": "5px"
          }
        },
        "scale-x": {
          "line-color": "#d2dae2",
          "line-width": "2px",
          "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          "tick": {
            "line-color": "#d2dae2",
            "line-width": "1px"
          },
          "guide": {
            "visible": false
          },
          "item": {
            "font-color": "#8391a5",
            "font-family": "Arial",
            "font-size": "10px",
            "padding-top": "5px"
          }
        },
        "legend": {
          "layout": "x4",
          "background-color": "none",
          "shadow": 0,
          "margin": "auto auto 15 auto",
          "border-width": 0,
          "item": {
            "font-color": "#707d94",
            "font-family": "Arial",
            "padding": "0px",
            "margin": "0px",
            "font-size": "9px"
          },
          "marker": {
            "show-line": "true",
            "type": "match",
            "font-family": "Arial",
            "font-size": "10px",
            "size": 4,
            "line-width": 2,
            "padding": "3px"
          }
        },
        "crosshair-x": {
          "lineWidth": 1,
          "line-color": "#707d94",
          "plotLabel": {
            "shadow": false,
            "font-color": "#000",
            "font-family": "Arial",
            "font-size": "10px",
            "padding": "5px 10px",
            "border-radius": "5px",
            "alpha": 1
          },
          "scale-label": {
            "font-color": "#ffffff",
            "background-color": "#707d94",
            "font-family": "Arial",
            "font-size": "10px",
            "padding": "5px 10px",
            "border-radius": "5px"
          }
        },
        "tooltip": {
          "visible": false
        },
        "series": [{
          "values": [69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69],
          "text": "Kenmore",
          "line-color": "#389f99",
          "line-width": "2px",
          "shadow": 0,
          "marker": {
            "background-color": "#fff",
            "size": 3,
            "border-width": 1,
            "border-color": "#389f99",
            "shadow": 0
          },
          "palette": 0
        }, {
          "values": [51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48],
          "text": "Craftsman",
          "line-width": "2px",
          "line-color": "#38649f",
          "shadow": 0,
          "marker": {
            "background-color": "#fff",
            "size": 3,
            "border-width": 1,
            "border-color": "#38649f",
            "shadow": 0
          },
          "palette": 1,
          "visible": 1
        }, {
          "values": [42, 43, 30, 50, 31, 48, 55, 46, 48, 32, 50, 38],
          "text": "DieHard",
          "line-color": "#ee1044",
          "line-width": "2px",
          "shadow": 0,
          "marker": {
            "background-color": "#fff",
            "size": 3,
            "border-width": 1,
            "border-color": "#ee1044",
            "shadow": 0
          },
          "palette": 2,
          "visible": 1
        }, {
          "values": [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24],
          "text": "Land's End",
          "line-color": "#ff8f00",
          "line-width": "2px",
          "shadow": 0,
          "marker": {
            "background-color": "#fff",
            "size": 3,
            "border-width": 1,
            "border-color": "#ff8f00",
            "shadow": 0
          },
          "palette": 3
        }]
      };

    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: 305,
      width: '100%'
    });
	
	
	var options = {
    chart: {
      type: 'radialBar',
      height: 300,
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',
  
        },
        track: {
          show: false,
        },
        dataLabels: {
          name: {
              fontSize: '18px',
          },
          value: {
              fontSize: '16px',
              color: '#50649c',
          },          
        }
      },
    },
    colors: ['#2444e8', '#ec4b71', '#45b6c6'],
    stroke: {
      lineCap: 'round'
    },
    series: [67, 75, 98],
    labels: ['Sent', 'Open', 'Not Open'],
    legend: {
      show: true,
      floating: true,
      position: 'left',
      offsetX: 60,
      offsetY: 0,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: true,
                floating: true,
                position: 'left',
                offsetX: 10,
                offsetY: 0,
            }
        }
    }]
  }
  
  
  var chart = new ApexCharts(
    document.querySelector("#email-campaign"),
    options
  );
  
  chart.render();
	
}); // End of use strict


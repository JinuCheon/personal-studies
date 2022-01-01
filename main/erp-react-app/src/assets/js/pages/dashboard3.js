//[Dashboard Javascript]

//Project:	Pearl Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	var options = {
        series: [{
          name: 'series1',
          data: [189, 156, 155, 118, 167, 159, 178, 223, 195, 201, 143]
        }],
        chart: {
			foreColor: '#fff',
          height: 400,
			width: 438,
          type: 'line',
			offsetY: 0,
			offsetX: -38,
			dropShadow: {
			  enabled: true,
			  top: 20,
			  left: 0,
			  blur: 10,
			  opacity: 0.5
			}
        },
		colors:['#ffffff'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
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
              return val + "%";
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
					show: false
				}
			},   
			yaxis: {
				lines: {
					show: false
				}
			},  
			row: {
				colors: undefined,
				opacity: 0.5
			},  
			column: {
				colors: undefined,
				opacity: 0.1
			},  
		}
      };

      var chart = new ApexCharts(document.querySelector("#statisticschart"), options);
      chart.render();
	
	
	var options = {
        series: [{
          name: 'series1',
          data: [178, 223, 195, 201, 143, 189, 156, 155, 118, 167, 159]
        }],
        chart: {
			foreColor: '#fff',
          height: 400,
			width: 438,
          type: 'line',
			offsetY: 0,
			offsetX: -38,
			dropShadow: {
			  enabled: true,
			  top: 20,
			  left: 0,
			  blur: 10,
			  opacity: 0.5
			}
        },
		colors:['#ffffff'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
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
				opacity: 0.5
			},  
			column: {
				colors: undefined,
				opacity: 0.1
			},  
		}
      };

      var chart = new ApexCharts(document.querySelector("#statisticschart2"), options);
      chart.render();
	
	
	var options = {
        series: [{
          name: 'Inflation',
          data: [189, 156, 123, 118]
        }],
        chart: {
			foreColor: '#fff',
          height: 195,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
			  columnWidth: '30%',
			  endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false,
        },
        colors:['#ffffff'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr"],
          position: 'bottom',
			
          labels: {
			show: true, 
			  style: {
				colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff']
			  },
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

      var chart = new ApexCharts(document.querySelector("#meetingschart"), options);
      chart.render();
	
	
	
	
	var options = {
		  chart: {
			  foreColor: '#fff',
			height: 395,
			type: 'line',
			stacked: false,
		  },
		  stroke: {
			width: [0, 2, 5],
			curve: 'straight'
		  },
		  plotOptions: {
			bar: {
			  columnWidth: '50%'
			}
		  },
		  colors: ['#2444e8', '#843cf7', '#45b6c6'],
		  series: [{
			name: 'Visitors',
			type: 'column',
			data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
		  }, {
			name: 'Session',
			type: 'area',
			data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
		  }, {
			name: 'Online',
			type: 'line',
			data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
		  }],
		  fill: {
			opacity: [0.85,0.1,1],
					gradient: {
						inverseColors: false,
						shade: 'dark',
						type: "vertical",
						opacityFrom: 0.85,
						opacityTo: 0.55,
						stops: [0, 100, 100, 100]
					}
		  },
		  labels: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],
		  markers: {
			size: 0
		  },
		  xaxis: {
			type:'datetime'
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
				  return  y.toFixed(0) + " views";
				}
				return y;

			  }
			}
		  },
		  legend: {
				position: 'top',
    			horizontalAlign: 'left',
			labels: {
			  useSeriesColors: true,
			},
		  }
		}

		var chart = new ApexCharts(
		  document.querySelector("#performance"),
		  options
		);

		chart.render();
	
	
	
	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_dataviz);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create map instance
	var chart = am4core.create("reports", am4maps.MapChart);

	// Set map definition
	chart.geodata = am4geodata_worldLow;

	// Set projection
	chart.projection = new am4maps.projections.Miller();

	// Create map polygon series
	var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

	// Exclude Antartica
	polygonSeries.exclude = ["AQ"];

	// Make map load polygon (like country names) data from GeoJSON
	polygonSeries.useGeodata = true;

	// Configure series
	var polygonTemplate = polygonSeries.mapPolygons.template;
	polygonTemplate.tooltipText = "{name}";
	polygonTemplate.fill = chart.colors.getIndex(0).lighten(0.5);

	// Create hover state and set alternative fill color
	var hs = polygonTemplate.states.create("hover");
	hs.properties.fill = chart.colors.getIndex(0);

	// Add image series
	var imageSeries = chart.series.push(new am4maps.MapImageSeries());
	imageSeries.mapImages.template.propertyFields.longitude = "longitude";
	imageSeries.mapImages.template.propertyFields.latitude = "latitude";
	imageSeries.data = [ {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Brussels",
	  "latitude": 50.8371,
	  "longitude": 4.3676
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Copenhagen",
	  "latitude": 55.6763,
	  "longitude": 12.5681
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Paris",
	  "latitude": 48.8567,
	  "longitude": 2.3510
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Reykjavik",
	  "latitude": 64.1353,
	  "longitude": -21.8952
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Moscow",
	  "latitude": 55.7558,
	  "longitude": 37.6176
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Madrid",
	  "latitude": 40.4167,
	  "longitude": -3.7033
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "London",
	  "latitude": 51.5002,
	  "longitude": -0.1262,
	  "url": "http://www.google.co.uk"
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Peking",
	  "latitude": 39.9056,
	  "longitude": 116.3958
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "New Delhi",
	  "latitude": 28.6353,
	  "longitude": 77.2250
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Tokyo",
	  "latitude": 35.6785,
	  "longitude": 139.6823,
	  "url": "http://www.google.co.jp"
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Ankara",
	  "latitude": 39.9439,
	  "longitude": 32.8560
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Buenos Aires",
	  "latitude": -34.6118,
	  "longitude": -58.4173
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Brasilia",
	  "latitude": -15.7801,
	  "longitude": -47.9292
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Ottawa",
	  "latitude": 45.4235,
	  "longitude": -75.6979
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Washington",
	  "latitude": 38.8921,
	  "longitude": -77.0241
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Kinshasa",
	  "latitude": -4.3369,
	  "longitude": 15.3271
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Cairo",
	  "latitude": 30.0571,
	  "longitude": 31.2272
	}, {
	  "zoomLevel": 5,
	  "scale": 0.5,
	  "title": "Pretoria",
	  "latitude": -25.7463,
	  "longitude": 28.1876
	} ];

	// add events to recalculate map position when the map is moved or zoomed
	chart.events.on( "mappositionchanged", updateCustomMarkers );

	// this function will take current images on the map and create HTML elements for them
	function updateCustomMarkers( event ) {

	  // go through all of the images
	  imageSeries.mapImages.each(function(image) {
		// check if it has corresponding HTML element
		if (!image.dummyData || !image.dummyData.externalElement) {
		  // create onex
		  image.dummyData = {
			externalElement: createCustomMarker(image)
		  };
		}

		// reposition the element accoridng to coordinates
		var xy = chart.geoPointToSVG( { longitude: image.longitude, latitude: image.latitude } );
		image.dummyData.externalElement.style.top = xy.y + 'px';
		image.dummyData.externalElement.style.left = xy.x + 'px';
	  });

	}

	// this function creates and returns a new marker element
	function createCustomMarker( image ) {

	  var chart = image.dataItem.component.chart;

	  // create holder
	  var holder = document.createElement( 'div' );
	  holder.className = 'map-marker';
	  holder.title = image.dataItem.dataContext.title;
	  holder.style.position = 'absolute';

	  // maybe add a link to it?
	  if ( undefined != image.url ) {
		holder.onclick = function() {
		  window.location.href = image.url;
		};
		holder.className += ' map-clickable';
	  }

	  // create dot
	  var dot = document.createElement( 'div' );
	  dot.className = 'dot';
	  holder.appendChild( dot );

	  // create pulse
	  var pulse = document.createElement( 'div' );
	  pulse.className = 'pulse';
	  holder.appendChild( pulse );

	  // append the marker to the map container
	  chart.svgContainer.htmlElement.appendChild( holder );

	  return holder;
	}

	}); // end am4core.ready()
	
	
	
	
	
}); // End of use strict

$(function () {
  'use strict';
	
	
	
	
	window.Apex = {
		  stroke: {
			width: 3
		  },
		  markers: {
			size: 0
		  },
		  tooltip: {
			fixed: {
			  enabled: true,
			}
		  }
		};

		var randomizeArray = function (arg) {
		  var array = arg.slice();
		  var currentIndex = array.length,
			temporaryValue, randomIndex;

		  while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

		// data for the sparklines that appear below header area
		var sparklineData = [178, 223, 195, 201, 143, 189, 156, 155, 118, 167, 159, 178, 223, 195, 201, 143, 189, 156, 155, 118, 167, 159, 178, 223 ];

		var spark2 = {
		  chart: {
			type: 'area',
			height: 415,
			sparkline: {
			  enabled: true
			},
			  
			dropShadow: {
			  enabled: true,
			  top: 20,
			  left: 0,
			  blur: 10,
			  opacity: 0.5
			}
		  },
		  stroke: {		  
			show: true,
			width: 5,
			curve: 'smooth'
		  },
		  fill: {
			opacity: 0.1,
			gradient: {
			  enabled: false
			}
		  },
		  series: [{
			data: randomizeArray(sparklineData)
		  }],
		  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
		  yaxis: {
			min: 0
		  },
		  xaxis: {
			type: 'datetime',
		  },
		  colors: ['#ffffff'],
		  subtitle: {
			offsetX: 0,
			style: {
			  fontSize: '14px',
			  cssClass: 'apexcharts-yaxis-title'
			}
		  }
		}


		var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
		spark2.render();
	
	
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
	
	
	
	
		// bar chart
		$(".bar").peity("bar");	
	

}); // End of use strict

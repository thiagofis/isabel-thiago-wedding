// ------------------------------------------------
// Project Name: Mixio Coming Soon Template
// Project Description: Mixio - awesome coming soon template to kick-start your project
// Tags: mixio, coming soon, under construction, template, coming soon page, html5, css3
// Version: 1.0.0
// Build Date: July 2018
// Last Update: July 2018
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: map-dark.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Google Map Parameters
//  2. Google Map Custom Marker Icon
//  3. Style Of The Map
//  4. Google Map Options
//  5. Inizialize The Map
//  6. Custom Marker
//  7. Custom zoom-in/zoom-out Buttons
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {
  // Insert Your Google Maps Parameters
  var latitude = -22.935726, 
    longitude = -43.580764,
    map_zoom = 16;
	
  var condominioCalifornia = new google.maps.LatLng(-22.931992, -43.576702);
  var jardimMagarca = new google.maps.LatLng(-22.935726, -43.580764);	
  var parkShopping = new google.maps.LatLng(-22.927144, -43.574778);	

  // Google Map Custom Marker Icon
  var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  //var marker_url = ( is_internetExplorer11 ) ? 'img/location/location-light.png' : 'img/location/location-light.svg';


    var main_color = '#160c37',
      saturation_value= 1,
      brightness_value= 5;

      // Style Of The Map
      var darkStyle= [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
             // "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ];

      
	  // Style Of The Map
      var silverStyle= [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];

	  
	  var customStyle = [
		{
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
	  ]
	  
	  // Google Map Options
      var map_options = {
            center: condominioCalifornia,
            zoom: map_zoom,
            gestureHandling: 'cooperative',
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
           styles: customStyle,
        }

      // Inizialize The Map
      var map = new google.maps.Map(document.getElementById('google-container'), map_options);

      // Custom Marker
      var marker = new google.maps.Marker({
          position: jardimMagarca,
          map: map,
          visible: true,
        //icon: marker_url,
      });
	  
	  var marker = new google.maps.Marker({
          position: parkShopping,
          map: map,
          visible: true,		  
		  icon: {
				labelOrigin : new google.maps.Point(-21, 0),
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: '#FFFFFF',
				fillOpacity: 1,
				strokeColor: '#303030',
				strokeOpacity: 0.9,
				strokeWeight: 3,
				scale: 10
			}
      });
	  
	  
	  var marker = new google.maps.Marker({
          position: parkShopping,
          map: map,
          visible: true,
		  label: {
			  text: "Park Shopping Campo Grande",
			  fontWeight: "800",
			  fontSize: "17px"
		  },
		  icon: {
				labelOrigin : new google.maps.Point(-32, 0),
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: '#FFFFFF',
				fillOpacity: 1,
				strokeColor: '#303030',
				strokeOpacity: 0.9,
				strokeWeight: 3,
				scale: 4
			}
      });
	  
	  
	  
	  
	   createRoute(map);
	  
	  
	  
	  
	       

	  function createRoute(map){
		  
		  var route = [
          {lat:-22.926950, lng:-43.573719},
          {lat:-22.927177, lng:-43.573637},		  
          //{lat:-22.927177, lng:-43.573596},
          {lat:-22.927366, lng:-43.573472},
          {lat:-22.927517, lng:-43.573226},
          {lat:-22.927707, lng:-43.573082},
          {lat:-22.928028, lng:-43.573041},
          {lat:-22.928180, lng:-43.573308},
          {lat:-22.928350, lng:-43.573534},
          {lat:-22.928520, lng:-43.573637},
          {lat:-22.928785, lng:-43.573863},
          {lat:-22.928993, lng:-43.574027},
          {lat:-22.929277, lng:-43.574089},
          {lat:-22.929580, lng:-43.574068},
          {lat:-22.929788, lng:-43.574068},
          {lat:-22.930129, lng:-43.574212},
          {lat:-22.930413, lng:-43.574274},
          {lat:-22.930564, lng:-43.574253},
          {lat:-22.930848, lng:-43.574335},
          {lat:-22.931094, lng:-43.574335}, 
          {lat:-22.931643, lng:-43.574479},
          //{lat:-22.931587, lng:-43.574521},
          {lat:-22.931889, lng:-43.574623},
          {lat:-22.932135, lng:-43.574787},
          {lat:-22.932343, lng:-43.574849},
          {lat:-22.932608, lng:-43.575054},
          //{lat:-22.932808, lng:-43.575141},
          {lat:-22.932927, lng:-43.575281},
          //{lat:-22.933092, lng:-43.575485},
          {lat:-22.933210, lng:-43.575603},
          //{lat:-22.933289, lng:-43.575689},
          {lat:-22.933368, lng:-43.575807},
          //{lat:-22.933487, lng:-43.575903},
          {lat:-22.933606, lng:-43.576043},
          //{lat:-22.933665, lng:-43.576139},
          {lat:-22.933784, lng:-43.576279},
          //{lat:-22.933892, lng:-43.576386},
          {lat:-22.934001, lng:-43.576493},
          //{lat:-22.934110, lng:-43.576590},
          {lat:-22.934169, lng:-43.576729},
          //{lat:-22.934208, lng:-43.576912},
          {lat:-22.934297, lng:-43.576998},
          //{lat:-22.934307, lng:-43.577159},
          {lat:-22.934357, lng:-43.577277},
          //{lat:-22.934416, lng:-43.577480},
          {lat:-22.934431, lng:-43.577779},
          //{lat:-22.934451, lng:-43.577951},
          {lat:-22.934491, lng:-43.578091},
          //{lat:-22.934540, lng:-43.578219},
          {lat:-22.934590, lng:-43.578380},
          //{lat:-22.934639, lng:-43.578488},
          {lat:-22.934708, lng:-43.578648},
          //{lat:-22.934827, lng:-43.578777},
          {lat:-22.934837, lng:-43.578917},
          //{lat:-22.934906, lng:-43.579067},
          {lat:-22.934995, lng:-43.579174},
          //{lat:-22.935024, lng:-43.579346},
          {lat:-22.935123, lng:-43.579378},
          //{lat:-22.935173, lng:-43.579539},
          {lat:-22.935242, lng:-43.579657},
          //{lat:-22.935301, lng:-43.579807},
          {lat:-22.935390, lng:-43.579957},
          //{lat:-22.935439, lng:-43.580086},
          {lat:-22.935548, lng:-43.580204},
          //{lat:-22.935647, lng:-43.580344},
          {lat:-22.935726, lng:-43.580451},
          //{lat:-22.935815, lng:-43.580526},
          {lat:-22.935884, lng:-43.580644}
        ];
		  
		for (i = 0; i < route.length; i++) { 
		  new google.maps.Marker({
			map: map,
			position: route[i],
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: '#49ABE7',
				fillOpacity: 1,
				strokeColor: '#5A91DA',
				strokeOpacity: 0.9,
				strokeWeight: 2,
				scale: 4
			}
		  });
		}
		  
		
	  }		  

	
      // Custom zoom-in/zoom-out Buttons
      function CustomZoomControl(controlDiv, map) {

          var controlUIzoomIn= document.getElementById('zoom-in'),
            controlUIzoomOut= document.getElementById('zoom-out');
          controlDiv.appendChild(controlUIzoomIn);
          controlDiv.appendChild(controlUIzoomOut);

        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom()+1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom()-1)
        });
      }

      var zoomControlDiv = document.createElement('div');
      var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);

});

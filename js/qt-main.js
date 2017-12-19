/**
 *
 *
 *
 *  	Main Theme Script File
 *  	LIST HERE ALL THE DEPENDENCIES. THEY WILL BE IMPORTED AND MINIFIED IN THE PRODUCTION VERSION
 *
 *
 *
 *  	THIS FILE IS COMBINED AND MINIFIED INTO js/min/qt-main-min.js
 *  	TO USE THE OPEN VERSION, SET QT_DEBUG TO FALSE IN FUNCTIONS.PHP OR SET DEBUG TO YES IN THE THEME'S CUSTOMIZER
 *
 *
 * 		Dependencies:
 *	 	==============================================
 *
 *
 * 		Parts of this file:
 * 		==================================================
 * 		01. Helpers
 * 		02. Theme functions
 *   	03. qwLoadedTheme: Functions to execute once the contents are fully loaded 
 *  	04. qwInitTheme
 *  	05. Page Ready Trigger
 *  
 *  
 **/



(function($){

	"use strict";

		$.fn.qtparticlesJs = function(){
		if($("body").hasClass("mobile")){
			return;
		}
		$(".qt-particles").each(function(i,c){
			console.log("particlesJs");
			var that= $(this),
				boxid = that.attr("id");
			console.log(boxid);
			particlesJS(boxid, {
				"particles": {
					"number": {
						"value": 160,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": !that.attr("data-color") ? "#FFFFFF" : that.attr("data-color")
					},
					"shape": {
						"type": "polygon",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 3
						}
					},
					"opacity": {
						"value":  !that.attr("data-opacity") ? "0.5" : that.attr("data-opacity"),
						"random": true,
						"anim": {
							"enable": true,
							"speed": 1,
							"opacity_min": 0,
							"sync": false
						}
					},
					"size": {
						"value": 5,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 50,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": that.attr("data-lines") ? true : false,
						"distance": 150,
						"color": !that.attr("data-color") ? "#FFFFFF" : that.attr("data-color"),
						"opacity": !that.attr("data-opacity") ? "0.5" : that.attr("data-opacity"),
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": !that.attr("data-speed") ? 1 : that.attr("data-speed"),
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 140,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});
		});
	}


})(jQuery);
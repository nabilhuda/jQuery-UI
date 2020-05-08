jQuery(document).ready(function(){

	// colorpicker
	function changeHobe() {
		var red = jQuery('.red').slider('value'),
			green = jQuery('.green').slider('value'),
			blue = jQuery('.blue').slider('value'),
			rgb = 'rgb('+red+','+green+','+blue+')';

		jQuery('.box').text(rgb);
		jQuery('.box').css({'background-color' : rgb});
	}

	jQuery('.slider').slider({
		'max' : 255,
		'change' : changeHobe,
		'slide' : changeHobe,
		// 'orientation' : 'vertical',
		'animate' : true
	});

	jQuery('.red').slider('value', 100);
	jQuery('.green').slider('value', 50);
	jQuery('.blue').slider('value', 20);

	// Master volume
	jQuery('.master-volume').slider({
		'value' : 60,
		'orientation' : 'horizontal',
		'range' : 'min',
		'animate' : true
	});

	// Price range
	jQuery('.price-range').slider({
		'range' : true,
		'min' : 0,
		'max' : 100,
		'values' : [25, 75],
		'slide' : function(jakisu, nabil) {
			jQuery('#price').val('$'+nabil.values[0]+' - $'+nabil.values[1]);
		}
	});
	jQuery('#price').val('$'+jQuery('.price-range').slider('values', 0)+' - $'+jQuery('.price-range').slider('values', 1));

	// Tooltip
	jQuery('.toolbtn').tooltip();


});
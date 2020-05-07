jQuery(document).ready(function(){

	// accordion
	jQuery('.something').accordion({
		'collapsible' : true
	});

	// autocomplete
	var result = ['ami', 'apni', 'tumi', 'amra', 'tara', 'sobai'];
	jQuery('.input').autocomplete({'source' : result});

	// checkbox
	jQuery('.checkboxes').buttonset();

	// datepicker
	jQuery('input.time').datepicker({
		'changeMonth' : true,
		'changeYear' : true
	});

	// dialog
	jQuery('.popupbtn').click(function(){
		jQuery('.popupbox').dialog({
			'show' : {
				'effect' : 'explode',
				'duration' : 1000
			},
			'hide' : {
				'effect' : 'blind',
				'duration' : 1000
			}
		});

		return false;
	});

	// menu
	jQuery('.firstmenu').menu();

	// selectmenu
	jQuery('.menuselect').selectmenu();

	// tabs
	jQuery('.some-tabs').tabs();
	



});
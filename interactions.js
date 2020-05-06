jQuery(document).ready(function(){

	// draggable
	jQuery('.box').draggable({
		'cursor' : 'move',
		'containment' : '.big-box'
	});

	// draggable & droppable
	jQuery('.box2').draggable({
		'cursor' : 'move'
	});
	jQuery('.box3').droppable({'drop' : function(){
		alert('kaj hoice');
	}});

	// resizable
	jQuery('.box4').resizable({'animate' : true});

	// selectable
	jQuery('.box5').selectable();

	// sortable
	jQuery('.box6').sortable({
		'connectWith' : '.box7'
	});
	jQuery('.box7').sortable({
		'connectWith' : '.box6'
	});




});
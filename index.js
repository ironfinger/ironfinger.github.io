$(document).ready(function(){
	$('.parallax').parallax();
});

var options = [
	{selector: '#row1', offset: 400, callback: function(el) {
		Materialize.showStaggeredList($(el));
	}},
	{selector: '#row2', offset: 400, callback: function(el){ 
		Materialize.showStaggeredList($(el));
	}}
];
Materialize.scrollFire(optons);
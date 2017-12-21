$(document).ready(function(){
	$('.parallax').parallax();
});

var options = [
	{selector: "#row2", offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	}},
	{selector: "#row3", offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	}}
];
Materialize.scrollFire(options);
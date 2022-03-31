$(function() {
	$("#spinner").spinner({
		min: 4,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});


$(function() {
	  $("#gender").selectmenu();
});

$(function() {
	  $("#style").selectmenu();
});

$(function() {
	  $("#colour").selectmenu();
});


$(function() {
	$("#slider-range").slider({
		range:true,
		min: 0,
		max: 300,
		values: [ 20, 280 ],
		slide: function( event, ui ){
			$("#amount").val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	
	$("#amount").val(" $" + $(" #slider-range").slider( "values", 0 ) + " - $" + $("#slider-range").slider( "values", 1 ) );
});



$(function() {
	$( "#Search" ).on("click", function(){
		
		var gender = $("#gender").val();
	    var shoeSize =  $("#spinner").val();
		var shoeStyle =  $("#style").val();
        var shoeColor =  $("#colour").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<div>";
		   for (var i in data.shoes) {
			   if (( gender == data.shoes[i].gender) || (gender=="Kids"))
               if (( shoeColor == data.shoes[i].colour))
			   if (( shoeStyle == data.shoes[i].style))
			   if (( data.shoes[i].price >= minPrice && data.shoes[i].price <= maxPrice ))
               for(var j in data.shoes[i].size){
                   if (shoeSize == data.shoes[i].size[j]){
			   {
				   {
					   {
						   {
							   output +="<div class='type'>" + data.shoes[i].name + "<h2 class='hi'><p>" + "$" + data.shoes[i].price +"</p></h2>" + "<img src=" + data.shoes[i].picture + ">" + "<p>" + data.shoes[i].description + "<button><a class='See-button' href='" + data.shoes[i].url + "'>See More</a></button></div>";
						   } } } } } } }
                           
				output+="</div>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
});

$( function() {
    $( "#tabs" ).tabs();
});

function shoe_img(side_img){
    var zoom = document.getElementById("shoe");
    zoom.src = side_img.src;
    var large_img = document.getElementById("zoom");
    large_img.href = side_img.src;
}


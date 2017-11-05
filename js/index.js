$(document).ready(function(){

	 //create cities array
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

	function changeImage(){
	//build options based on cities
		cities.forEach(function(city){
		  	$("#city-type").append("<option value="+ city +">"+ city +"</option>");
		})
	};
	//what happens when function is run
	changeImage();  

	//switch background image when city is selected from the dropdown
   $('form').on('change', '#city-type',function(){
	    var city = $('#city-type').val();
	    switch(city) {
	      case "NYC":
	        $('body').attr('class','nyc');
	        break;
	      case "SF":
	        $('body').attr('class','sf');
	        break;
	      case "LA":
	        $('body').attr('class','la');
	        break;
	      case "ATX":
	        $('body').attr('class','austin');
	        break;
	      case "SYD":
	        $('body').attr('class','sydney');
	        break;
	    }
	});
});

	//Fred- I didn't use if/else here, instead applied what you showed us with swucth/case;
	//I wasn't sure if there was something else we need to do to include if/esle


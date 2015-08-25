Sandwich = (function(sandwich){

	var bread = "Not Chosen";

	sandwich.setBread = function(breadChoice){
		bread = breadChoice;
	};

  sandwich.getBread = function() {
    return bread;
  };

	return sandwich;

})(Sandwich);

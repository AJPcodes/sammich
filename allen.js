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

Sandwich = (function(sandwich){

	var meat = [];

	sandwich.addMeat = function(meatChoice){
		meat.push(meatChoice);
		Sandwich.updateTotal(2);
	};

  sandwich.getMeat = function() {
    if (meat.length > 0) {
    	return meat.reduce(function(a,b){
    		return a + " " + b;
    	})
    } else {
    	return "no meat"
    }
  };

	return sandwich;

})(Sandwich);

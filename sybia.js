// Cheese, condiments, veggie//
Sandwich = (function(sandwich){

	var cheese = [];

	sandwich.addCheese = function(cheesechoice){
			cheese.push(cheesechoice);
			sandwich.updateTotal(.85);
	};

    sandwich.getCheese = function() {
    	var stringCheese ="";

    	if (cheese.length > 0) {

   			for(i = 0 ; i < cheese.length ; i++){

   	 		stringCheese += cheese[i] + " ";
  		};
  			return stringCheese
  		} else {

  			return "No Cheese"
  	 }

  	}

  	return sandwich

})(Sandwich);

Sandwich = (function(sandwich){

	var condiments = [];

	sandwich.addCondiments = function(condimentschoice){
			condiments.push(condimentschoice);
	};

    sandwich.getCondiments = function() {
    	var condimentsString ="";

    	if (condiments.length > 0) {

   			for(i = 0 ; i < condiments.length ; i++){

   	 		condimentsString += condiments[i] + " ";
  		};
  			return condimentsString
  		} else {

  			return "No Condiments"
  	 }

  	}

  	return sandwich

})(Sandwich);

Sandwich = (function(sandwich){

	var veggies = [];

	sandwich.addVeggies = function(veggieschoice){
			veggies.push(veggieschoice);
			sandwich.updateTotal(.25);
	};

    sandwich.getVeggies = function() {
    	var veggiesString ="";

    	if (veggies.length > 0) {

   			for(i = 0 ; i < veggies.length ; i++){

   	 		veggiesString += veggies[i] + " ";
  		};
  			return veggiesString
  		} else {

  			return "No Veggies"
  	 }

  	}

  	return sandwich

})(Sandwich);





// Sandwich = (function(condiments){

// 	var cheese = [];

// 	condiments.addCondiments = function(condimentschoice){
// 		condiments.push(condimentchoice);
// 	};

//   condiments.getCondiments = function() {
//     return condiments;
//   };


// })(Sandwich);


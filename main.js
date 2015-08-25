var Sandwich = (function(){

	//local variables go here//
	var total = 2;



	//this is the sandwich object//
	return {

			updateTotal: function(price){
				total += price;
			},

			getTotal: function(){
					return total;
			},

			displaySandwich: function(){

				var theSandwich = document.getElementById('sandwich');

				theSandwich.innerHTML = "";

				var sandyString = ""

				sandyString += "Your bread is " + Sandwich.getBread();

				// sandyString += "Your meat is" + Sandwich.getMeat();

				// sandyString += "Your cheese is " + Sandwich.getCheese();

				// sandyString += "Your condiments are " + Sandwich.getCondiments();

				// sandyString += "Your veggies are " + Sandwich.getVeggies();

				theSandwich.innerHTML += sandyString;


			}

	 };


})();

var Sandwich = (function(){

	//local variables go here//
	var total = 2;



	//this is the sandwich object//
	return {

			updateTotal: function(price){
				total += price;
			},

			getTotal: function(){
					return "$" + total.toString();
			},

			displaySandwich: function(){

				var theSandwich = document.getElementById('sandwich');

				theSandwich.innerHTML = "";

				var sandyString = ""

				sandyString += "Your bread: " + Sandwich.getBread() + "<br>";

				 sandyString += "Your meat(s):" + Sandwich.getMeat()+ "<br>";

				 sandyString += "Your cheese(s): " + Sandwich.getCheese() + "<br>";

				 sandyString += "Your condiment(s): " + Sandwich.getCondiments() + "<br>";

				 sandyString += "Your veggie(s): " + Sandwich.getVeggies() + "<br>";

				 sandyString += "Total: " + Sandwich.getTotal();

				theSandwich.innerHTML += sandyString;

			}
	 };
})();


document.getElementById('breadButton').addEventListener('click', function(){

	var choice = document.getElementById('breads').value;
	Sandwich.setBread(choice);
	Sandwich.displaySandwich();

});

document.getElementById('meatButton').addEventListener('click', function(){

	var choice = document.getElementById('meat').value;
	Sandwich.addMeat(choice);
	Sandwich.displaySandwich();

});

document.getElementById('cheeseButton').addEventListener('click', function(){

	var choice = document.getElementById('cheese').value;
	Sandwich.addCheese(choice);
	Sandwich.displaySandwich();

});

document.getElementById('condiButton').addEventListener('click', function(){

	var choice = document.getElementById('condiments').value;
	Sandwich.addCondiments(choice);
	Sandwich.displaySandwich();

});

document.getElementById('veggieButton').addEventListener('click', function(){

	var choice = document.getElementById('veggies').value;
	Sandwich.addVeggies(choice);
	Sandwich.displaySandwich();

});



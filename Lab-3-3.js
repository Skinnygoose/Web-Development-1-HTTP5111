//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========




//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD ISs MET.
let sum = 0;

let price =[]
while (sum < 35 ) {
	
	
	//GET ITEM COST FROM USER
	let value =prompt("Enter the prices of the cart");
	
	//CONVERT USER INPUT TO A NUMBER
	let modValue = parseInt(value) ;
	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	sum = sum + modValue;
	
	//PUSH ITEM COST TO CART ARRAY
	price.push(value)
	
}
let priceSummary = price.join(" | ")

console.log(priceSummary);



//SEND POPUP MESSAGE TO USER

alert("“Your shipping for this order will be free ")

//SEND OUTPUT TO CONSOLE


console.log("items prices " + priceSummary);











	
	
	
	
	
	
	
	
	






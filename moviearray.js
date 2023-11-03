//here we are creating variables for containing movie names .

let movie1 = "avengers";
let movie2 = "bad boys";
let movie3 = "superman";
let movie4 = "tron";
let movie5 = "avatar";
let movie6 = "flash";
let movie7 = "jamesbond";

//here we create an array to contain all movie variables 
const mmoviearray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
let intPop = 0; // refer to comment inside while loop


//we are using here  while loop so if the conditions are not met the user will be trapped here untill the conditions are met
while (intPop < 1 || intPop > 7) {
  
  //here a popup will ask user to input a value 
  let popUp = prompt("which top 7 movie would you like ?", "pick a number 1-7");

  //this will convert user input to an integer so that it can be test against the loop conditions
  intPop = parseInt(popUp);

  // now this variable that we created whcich contains the integer that user typed to it has to be declared outside the loop to use it here 
}
//once the inout matches the conditions a pop up box will give ge this message and we are using intPop to displat he input in message 

// also since index start from we have to adjust the number to -1 so that it can give actual movie of that index
alert(" Number " + intPop + " on the list is " + mmoviearray[intPop - 1]);
// this is to print values of index at console 
for (let index = 0; index < mmoviearray.length; index++) {
  const element = mmoviearray[index];

  console.log(" Movie " + (index + 1) + " " + element);
}

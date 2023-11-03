
// Here we created some variables and within those variables we also created list of four people required

var input1 = "";
var correctNumber = 4;
var input3 = "";
var TeamMember1 = "Lap Wang"
var TeamMember2 = "Sion Lee"
var TeamMember3 = "Yash Modi"
var TeamMember4 = "Bailey Liang"
//With prompt function here we create a pop up box that asks for the team number , so to do that we put the value of variable input1 to prompt 

var input1 = prompt("Which team number you belong to?");

//Now her we are testing the variable against the value that we will type ,so if the value typed is anyhing other than the number 4, it will print out "access denied "as directed in instructions

if(parseInt(input1) !== 4) {
alert("access denied")

}
// Now if we type the correct group number i.e. 4 in our case , and typing so will ask you for your first name
else{

 var Ininput3 = prompt("What is your first name ?")
 
 //Now when someone enters his/her first name code will try to match against the first name of different group members , so to do that we use switch function to test against multiple cases or conditions 

switch (Ininput3) {
  case "Lap": // if you type "lap"
    alert("Welcomeeees"+" "+TeamMember1) // pop up that welcomes with full name of team member by his full name 

    break; // we are using break because if the typed in firstname matches we want to  stop our code from executing

    //now same logic we explained above goes for all the casses or conditions below
  case "Sion":
    alert("Welcome"+" "+TeamMember2)
    
    break;
  case "Yash":
    alert("Welcome"+" "+TeamMember3)
    
    break;
  case "Bailey":
    alert("Welcome"+" "+TeamMember4)
    
    break;
    
    // If the typed in value does not match any case code will give out text with the following message

  default:
    alert("access denied ")
    
}
}

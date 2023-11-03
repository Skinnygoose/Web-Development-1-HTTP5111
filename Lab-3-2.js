//LAB 3 - ARRAYS & LOOPS - PART 2

//PM TEAM MEMBER ARRAY

let ourTeam = ["yousuf" , "wang", "lee" ,"kyle", "jennifer"]
//OUTPUT TEAM ARRAY TO JS CONSOLE

console.log(ourTeam)

//REMOVE LAST MEMBER

let n = ourTeam.pop()

console.log(ourTeam)
//ADD SEAN TO FRONT OF ARRAY

let sean = ourTeam.unshift("sean")
console.log(ourTeam)


//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort()
console.log(ourTeam)
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
let num = ourTeam.length

console.log("We have " +  num + " people in our team")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (let i = 0; i < ourTeam.length; i++) {
  let personNumber = i+1
  
  let nameWithNumber = ourTeam[i] + "is #NUM"+ personNumber;

  console.log(nameWithNumber);
  
}


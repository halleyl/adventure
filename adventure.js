// Define the size of the gameplay area
var maxX = 2
var maxY = 2

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Set a variable to control the loop
var treasureFound = false

// Get user's name
var name = prompt("Welcome, brave adventurer! What is your name?")

// Set while loop
while(!treasureFound) {
  var direction = prompt("Which direction would you like to go in? (north, south, east, west)")
  
  console.log(direction)
  
  // temp vars, only used for checking validity of user location after a move
  var newX
  var newY
  
  // See what new user location should be
  // Check if new user location is valid
  // Check if new user location is treasure
  
  if(direction == "north") {
    newX = userX
    newY = userY + 1
 
    // neither value is < 0, neither value is > max
    if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX
      userY = newY
            
    } else {
      console.log("There is a forbidding mountain range in that direction. You shall not pass!")
    }
    
  } else if(direction == "east") {
    newX = userX + 1
    newY = userY
    
    // neither value is < 0, neither value is > max
    if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction. You shall not pass!")
    }
  
  } else if(direction == "south") {
    newX = userX
    newY = userY - 1
    
    // neither value is < 0, neither value is > max
    if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction. You shall not pass!")
    }
    
  } else if(direction == "west") {
    newX = userX - 1
    newY = userY
    
    // neither value is < 0, neither value is > max
    
    if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction. You shall not pass!")
    }
    
  } else {
    console.log("Please enter a real direction")
  }
  
  // see if user location matches treasure
  if(userX == treasureX && userY == treasureY) {
    treasureFound = true
    console.log("You found the delicious donut!")
  }
}
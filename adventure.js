// Define the size of the gameplay area
var maxX = 4
var maxY = 4

// User starts at x0, y0 (bottom left of board)
var userX = 2
var userY = 2

// Hide the treasure, also with x y values
var treasureX = Math.floor(Math.random() * 5)
var treasureY = Math.floor(Math.random() * 5)


console.log("Psst, the treasure is at " + treasureX + "X and " + treasureY + "Y")

// Set a variable to control the loop
var treasureFound = false

// Get user's name
var name = prompt("Welcome, brave adventurer! What is your name?")

// Set variable cellChosen to center square, aka 12
var cellChosen = 12

// Set while loop
while(!treasureFound) {
  var direction = prompt("You are starting from the center of the board. Which direction would you like to go? (north, south, east, west)")
  
  // Here's a whole big thing to correspond X+Y coords with cell locations
  if(treasureX == 0 && treasureY == 0) {
    cellChosen = 20
  } else if(treasureX == 1 && treasureY == 0) {
    cellChosen = 21
  } else if(treasureX == 2 && treasureY == 0) {
    cellChosen = 22
  } else if(treasureX == 3 && treasureY == 0) {
    cellChosen = 23
  } else if(treasureX == 4 && treasureY == 0) {
    cellChosen = 24
  } else if(treasureX == 0 && treasureY == 1) {
    cellChosen = 15
  } else if(treasureX == 1 && treasureY == 1) {
    cellChosen = 16
  } else if(treasureX == 2 && treasureY == 2) {
    cellChosen = 17
  } else if(treasureX == 3 && treasureY == 1) {
    cellChosen = 18
  } else if(treasureX == 4 && treasureY == 1) {
    cellChosen = 19
  } else if(treasureX == 0 && treasureY == 2) {
    cellChosen = 10
  } else if(treasureX == 1 && treasureY == 2) {
    cellChosen = 11
  } else if(treasureX == 2 && treasureY == 2) {
    cellChosen = 12
  } else if(treasureX == 3 && treasureY == 2) {
    cellChosen = 13
  } else if(treasureX == 4 && treasureY == 2) {
    cellChosen = 14
  } else if(treasureX == 0 && treasureY == 3) {
    cellChosen = 05
  } else if(treasureX == 1 && treasureY == 3) {
    cellChosen = 06
  } else if(treasureX == 2 && treasureY == 3) {
    cellChosen = 07
  } else if(treasureX == 3 && treasureY == 3) {
    cellChosen = 08
  } else if(treasureX == 4 && treasureY == 3) {
    cellChosen = 09
  } else if(treasureX == 0 && treasureY == 4) {
    cellChosen = 00
  } else if(treasureX == 1 && treasureY == 4) {
    cellChosen = 01
  } else if(treasureX == 2 && treasureY == 4) {
    cellChosen = 02
  } else if(treasureX == 3 && treasureY == 4) {
    cellChosen = 03
  } else if(treasureX == 4 && treasureY == 4) {
    cellChosen = 04
  }
  
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
  
  document.getElementById(cellChosen).classList.add('spotmark')
  
  // see if user location matches treasure
  if(userX == treasureX && userY == treasureY) {
    treasureFound = true
    console.log("You found the delicious donut!")
  }
}
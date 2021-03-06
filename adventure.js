// Get user's name
var name = prompt("Welcome, brave adventurer! What is your name?")

// Enter greeting and capitalize first letter of name
document.querySelector("#greeting").innerHTML = ("Hi " + name.toUpperCase(name)[0] + name.slice(1) + ", click the button below to start your adventure!")

// Keep track of number of games played
var playCount = 0

function treasureHunt() {
  
  // Remove the old donut for the next playthrough
  if(playCount > 0) {
    var images = document.getElementsByTagName('img')
    while(images.length > 0) {
      images[0].parentNode.removeChild(images[0])
    }
  }
  
  // Define the size of the gameplay area
  var maxX = 4
  var maxY = 4

  // User starts at x2, y2 (center of board)
  var userX = 2
  var userY = 2

  // Hide the treasure, also with x y values
  var treasureX = Math.floor(Math.random() * 5)
  var treasureY = Math.floor(Math.random() * 5)

  // Location shown in console, in case you want spoilers
  console.log("Psst, the treasure is at " + treasureX + "X and " + treasureY + "Y")

  // Create conditional so treasure isn't in the cell that the user starts in (x2 y2) -- and start over if it is (see bottom)
  if(treasureX != 2 || treasureY != 2) {

    // Set a variable to control the loop
    var treasureFound = false

    // Big conditional to correspond X+Y coords with cell locations
    if(treasureX == 0 && treasureY == 0) {
      var cellChosen = 20
    } else if(treasureX == 1 && treasureY == 0) {
      var cellChosen = 21
    } else if(treasureX == 2 && treasureY == 0) {
      var cellChosen = 22
    } else if(treasureX == 3 && treasureY == 0) {
      var cellChosen = 23
    } else if(treasureX == 4 && treasureY == 0) {
      var cellChosen = 24
    } else if(treasureX == 0 && treasureY == 1) {
      var cellChosen = 15
    } else if(treasureX == 1 && treasureY == 1) {
      var cellChosen = 16
    } else if(treasureX == 2 && treasureY == 2) {
      var cellChosen = 17
    } else if(treasureX == 3 && treasureY == 1) {
      var cellChosen = 18
    } else if(treasureX == 4 && treasureY == 1) {
      var cellChosen = 19
    } else if(treasureX == 0 && treasureY == 2) {
      var cellChosen = 10
    } else if(treasureX == 1 && treasureY == 2) {
      var cellChosen = 11
    } else if(treasureX == 2 && treasureY == 2) {
      var cellChosen = 12
    } else if(treasureX == 3 && treasureY == 2) {
      var cellChosen = 13
    } else if(treasureX == 4 && treasureY == 2) {
      var cellChosen = 14
    } else if(treasureX == 0 && treasureY == 3) {
      var cellChosen = 5
    } else if(treasureX == 1 && treasureY == 3) {
      var cellChosen = 6
    } else if(treasureX == 2 && treasureY == 3) {
      var cellChosen = 7
    } else if(treasureX == 3 && treasureY == 3) {
      var cellChosen = 8
    } else if(treasureX == 4 && treasureY == 3) {
      var cellChosen = 9
    } else if(treasureX == 0 && treasureY == 4) {
      var cellChosen = 0
    } else if(treasureX == 1 && treasureY == 4) {
      var cellChosen = 1
    } else if(treasureX == 2 && treasureY == 4) {
      var cellChosen = 2
    } else if(treasureX == 3 && treasureY == 4) {
      var cellChosen = 3
    } else if(treasureX == 4 && treasureY == 4) {
      var cellChosen = 4
    }
    // End big conditional

    // Set while loop
    while(!treasureFound) {
      var direction = prompt("Which direction would you like to go? (north, south, east, west)")

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
          alert("There is a forbidding mountain range to the NORTH. Try a different direction.")
        }

      } else if(direction == "east") {
        newX = userX + 1
        newY = userY

        // neither value is < 0, neither value is > max
        if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX
          userY = newY
        } else {
          alert("There is a forbidding mountain range to the EAST. Try a different direction.")
        }

      } else if(direction == "south") {
        newX = userX
        newY = userY - 1

        // neither value is < 0, neither value is > max
        if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX
          userY = newY
        } else {
          alert("There is a forbidding mountain range to the SOUTH. Try a different direction.")
        }

      } else if(direction == "west") {
        newX = userX - 1
        newY = userY

        // neither value is < 0, neither value is > max

        if(newX >=0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX
          userY = newY
        } else {
          alert("There is a forbidding mountain range to the WEST. Try a different direction.")
        }

      } else {
        console.log("Please enter a real direction")
      }


      // see if user location matches treasure
      if(userX == treasureX && userY == treasureY) {
        treasureFound = true
        console.log("You found the delicious donut!")

        document.getElementById(cellChosen).innerHTML = "<img src='images/donut.png' alt=''>";
        
        document.querySelector("#greeting").innerHTML = ("You found the donut, " + name.toUpperCase(name)[0] + name.slice(1) + "! Click the button to adventure again.")
        
        // Increment play count
        playCount = playCount + 1
                
      }
    }
  } else {
    treasureHunt()
  }
}
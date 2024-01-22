//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelAnswer = prompt("what is the fuel level?");
let astroAboard = prompt("How many Astronaut are on board?");
let altitude = prompt("what alitude have the spaceship reach?");


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

   while (fuelAnswer > 5000 && fuelAnswer < 30000) {
    console.log("Enough Fuel to blast off");
    break;
  } if (fuelAnswer < 5000) {
    console.log("Too little fuel");
  } else if (fuelAnswer > 30000) {
    console.log("Too much fuel");
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (astroAboard > 1 && astroAboard < 7) {
    console.log("Enough people to take off");
    break;
  } if (astroAboard < 1) {
    console.log("No one aboard to take off");
  } else if (astroAboard > 7) {
    console.log("too many people to lift off");
  }
  
  //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

  let fuelUse = ((astroAboard * 100) * (50 / altitude) - fuelAnswer);


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

while (fuelUse > 1) {
  console.log("Orbit Acheieved")
} if (fuelUse < 1) {
  console.log("Failed to reach Orbit")
}
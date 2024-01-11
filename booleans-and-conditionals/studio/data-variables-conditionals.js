// Initialize Variables below
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true
let shuttleCabinReady = true
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (totalNumberOfCrew <= 7) {
    console.log("Launch");
} else {
    console.log ("Do Not Launch");
}
// add logic below to verify all astronauts are ready

if (crewStatus == "ready") {
    console.log("All Astronauts are ready");
} else {
    console.log("Not Ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMass >= 85000) {
    console.log("Maximum limit not exceeded");
} else {
    console.log("Weight exceeded");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTemperature <= -150 && fuelTemperature >= -300){
    console.log("Fuel Temp is good");
} else if (fuelTemperature >= -150) {
    console.log("it is too hot");
} else {
    console.log ("it is too cold");
}
// add logic below to verify the fuel level is at 100%

if (fuelLevel == 100) {
    console.log("All Fuel up and good to go");
} else {
    console.log("Need more fuel");
}
// add logic below to verify the weather status is clear

if (Weather == Clear) {
    console.log("Weather is good for launch");
} else {
    console.log("Weather is not suitable for launch");
}
// Verify shuttle launch can proceed based on above conditions

if (totalNumberOfCrew <= 7 && crewStatus == "ready" && totalMass >= 85000 && fuelTemperature <= -150 && fuelTemperature >= -300 && fuelLevel == 100 && Weather == Clear) {
    console.log("Shuttle can launch");
} else {
    console.log("Shuttle cannot launch");
}
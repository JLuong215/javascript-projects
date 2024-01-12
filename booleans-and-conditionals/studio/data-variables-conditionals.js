// Initialize Variables below
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true
let shuttleCabinReady = true
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
//Shuttle Launch
let date = ("Monday, 2019-03-18");
let time = ("10:05:34 am");
let astronautCount = 7;
let astronautStatus = ("ready");
let averageAstronautMassKg = 80.7;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let crewMassKg = astronautCount*averageAstronautMassKg;
let totalMassKg = crewMassKg+fuelMassKg+shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = ("clear");
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log("Launch");
} else {
    console.log ("Do Not Launch");
}
// add logic below to verify all astronauts are ready

if (astronautStatus == "ready") {
    console.log("All Astronauts are ready");
} else {
    console.log("Not Ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg >= 85000) {
    console.log("Maximum limit not exceeded");
} else {
    console.log("Weight exceeded");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius <= -150 && fuelTempCelsius >= -300){
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

if (weatherStatus == Clear) {
    console.log("Weather is good for launch");
} else {
    console.log("Weather is not suitable for launch");
}
// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && astronautStatus == "ready" && maximumMassLimit >= 85000 && maximumFuelTemp <= -150 && minimumFuelTemp >= -300 && fuelLevel == 100 && weatherStatus == Clear) {
    console.log("Have a safe flight.");
} else {
    console.log("Shuttle cannot launch");
}
console.log("All Systems are a go? initialting space Shuttle launch Sequence.");
console.log("----------------------------------------------------------------");
Console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + totalMassKg);
console.log("fuelTempCelsius: " + fuelTempCelsius);
console.log("weatherStatus: " + weatherStatus);
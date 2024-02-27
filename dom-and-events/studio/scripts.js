// Write your JavaScript code here.
  
// Remember to pay attention to page loading!


window.addEventListener("load", function() {
    console.log("page is fully loaded");
    let takeOff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort")
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let img = this.document.getElementById("rocket");

takeOff.addEventListener("click", function(){
    window.confirm("Confirm that the shuttle is ready for takeoff");
    flightStatus.innerHTML = ("Shuttle in flight.")
    shuttleBackground.style.backgroundColor = 'blue';
    shuttleHeight.innerHTML = ("10,000");
})

land.addEventListener("click", function(){
    window.confirm("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = ("The shuttle has landed.")
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = (0);
})
abortMission.addEventListener("click", function(){
    window.confirm("Confirm that you want to abort the mission.");
    flightStatus.innerHTML = ("Mission aborted.")
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = (0);
})
left.addEventListener("click", function(){
    img.style.left = `${img.offsetLeft - 10}px`;
})
right.addEventListener("click", function(){
    img.style.left = `${img.offsetLeft + 10}px`;
})
up.addEventListener("click", function(){
    img.style.top = `${img.offsetTop - 10}px`;
})
down.addEventListener("click", function(){
    img.style.top = `${img.offsetTop + 10}px`;
})
  });
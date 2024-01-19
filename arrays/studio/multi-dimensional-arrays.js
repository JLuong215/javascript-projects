let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food.split(',').sort();
equipment.split(',').sort();
pets.split(',').sort();
sleepAids.split(',').sort();

console.log(`${food}
${equipment}
${pets}
${sleepAids}`);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [
    food, 
    equipment,
    pets, 
    sleepAids

];

console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let selectCab = prompt("Which Cabinet do you need to select 0-3")

let number = selectCab;

switch (number){
  case "0":
    console.log(food);
    break;
  case "1":
    console.log(equipment);
    break;
  case "2":
    console.log(pets);
    break;
  case "3":
    console.log(sleepAids);
    break;
}

console.log(number);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (selectCab<3){
    console.log(number);
} else {
    console.log("Not possible");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let bug = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

let animals = [superChimpOne, salamander, superChimpTwo, dog, bug];
let astronautID = [];

function assigningRandomID() {
   let randomAstronautID = Math.floor((Math.random() * 10) + 1);
   return randomAstronautID;
}

let ID = 'astronautID';
for (let i = 0; i < animals.length; i++) {
   animals[i][ID] = assigningRandomID();
}

console.log(animals);
// Create an array to hold the animal objects.

function crewReport() {
   for (i = 0; i < animals.length; i++) {
     animal = animals[i]
     return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
   }
 }

 crewReport;
// Print out the relevant information about each animal.

console.log(animals);

// Start an animal race!
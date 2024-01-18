let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let num1 = num.toString();

console.log(num1.length);


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num2 = 123.45;

let num3 = num.toString;

console.log(num3.length);




//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (num()){
    let num1 = num,toString();
console.log(num1.length);
} else {
    console.log('not a number');
}
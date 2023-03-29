// exercise-1

let a = 3;
let b = 38;

if (a > b) {
    console.log(`The biggest number is ${a}`)
} else {
    console.log(`The biggest number is ${b}`);
}

// exercise-2

let newDog = 'Chihuahua';

console.log(newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog == 'Chihuahua') {
    console.log("I love Chihuahuas, it's my favorite dog breed(it's lie)");
} else {
    console.log("I don't care, i prefer cats")
}

// exercise-3

let getNum = prompt('Give me a number');

let num = parseFloat(getNum);

if (num % 2 == 0) {
    console.log(`${num} is an even number`)   
} else {
     console.log(`${num} is an odd number`);
}
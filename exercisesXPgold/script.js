// exercise-1

// let question = prompt('Which language do you speak?');

// let answer = question.toLowerCase();

// switch (answer) {
//   case "english":
//     alert("Hello");
//     break;
//   case "french":
//     alert("Bonjour");
//     break;
//   case "hebrew":
//     alert("Shalom");
//     break;
//     default:
//      alert("01110011 01101111 01110010 01110010 01111001");
//     break;
// }

// exercise-2

// let grade = prompt("What is your grade?");

// let gradeNum = Number(grade)

// if (grade > 90) {
//   console.log("A");
// } else if (grade > 80 && grade < 90) {
//   console.log("B");
// } else if (grade > 70 && grade < 80) {
//   console.log("C");
// } else {
//     console.log('D')
// }

// exercise-3

let verb = prompt("Give me any verb");

if (verb.length >=3 && verb.includes('ing')) {
    alert(verb.concat('ly'))
}else if(verb.length >=3 ){ 
    alert(verb.concat('ing'))
}else if (verb.length < 3) {
   alert(verb)
}
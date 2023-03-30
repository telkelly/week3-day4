
exercise-1
let askDate1 = prompt('Give me one data YYYY'), askDate2 = prompt("Give me other one YYYY");;

let date1 = Number(askDate1);
let date2 = Number(askDate2);

let currentData = new Date().getFullYear();

if (date1 < date2) {
  let younger1 = (currentData - date1) / 2;
  alert(`Your half date due to the older one ${date2 + younger1}`);
} else if (date1 > date2) {
    let younger2 = (date1 - currentData) / 2;
    alert(`Your half date due to the older one ${date2 + younger2}`);
}


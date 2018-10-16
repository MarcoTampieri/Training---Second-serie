let bottone = document.getElementById("average");

let numbers = [];
let somma = 0;
let media;

function calculMoyenne() {

    let askNumber = prompt("Please enter a whole number.\nNumbers entered: " + numbers);
    let convertNumber = parseInt(askNumber);

    if (Number.isInteger(convertNumber) != true) {
        alert("Not a whole number. Try again.");
    } else if (Number.isInteger(convertNumber) == true && convertNumber >= 0) {
        numbers.push(convertNumber);
        somma += convertNumber;
    } else if (Number.isInteger(convertNumber) == true && convertNumber < 0) {
        media = somma / numbers.length;
        alert("You entered the following " + numbers.length + " numbers: " + numbers + " for a total of " + somma + ". \nThe average between them is " + media);
    }
};

bottone.addEventListener("click", calculMoyenne);
let bottone = document.getElementById("average");

let numbers = [];
let somma = 0;
let media;

console.log("Numbers array" + numbers + "\n" + "Sum of entered numbers" + somma);

function calculMoyenne() {

    let askNumber = prompt("Please enter a whole number.");
    
    if (Number.isInteger(askNumber) == false) {
        alert("Not a whole number.");
        askNumber = prompt("Please enter a whole number.");
    };

    let convertNumber = parseInt(askNumber);
    numbers.push(convertNumber);
    somma += convertNumber;

    if (convertNumber < 0) {
        media = somma / numbers.length;
        alert("You entered " + numbers.length + " numbers. \nThe average between them is " + media);
    }

};
bottone.addEventListener("click", calculMoyenne);
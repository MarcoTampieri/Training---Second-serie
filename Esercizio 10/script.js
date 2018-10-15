let button = document.getElementById("sum");

function somme () {
    let numbers = [];
    let somma = 0;

    let firstNumber = prompt("Please enter the first number.");
    let numOne = parseInt(firstNumber);
    numbers.push(numOne);

    let secondNumber = prompt("Please enter the second number.");
    let numTwo = parseInt(secondNumber);
    numbers.push(numTwo);

    let thirdNumber = prompt("Please enter the third number.");
    let numThree = parseInt(thirdNumber);
    numbers.push(numThree);
    
    for (i = 0; i < numbers.length; i++) {
        somma += numbers[i];
    };
    alert("The sum of your numbers is " + somma);
};

button.addEventListener("click", somme);
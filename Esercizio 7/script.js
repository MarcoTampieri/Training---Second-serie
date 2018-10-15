let bottone = document.getElementById("choice");

function faireChoix() {
    let possibility = prompt("Please enter a following number: 1, 2 or 3");
    switch (possibility) {
        case "1":
            alert("1. Merci");
            break;
        case "2":
            alert("2. Bonjour");
            break;
        case "3":
            alert("3. Au revoir");
            break;
        default:
            alert("Pardon, que voulez-vous ?");
    };
};

bottone.addEventListener("click", faireChoix);
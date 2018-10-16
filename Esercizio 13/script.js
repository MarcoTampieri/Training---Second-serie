let bottone = document.getElementById("imc")

function calculIMC () {
    let height = prompt("Please enter your height.");
    let weight = prompt("Please enter your weight.");
    let calcul = Math.round(weight / (height * height) * 100) / 100;

    if (calcul < 16.5) {
        alert("Denutrition or starvation.");
    } else if (16.5 <= calcul && calcul < 18.5) {
        alert("IMC of " + calcul + " Thin.");
    } else if (18.5 <= calcul && calcul < 25) {
        alert("IMC of " + calcul + " Good body proportion.");
    } else if (25 <= calcul && calcul < 30) {
        alert("IMC of " + calcul + " Overweight.");
    } else if (30 <= calcul && calcul < 35) {
        alert("IMC of " + calcul + " Moderatelly obese.");
    } else if (35 <= calcul && calcul < 40) {
        alert("IMC of " + calcul + " Dangerously obese.") 
    } else if (calcul >= 40) {
        alert("IMC of " + calcul + " Morbidelly obese.")
    };
};

bottone.addEventListener("click", calculIMC);
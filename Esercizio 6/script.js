let tab = [-2, 1, 4];

function soustrait (x) {
    x -= 2;
    if (x >= 0) {
        return x;
    } else {
        return "Negative number!";
    };
};

function sottrazione () {
    alert("4 - 2 = " + soustrait(tab[2]));
    alert("-2 - 2 = " + soustrait(tab[0]));    
};

let bottone = document.getElementById("button");

bottone.addEventListener("click", sottrazione);
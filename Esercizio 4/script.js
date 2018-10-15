let tab = [-2, 1, 4];

function additionne (x) {
    return x += 2;
};

function somma () {
    alert("-2 + 2 = " + additionne(tab[0]));
    alert("4 + 2 = " + additionne(tab[2]))
};

let bottone = document.getElementById("button");

bottone.addEventListener("click", somma);
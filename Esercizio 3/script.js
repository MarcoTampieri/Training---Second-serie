let a = 3;
let b = 2;

function triple (x) {
   return x * 3;
};

function calculation () {
    alert("Triple of A is " + triple(a));
    alert("Triple of B is " + triple(b));
};

let bottone = document.getElementById("button");

bottone.addEventListener("click", calculation);
let area = document.getElementById("surface");

function surfaceRectangle () {
    let sideA = prompt("Please enter side A: ");
    let sideB = prompt("Please enter side B: ");
    let superfice = sideA * sideB;
    alert("The surface of the rectangle with sides " + sideA + " and " + sideB + " is equal to :\n" + superfice);
};

area.addEventListener("click", surfaceRectangle);

let perimetro = document.getElementById("perimeter");

function periRectangle () {
    let sideA = prompt("Please enter side A: ");
    let sideB = prompt("Please enter side B: ");
    let sideSum = sideA * 2 + sideB * 2;
    alert("The surface of the rectangle with sides " + sideA + " and " + sideB + " is equal to :\n" + sideSum);
};

perimetro.addEventListener("click", periRectangle);
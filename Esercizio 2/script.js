let radius = prompt("Please enter your circle's radius: ");
let picture = document.getElementById("circle");

function area () {
    let circleArea = radius * radius * Math.PI;
    picture.style.backgroundColor = "red";
    picture.style.borderRadius = "50%";
    picture.style.height = radius * 2 + "px";
    picture.style.width = radius * 2 + "px";
    alert("The surface of the circle with radius "+ radius + " is:\n" + circleArea);
};

let surface = document.getElementById("surface");

surface.addEventListener("click", area)
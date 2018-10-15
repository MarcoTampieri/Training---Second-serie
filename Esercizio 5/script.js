let b = 2;

let caseOne = document.getElementById("case1");
let caseTwo = document.getElementById("case2");
let caseThree = document.getElementById("case3");
let caseFour = document.getElementById("case4");
let caseFive = document.getElementById("case5");
let caseSix = document.getElementById("case6");
let caseSeven = document.getElementById("case7");
let caseEight = document.getElementById("case8");
let caseNine = document.getElementById("case9");
let caseTen = document.getElementById("case10");

function functionOne () {
    let a = 0;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a = b++;
    alert("For a = b++; \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseOne.addEventListener("click", functionOne);


function functionTwo () {
    let a = 0;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a = ++b;
    alert("For a = ++b \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseTwo.addEventListener("click", functionTwo);

function functionThree () {
    let a = 0;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a = b--;
    alert("For a = b-- \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseThree.addEventListener("click", functionThree);

function functionFour () {
    let a = 0;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a = --b;
    alert("For a = --b \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseFour.addEventListener("click", functionFour);

function functionFive () {
    let a = 0;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a += b++;
    alert("For a += b++ \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseFive.addEventListener("click", functionFive);

function functionSix () {
    let a = 1;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a += ++b;
    alert("For a += ++b \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseSix.addEventListener("click", functionSix);

function functionSeven () {
    let a = 1;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a -= b++;
    alert("For a -= b++ \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseSeven.addEventListener("click", functionSeven);

function functionEight () {
    let a = 1;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a -= ++b;
    alert("For a -= ++b \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseEight.addEventListener("click", functionEight);

function functionNine () {
    let a = 1;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a += b--;
    alert("For a += b-- \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseNine.addEventListener("click", functionNine);

function functionTen () {
    let a = 1;
    alert("Before, a is: " + a + "\nBefore, b is: " + b);
    a += --b;
    alert("For a += --b \na is: " + a + "\nb is: " + b);
    b = 2;
};
caseTen.addEventListener("click", functionTen);
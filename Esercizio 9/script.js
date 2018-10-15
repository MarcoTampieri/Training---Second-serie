let bottone = document.getElementById("button");

function testWhile() {
    let wordWithP = prompt("Enter a string containing the secret letter");
    while (wordWithP.includes("p") != true) {
        wordWithP = prompt("Enter a word containing the secret letter");
    };
    alert("Your word: '" + wordWithP + "' contains the secret letter 'p', you win.");
};

bottone.addEventListener("click", testWhile);
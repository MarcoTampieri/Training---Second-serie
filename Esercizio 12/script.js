let bottone = document.getElementById("convert");

function conversionTemperature() {
    let type = prompt("Please select the converion you wish to use corresponding to the appropriate number.");
    switch (type) {
        case "0":
            alert("Function cancelled.");
            break;
        case "1":
            let temperatureCToF = prompt("Please enter the temperature you wish to convert.");
            let cToF = (temperatureCToF * 9 / 5) + 32;
            alert(temperatureCToF + "°C equals " + cToF + "°F");
            break;
        case "2":
            let temperatureCToK = prompt("Please enter the temperature you wish to convert.");
            let changeCToK = parseInt(temperatureCToK);
            let cToK = changeCToK + 273.15;
            alert(temperatureCToK + "°C esuals " + cToK + "°K");
            break;
        case "3":
            let temperatureFToC = prompt("Please enter the temperature you wish to convert.");
            let fToC = (temperatureFToC - 32) / (9 / 5);
            alert(temperatureFToC + "°F equals " + fToC + "°C");
            break;
        case "4":
            let temperatureFToK = prompt("Please enter the temperature you wish to convert.");
            let fToK = (temperatureFToK - 32) / (9 / 5) + 273.15;
            alert(temperatureFToK + "°F equals " + fToK + "°K");
            break;
        case "5":
            let temperatureKToC = prompt("Please enter the temperature you wish to convert.");
            let changeKToC = parseInt(temperatureKToC);
            let kToC = changeKToC + 273.15;
            alert(temperatureKToC + "°K equals " + kToC + "°C");
            break;
        case "6":
            let temperatureKToF = prompt("Please enter the temperature you wish to convert.");
            let kToF = (temperatureKToF * 9 / 5) - 459.67;
            alert(temperatureKToF + "°K equals " + kToF + "°F");
            break;
        default:
            alert("Not a valid option.");
    };
};

bottone.addEventListener("click", conversionTemperature);
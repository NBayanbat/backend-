
const args = process.argv.slice(2)
const unit = args[1].toUpperCase()


if (unit === "C") {
    cToF(args[0]);
    function cToF(celsius) {
        const cTemp = celsius;
        const cToFahr = cTemp * 9 / 5 + 32;
        const message = "Celsius : " + cTemp + '\xB0 is ' + 'Fahrenheit : ' + cToFahr + '\xB0';
        console.log(message);
    }

} else if (unit === "F") {
    fToC(args[0]);
    function fToC(fahrenheit) {
        const fTemp = fahrenheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = 'Fahrenheit : ' + fTemp + '\xB0 is ' + "Celsius : " + fToCel + '\xB0.';
        console.log(message);
    }

} else {
    console.log("zuw ym oruul plssss")
}
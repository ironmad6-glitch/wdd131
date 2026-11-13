//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

//Calculate Wind Chill

const temp = 35
const wind = 3
let windChill = 0

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        document.getElementById("wind_chill").innerHTML = windChill
    } else {
        document.getElementById("wind_chill").innerHTML = "N/A"
    }
}

// const calculateWindChill = (tempC, speedKmh) => 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speedKmh, 0.16)) + (0.3965 * tempC * Math.pow(speedKmh, 0.16));
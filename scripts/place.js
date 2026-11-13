//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

//Calculate Wind Chill

const temp = 35;
const wind = 3;
const no_windChill = "N/A";

const calculateWindChill = (temp, wind) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

if (temp <= 10 && wind > 4.8) {
    document.getElementById("wind_chill").textContent = calculateWindChill(temp, wind).toFixed(2);
} else {
    document.getElementById("wind_chill").textContent = no_windChill;
}
// const calculateWindChill = (tempC, speedKmh) => 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speedKmh, 0.16)) + (0.3965 * tempC * Math.pow(speedKmh, 0.16));
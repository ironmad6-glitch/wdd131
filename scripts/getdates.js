//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
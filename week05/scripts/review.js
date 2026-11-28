//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

// Local Storage: number of reviews completed
// const reviewsComplete = document.querySelector(".complete");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
localStorage.setItem("numReviews-ls", numReviews);
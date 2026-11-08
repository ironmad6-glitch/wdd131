//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

//Hamburger Mobile Menu
const nav = document.querySelector(".navigation")
const button = document.querySelector("#menu");

button.addEventListener('click', () => {
    nav.classList.toggle('show');
    button.classList.toggle('show');
});
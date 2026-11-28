//Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

//Current Year
const currentyear = document.querySelector("#currentyear")
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

//Product Name Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#select");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name.replace(" ", "-");
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// function createOptions(array) {
//     const productSelect = document.getElementById("#select");
//     const options = document.createElement("option");
//     for (const product of array) {
//         // options += `<option value="${product.name.replace(" ","-")}" disabled selected>${product.name}</option>`
//         options.value = product.name.replaceAll(" ", "-");
//         options.textContent = product.name;
//     }
//     productSelect.appendChild(options);
//     // productSelect.innerHTML = options;
//     // productSelect.innerHTML.appendChild(options);
// };

// createOptions(products);

// Local Storage: number of reviews completed
// const reviewsComplete = document.querySelector(".complete");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
localStorage.setItem("numReviews-ls", numReviews);
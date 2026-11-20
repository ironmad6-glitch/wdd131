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

//Temple Objects array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-1813-thumb.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55311-thumb.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-60988-thumb.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26505-thumb.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-66604-thumb.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-thumb.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-1336-thumb.jpg"
  },
    // Add more temple objects here...
  {
    templeName: "Twin Falls Idaho Temple",
    location: "Twin Falls, Idaho",
    dedicated: "2008, August, 24",
    area: 31245,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/twin-falls-idaho-temple/twin-falls-idaho-temple-73841-thumb.jpg"
  },
  {
    templeName: "Burley Idaho Temple",
    location: "Burley, Idaho",
    dedicated: "2023, January, 11",
    area: 45300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/burley-idaho-temple/burley-idaho-temple-65243-main.jpg"
  },
  {
    templeName: "Rexburg Idaho Temple",
    location: "Rexburg, Idaho",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-73048-thumb.jpg"
  }
];

// function templeCards(temples) {
//     document.querySelector("#templeName").innerHTML = `${temples[0].templeName}`
//     document.querySelector("#location").innerHTML = `${temples[0].location}`
//     document.querySelector("#dedicated").innerHTML = `${temples[0].dedicated}`
//     document.querySelector("#area").innerHTML = `${temples[0].area}`
//     document.querySelector("#templeImg").src = `${temples[0].imageUrl}`
// };
// templeCards(temples);

// function templeCards(temple) {
//     document.querySelector("#templeName").innerHTML = `${temple.templeName}`
//     document.querySelector("#location").innerHTML = `${temple.location}`
//     document.querySelector("#dedicated").innerHTML = `${temple.dedicated}`
//     document.querySelector("#area").innerHTML = `${temple.area}`
//     document.querySelector("#templeImg").src = `${temple.imageUrl}`
// };
// temples.forEach(templeCards);

function createTempleCards(temple) {
    const section = document.querySelector("#templeCards");
    let sections = "";
    for (const card of temple) {
        sections += `<section class="img">
                <h2>${card.templeName}</h2>
                <p>Location: ${card.location}</span></p>
                <p>Dedicated: ${card.dedicated}</span></p>
                <p>Size: ${card.area}</p>
                <img src="${card.imageUrl}" alt="Temple" loading="lazy">
            </section>`
    }
    section.innerHTML = sections;
};
createTempleCards(temples);

//Filtered Arrays
const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

homeButton.addEventListener("click", function () {
    createTempleCards(temples);
});

oldButton.addEventListener("click", function () {
    let oldTemples = temples.filter(temple => Number(temple.dedicated.split(", ")[0]) < 1900);
    createTempleCards(oldTemples);
});

newButton.addEventListener("click", function () {
    let newTemples = temples.filter(temple => Number(temple.dedicated.split(", ")[0]) > 2000);
    createTempleCards(newTemples);
});

largeButton.addEventListener("click", function () {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
});

smallButton.addEventListener("click", function () {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
});
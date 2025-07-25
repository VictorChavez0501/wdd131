// Array of temples with their properties
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7564-thumb.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2616-thumb.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52593,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154-thumb.jpg"
  }
];

// Card container
const container = document.querySelector('#templeContainer');

// Create individual card
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}">
    <p><span>Location:</span> ${temple.location}</p>
    <p><span>Dedicated:</span> ${temple.dedicated}</p>
    <p><span>Area:</span> ${temple.area.toLocaleString()} sq ft</p>
  `;

  container.appendChild(card);
}

// Show temples with optional filter
function displayTemples(filterFn = () => true) {
  container.innerHTML = '';
  temples.filter(filterFn).forEach(createTempleCard);
}

// Filtering logic
function getYear(dedicatedDateStr) {
  const parts = dedicatedDateStr.split(',');
  return parseInt(parts[0]); // obtiene solo el año (e.g., "1983")
}

// Menu Events
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.dataset.filter;

    switch (filter) {
      case 'old':
        displayTemples(t => getYear(t.dedicated) < 1900);
        break;
      case 'new':
        displayTemples(t => getYear(t.dedicated) > 2000);
        break;
      case 'large':
        displayTemples(t => t.area > 90000);
        break;
      case 'small':
        displayTemples(t => t.area < 10000);
        break;
      default: // home
        displayTemples();
    }
  });
});

// Dynamic Footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Show all temples on load
displayTemples();

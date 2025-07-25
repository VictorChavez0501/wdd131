// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Displays the last modification date of the document
document.getElementById("lastModified").textContent = document.lastModified;

// Capture temperature and wind speed values from the HTML
const tempC = parseFloat(document.getElementById("temperature").textContent);
const windKmH = parseFloat(document.getElementById("windSpeed").textContent);

// Function to calculate the wind chill in °C
function calculateWindChill(tempC, windKmH) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmH, 0.16) +
    0.3965 * tempC * Math.pow(windKmH, 0.16)
  ).toFixed(1);
}

// Condition: temperature ≤ 10 °C and wind > 4.8 km/h
let windChill = "N/A";
if (tempC <= 10 && windKmH > 4.8) {
  windChill = `${calculateWindChill(tempC, windKmH)} °C`;
}

// Display the result in the document
document.getElementById("windChill").textContent = windChill;

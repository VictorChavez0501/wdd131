function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16)
                    + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(1) + " °C";
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");
  const temp = parseFloat(document.getElementById("temperature").textContent);
  const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  const windChillSpan = document.getElementById("windChill");

  yearSpan.textContent = new Date().getFullYear();
  modifiedSpan.textContent = document.lastModified;
  windChillSpan.textContent = calculateWindChill(temp, windSpeed);
});

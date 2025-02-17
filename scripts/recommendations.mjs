import { getWeather } from './main.mjs';

export async function recommendations() {
    const city = document.getElementById("searchInput").value; // Retrieves city
    const weather = await getWeather(city); // Obtener el clima según la ubicación ingresada
    // Retrieves weather based on location inputted
    if (!weather) return;  // An if statement if doesn't find the location

    const response = await fetch("https://jordansanchez23.github.io/finalProjectWDD330/data/recommendations.json");
    const recommendationsData = await response.json();

    // Normalizes the string of weather (example: "clear sky" a "clear")
    const weatherCondition = weather.weather[0].main.replace(" ", "_").toLowerCase();

    const recommendations = recommendationsData[weatherCondition] || []; // Retrieves recommendations based on weather

    const recommendationsCard = document.getElementById("recommendationsCard");
    recommendationsCard.innerHTML = "<h3>Recommendations:</h3>";

    if (recommendations.length > 0) {
        recommendations.forEach(recommendation => {
            const listItem = document.createElement("p");
            listItem.textContent = recommendation;
            recommendationsCard.appendChild(listItem);
        });
    } else {
        recommendationsCard.innerHTML += "<p>No recommendations available for this weather.</p>";
    }
}
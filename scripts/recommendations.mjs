import { getWeather } from './main.mjs';

export async function recommendations() {
    const city = document.getElementById("searchInput").value; // Obtener la ciudad
    const weather = await getWeather(city); // Obtener el clima según la ubicación ingresada
    if (!weather) return;  // Si no se obtiene el clima, salir

    const response = await fetch("/json/recommendations.json");
    const recommendationsData = await response.json();

    // Normalizar el string de clima (ejemplo: "clear sky" a "clear")
    const weatherCondition = weather.weather[0].main.replace(" ", "_").toLowerCase();

    const recommendations = recommendationsData[weatherCondition] || []; // Obtener recomendaciones según el tipo de clima

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
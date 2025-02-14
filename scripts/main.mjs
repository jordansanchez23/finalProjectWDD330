import { recommendations } from './recommendations.mjs';
import { displayMap } from './map.mjs';

const weatherAPIKey = "4d4ad70f8e9b0f1d0300f1c0686afb24";  //API Key

// Función para inicializar el mapa
async function initMap(city) {
    if (city !== "") {
        const weatherData = await getWeather(city);  // Obtener datos del clima
        if (weatherData) {
            displayMap(weatherData);  // Mostrar el mapa
        }
    }
}

// Función que se ejecuta cuando el usuario busca el clima
async function lookUpWeather() {
    const city = document.getElementById("searchInput").value.trim();  // Obtener el nombre de la ciudad
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const weatherData = await getWeather(city); // Obtener datos de clima
    if (weatherData) {
        displayWeatherCard(weatherData); // Mostrar los datos en la tarjeta
        recommendations(weatherData); // Mostrar recomendaciones basadas en el clima
        initMap(city); // Mostrar el mapa con la ubicación según la ciudad
    } else {
        alert("City not found. Please try again.");
    }
}

// Función para obtener el clima desde la API de OpenWeather
export async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json(); // Obtener los datos en formato JSON
        return data;  // Retornar los datos del clima
    } catch (error) {
        console.error(error);
        return null;  // Si hay error, retornamos null
    }
}

// Función para mostrar los datos del clima en una tarjeta
function displayWeatherCard(data) {
    const weatherCard = document.getElementById("weatherCard");
    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].main;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Icono del clima

    // Mostrar los datos en el HTML
    weatherCard.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <img src="${icon}" alt="Weather icon">
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
    `;
}

// Asociar el evento de búsqueda con la función lookUpWeather
document.getElementById("searchButton").addEventListener("click", lookUpWeather);
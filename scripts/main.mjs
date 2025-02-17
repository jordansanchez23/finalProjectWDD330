import { recommendations } from './recommendations.mjs';
import { displayMap } from './map.mjs';

const weatherAPIKey = "4d4ad70f8e9b0f1d0300f1c0686afb24";  //API Key

// Function to iniit map
async function initMap(city) {
    if (city !== "") {
        const weatherData = await getWeather(city);  // Retrieves data from weather
        if (weatherData) {
            displayMap(weatherData);  // Displays weather
        }
    }
}

// Function that executes when the user makes an input
async function lookUpWeather() {
    const city = document.getElementById("searchInput").value.trim();  // Retrieves the name of the city
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    //Local storage for previous cities
    localStorage.setItem('lastCity', city);

    const weatherData = await getWeather(city); // Retrieves data from weather
    if (weatherData) {
        displayWeatherCard(weatherData); // Displays data on card
        recommendations(weatherData); // Displays recommendation on card based on weather
        initMap(city); // Displays the map with the location based on the input (city)
    } else {
        alert("City not found. Please try again.");
    }
}

// Function to retrieve the weather from API of OpenWeather
export async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json(); // JSON Retrieves data as json format
        return data;  // Returns the data from weather
    } catch (error) {
        console.error(error);
        return null;  // Returns null if exists error
    }
}

// Function to display data from weather on card
function displayWeatherCard(data) {
    const weatherCard = document.getElementById("weatherCard");
    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].main;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Weather Icon

    // Display Info on HTML
    weatherCard.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <img src="${icon}" alt="Weather icon">
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
    `;
}

// Associate the lookUpWeather event with the LOCAL STORAGE lookUpWeather function
document.getElementById("searchButton").addEventListener("click", lookUpWeather);

// Function to load the city saved in localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        document.getElementById("searchInput").value = lastCity;
        lookUpWeather(); // This function inside ths DOM finds the weather for the saved city
    }
});
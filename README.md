# W04 Final Project WDD 330 - Weather & Map Locator - Jordan Sanchez

## Overview
This project is a web application that allows users to search for a location and retrieve both the weather data and a map of the location. The application integrates two third-party APIs: OpenWeatherMap for weather data and OpenStreetMap for displaying maps. Additionally, the application provides weather-based recommendations.

## Features
- **Search Location**: Users can enter a location to retrieve weather information and display a map.
- **API Fetching**: Uses AJAX and Fetch API to retrieve data from external sources.
- **Weather Display**: Shows the name of the location, temperature, humidity, and an image representing the weather condition.
- **Map Display**: Dynamically loads a map based on the searched location.
- **Newsletter Subscription**: Users can subscribe to receive weather and location updates 24/7.
- **Dynamic Header & Footer**: A responsive and dynamic layout across all pages.
- **Weather-based Recommendations**: Suggests activities based on the current weather conditions.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: OpenWeatherMap API, OpenStreetMap API
- **Data Storage**: JSON file for recommendations

## Modules
| Module | Description |
|---------|------------|
| Search | Allows users to input a location to retrieve weather and map details. |
| Fetch API | Retrieves data from external APIs and shares it with display functions. |
| Display (Weather, Map, Recommendations) | Presents relevant data based on the user's input. |
| Weather Categorization | Determines the type of weather and passes data to the recommendations function. |
| Newsletter Form | Allows users to subscribe for daily weather updates. |

## Color Scheme
- **Background:** `#EFF1C5`
- **Text Color:** Black
- **Card Background:** `#035E7B`
- **Card Text Color:** White
- **Border Lines:** `#E3E7AF`
- **Alternative Color:** `#A2A77F`

## Typography
- **Paragraphs:** Playfair Display
- **Titles:** Barlow

## Wireframes
Wireframes are available for both landscape and portrait views to ensure responsiveness.

## Timeline
| Week | Task |
|------|------|
| 5 | HTML structure with placeholders, CSS styling, and card placeholders. |
| 6 | Implement JavaScript functions, build JSON file for recommendations, debugging. |
| 7 | Refine CSS styles and improve JavaScript functionality. |

## Challenges
- Synchronizing user input to retrieve matching data from both APIs.
- Correctly categorizing the weather type and aligning recommendations accordingly.

## Project Management
Trello Board: [Project Planning](https://trello.com/b/l5n56nS5/finalproject)

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request with your improvements.

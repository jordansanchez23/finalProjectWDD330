export function displayMap(data) {
    const lat = data.coord.lat;  // lat
    const lon = data.coord.lon;  // Lon
    const cityName = data.name;  // Name of city

    //Creates the map using Google Maps API inside the conteiner #map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng: lon },
        zoom: 10
    });

    // Place a marker in the city
    new google.maps.Marker({
        position: { lat, lng: lon },
        map: map,
        title: `Location of ${cityName}`
    });
}
export function displayMap(data) {
    const lat = data.coord.lat;  // Latitud de la ciudad
    const lon = data.coord.lon;  // Longitud de la ciudad
    const cityName = data.name;  // Nombre de la ciudad

    // Crear el mapa usando Google Maps API en el contenedor #map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng: lon },
        zoom: 10
    });

    // Colocar un marcador en la ciudad
    new google.maps.Marker({
        position: { lat, lng: lon },
        map: map,
        title: `Location of ${cityName}`
    });
}
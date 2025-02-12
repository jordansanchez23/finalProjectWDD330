//This functions makes that any HTML file load inside an element
function includeHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML("dynamicHeader", "header.html");
    includeHTML("dynamicFooter", "footer.html");
});
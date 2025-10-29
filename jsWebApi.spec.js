/*What is Web API?
API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.

A Web API is a developer's dream.
It can extend the functionality of the browser
It can greatly simplify complex functions
It can provide easy syntax to complex code

Geolocation API example:
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}







    JavaScript Fetch API
The Fetch API interface allows web browser to make HTTP requests to web servers.
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
}*/
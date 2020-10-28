// Promise
const fetchPromise = fetch("https://api.umd.io/v0/bus/routes/115/locations");
// Target main element
const main = document.getElementById("main");

fetchPromise.then(response => {
    return response.json();
  }).then(route => {
      console.log(route);
      const busId = route.vehicle.id;
      console.log(busId);
      // Append names to main element
      main.innerHTML = "BusID: " + busId;
  });
function solve() {
  const infoBox = document.getElementById("info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const apiURL = `http://localhost:3030/jsonstore/bus/schedule/`;
  let stopIds = [];
  let stopIndex = 14;
  let currentStop;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      for (let stopId in data) {
        stopIds.push(stopId);
      }
    });

  function depart() {
    fetch(`${apiURL}${stopIds[stopIndex]}`)
      .then((response) => response.json())
      .then((stop) => {
        currentStop = stop;
        infoBox.textContent = `Next stop ${stop.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch((err) => {
        console.error(err);
        arriveBtn.disabled = true;
        departBtn.disabled = true;
        infoBox.textContent = "Error";
      });
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${currentStop.name}`;
    arriveBtn.disabled = true;
    departBtn.disabled = false;
    if (currentStop.name === "Depot") {
      departBtn.disabled = true;
    }
    stopIndex++;
  }

  return {
    depart,
    arrive,
  };
}
let result = solve();

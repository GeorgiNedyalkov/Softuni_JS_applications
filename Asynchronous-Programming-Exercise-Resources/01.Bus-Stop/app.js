function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busesUl = document.getElementById("buses");
  const apiURL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  busesUl.innerHTML = "";

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      const { name, buses } = data;
      stopName.textContent = name;
      createLiElements(buses);
    })
    .catch((err) => {
      stopName.textContent = "Error";
    });

  function createLiElements(buses) {
    for (let [busId, time] in buses) {
      const liEl = document.createElement("li");
      liEl.textContent = `Bus  ${busId} arrives in in ${time} minutes`;
      busesUl.appendChild(liEl);
    }
  }
}

async function asyncGetInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busesUl = document.getElementById("buses");
  const apiURL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  busesUl.innerHTML = "";

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    stopName.textContent = data.name;
    createLiElements(data.buses);
  } catch (error) {
    console.error(error);
    stopName.textContent = "Error";
  }

  function createLiElements(buses) {
    for (let [busId, time] in buses) {
      const liEl = document.createElement("li");
      liEl.textContent = `Bus  ${busId} arrives in in ${time} minutes`;
      busesUl.appendChild(liEl);
    }
  }
}

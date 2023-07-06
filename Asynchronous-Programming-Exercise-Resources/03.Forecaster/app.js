const apiURL = "http://localhost:3030/jsonstore/forecaster/locations";

async function attachEvents() {
  const getWeatherBtn = document.getElementById("submit");
  const locationInput = document.getElementById("location");
  const forecastDiv = document.getElementById("forecast");
  const currentDiv = document.getElementById("current");
  const upcomingDiv = document.getElementById("upcoming");
  const locations = await getLocations();

  getWeatherBtn.addEventListener("click", async function () {
    const location = locations.find((l) => l.name === locationInput.value);

    const currentConditions = await getCurrentConditions(location.code);
    const threeDayForecast = await getThreeDayForecast(location.code);

    const currentConditionsDiv = createCurrentConditionsEl(currentConditions);
    const forecastsDiv = createThreeDayForecast(threeDayForecast.forecast);

    currentDiv.appendChild(currentConditionsDiv);
    upcomingDiv.appendChild(forecastsDiv);

    forecastDiv.style.display = "block";
  });
}

attachEvents();

async function getLocations() {
  const response = await fetch(apiURL);
  return response.json();
}

async function getCurrentConditions(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/today/${code}`
  );
  return response.json();
}

async function getThreeDayForecast(code) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
  );
  return response.json();
}

function createCurrentConditionsEl(currentConditions) {
  let symbol = getSymbol(currentConditions.forecast.condition);

  const forecastsDiv = document.createElement("div");
  forecastsDiv.classList.add("forecasts");
  const conditionSymbolSpan = document.createElement("span");
  conditionSymbolSpan.classList.add("condition", "symbol");
  conditionSymbolSpan.textContent = symbol;
  const conditionSpan = document.createElement("span");
  conditionSpan.classList.add("condition");
  const locationSpan = document.createElement("span");
  locationSpan.classList.add("forecast-data");
  locationSpan.textContent = currentConditions.name;
  const degreesSpan = document.createElement("span");
  degreesSpan.classList.add("forecast-data");
  degreesSpan.textContent = `${currentConditions.forecast.low}° / ${currentConditions.forecast.high}°`;
  const weatherTypeSpan = document.createElement("span");
  weatherTypeSpan.classList.add("forecast-data");
  weatherTypeSpan.textContent = currentConditions.forecast.condition;

  conditionSpan.appendChild(locationSpan);
  conditionSpan.appendChild(degreesSpan);
  conditionSpan.appendChild(weatherTypeSpan);
  forecastsDiv.appendChild(conditionSymbolSpan);
  forecastsDiv.appendChild(conditionSpan);

  return forecastsDiv;
}

function createThreeDayForecast(forecasts) {
  const forecastInfoDiv = document.createElement("div");
  forecastInfoDiv.classList.add("forecast-info");

  for (let forecast of forecasts) {
    let symbol = getSymbol(forecast.condition);

    const upcomingSpan = document.createElement("span");
    upcomingSpan.classList.add("upcoming");
    const symbolSpan = document.createElement("span");
    symbolSpan.classList.add("symbol");
    symbolSpan.innerText = symbol;
    const degreesSpan = document.createElement("span");
    degreesSpan.classList.add("forecast-data");
    degreesSpan.textContent = `${forecast.low}° / ${forecast.high}°`;
    const conditionSpan = document.createElement("span");
    conditionSpan.classList.add("Forecast-data");
    conditionSpan.textContent = forecast.condition;

    upcomingSpan.appendChild(symbolSpan);
    upcomingSpan.appendChild(degreesSpan);
    upcomingSpan.appendChild(conditionSpan);
    forecastInfoDiv.appendChild(upcomingSpan);
  }

  return forecastInfoDiv;
}

function getSymbol(condition) {
  let symbol;
  switch (condition) {
    case "Sunny":
      symbol = "☀";
      break;
    case "Partly sunny":
      symbol = "⛅";
      break;
    case "Overcast":
      symbol = "☁";
      break;
    case "Rain":
      symbol = "☂";
      break;
  }

  return symbol;
}

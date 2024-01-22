import { serverResponse } from "./Api";

const latitude = 35.3859;
const longitude = -94.3986;
const apiKey = "a078f9d80de764ccaacf93aab6d75b5d";

export function getForecastWeather() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(serverResponse);
  return weatherApi;
}

export function weatherLocation(data) {
  const local = data.name;
  return local;
}

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};

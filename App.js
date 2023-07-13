import React, { useState } from 'react'
import './App.css'
import { response } from 'express'
function App() {
  const apiKey = 'f0ddba71cb4837a16e5ab75e534c568a'
  const [weatherData, setweatherData] = useState[({})]
  const [city, setCity] = useState[""]

  const getweather = (event) => {
    if (event.key == "Enter") {
      fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}').then(
        response => response.json())
      .then(data => {
        setweatherData(data)
      

    })
  }
  }
}

  
  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter city..."
        onchange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get weather of.</p>
        </div>
      ) : (
        <div className="weather-data">
          <p>{weatherData.name}</p> className= 'city'
          <p className="temp">{Math.round(weatherData.main.temp)})"\u00B0C";</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? <p>City not found.</p> : null}
    </div>
  );
      

  
  export default App;


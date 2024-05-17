import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: {
          location: "jakarta",
          format: "json",
          u: "f",
        },
        headers: {
          "X-RapidAPI-Key":
            "af1d3634eemsh4c544a91dc28d7cp15ade4jsn6a9117430d1d",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <p>Suhu: {weatherData.current_observation.condition.temperature}°F</p>
          <p>Cuaca: {weatherData.current_observation.condition.text}</p>
        </div>
      ) : (
        <p>Gagal mengambil data cuaca.</p>
      )}
    </div>
  );
}

export default WeatherInfo;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: {
          lat: "-0.7893",
          long: "100.6496 ",
          format: "json",
          u: "c",
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

    fetchData();
  }, []);

  function cuaca() {
    if (!weatherData) return <p id="pp">Gagal Mengambil API Cuaca</p>; // Tunggu hingga data tersedia
    return (
      <div>
        <p id="pp">Suhu: {weatherData.temperature}°C</p>
        <p id="pp">Cuaca: {weatherData.weather}</p>
      </div>
    );
  }

  return <div>{cuaca()}</div>;
}

export default Weather;

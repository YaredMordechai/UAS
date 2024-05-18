import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ selectedProvince, handleProvinceClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      try {
        const apiKey = "bbef97c5a9f923e99f8affac27575ad9"; // Ensure this is your valid API Key
        const lat = "0.9492";
        const lon = "100.3547";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeatherInfo(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (sidebarOpen) {
      fetchWeatherInfo();
    }
  }, [sidebarOpen]);

  return (
    <div
      className="container"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      {weatherInfo ? (
        <div className="row">
          <div className="col-sm-6">
            <div className="weather-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084069.9775475077!2d97.60265699519573!3d-1.554697157696076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94cf0744245%3A0x70b151b975d53b55!2sWest%20Sumatra!5e0!3m2!1sen!2sid!4v1714735575197!5m2!1sen!2sid"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="weather-container">
              <h1>Current Weather In Sumatera Barat</h1>
              <div id="tengah">
                <p>Temperature: {weatherInfo.main.temp}°C</p>
                <p>Weather: {weatherInfo.weather[0].description}</p>
                <p>Humidity: {weatherInfo.main.humidity}%</p>
                <p>Wind Speed: {weatherInfo.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </div>
  );
};

export default Home;

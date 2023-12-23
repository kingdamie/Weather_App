import React, { useState } from 'react'
import "./WeatherApp.css"


import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humditiy_icon from "../Assets/humidity.png";

export const WeatherApp = () => {

  let api_key = "71665f20352c039c7ed82d6ded37237e";

  // to update icon 
  const [wicon,setwicon] = useState(cloud_icon)

  // search function 
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    // pass the data in json format 
    let data = await response.json();
    // to show the data 
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed +" km/h";
    temperature[0].innerHTML = data.main.temp + " °C ";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setwicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setwicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setwicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setwicon(snow_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setwicon(snow_icon);
    }else{
      setwicon(clear_icon)
    }
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humditiy_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>

      <div className="detail">
        <div className="item">
          <img src={clear_icon} alt="" />
          <p>Clear sky</p>
        </div>
        <div className="item">
          <img src={cloud_icon} alt="" />
          <p>Clear</p>
        </div>
        <div className="item">
          <img src={drizzle_icon} alt="" />
          <p>Scattered/Broken clouds</p>
        </div>
        <div className="item">
          <img src={snow_icon} alt="" />
          <p>Show</p>
        </div>
        <div className="item">
          <img src={rain_icon} alt="" />
          <p>Shower rain</p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import './Weather.css'
import search_icon from'../assets/search.png'
import clear_icon from'../assets/clear.png'
import cloud_icon from'../assets/cloud.png'
import drizzle_icon from'../assets/drizzle.png'
import humidity_icon from'../assets/humidity.png'
import rain_icon from'../assets/rain.png'
import snow_icon from'../assets/wind.png'
import wind_icon from'../assets/wind.png'
import bars from '../assets/bars.svg'
import star from'../assets/star.svg'


const Weather = () => {

  const inputRef = useRef ()

  const [weatherData, setWeatherData] = useState (false);

  const allIcons = {
    '01d': clear_icon,
    '02d': cloud_icon,
    '04d': drizzle_icon,
    '09d': rain_icon,
    '13d': snow_icon,
  }

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name !")
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      console.log(data);
      setWeatherData ({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
      
      
    } catch (error) {
      setWeatherData (false);
      console.error("Error In Fetching The Weather Data !")
      
    }
  }

  useEffect (()=>{

    search ("London");
  }, [])
  return (

    <div className = 'weather'>
        <div className="search_bar">
          <input ref={inputRef} type="text" placeholder = 'Search'/>
          <img src={search_icon} alt="" onClick={()=> search(inputRef.current.value)}/>
        </div>
        <img className = "nav_bar" src={bars} alt="" />
        <img className = "star" src={star} alt="" />

        <img src={weatherData.icon} alt="" className = 'weather_icon'/>
        <p className = 'temperature'>{weatherData.temperature} <sup>°C</sup></p>
        <p className = 'city_name'>{weatherData.location}</p>
        <div className="weather_data">
          <div className="col">
            <img src={humidity_icon} alt="" />
            <div className="humid_text">
              <p>{weatherData.humidity}% </p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="" />
            <div className="wind_text">
              <p>{weatherData.windSpeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Weather

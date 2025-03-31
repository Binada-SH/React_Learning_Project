import React from 'react'
import './Weather.css'
import search_icon from'../assets/search.png'
import clear_icon from'../assets/clear.png'
import cloud_icon from'../assets/cloud.png'
import drizzle_icon from'../assets/drizzle.png'
import humidity_icon from'../assets/humidity.png'
import rain_icon from'../assets/rain.png'
import snow_icon from'../assets/wind.png'
import wind_icon from'../assets/wind.png'

const Weather = () => {
  return (
    <div className = 'weather'>
      <h1>Weather</h1>
        <div className="search_bar">
          <input type="text" placeholder = 'Search'/>
          <img src={search_icon} alt="" />
        </div>
        <img src={clear_icon} alt="" className = 'weather_icon'/>
        <p className = 'temperature'>24 °C</p>
        <p className = 'city_name'>BERLIN</p>
        <div className="weather_data">
          <div className="col">
            <img src={humidity_icon} alt="" />
            <div className="humid_text">
              <p>80% </p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="" />
            <div className="wind_text">
              <p>2.8 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Weather

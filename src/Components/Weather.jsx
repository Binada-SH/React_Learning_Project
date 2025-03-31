import React from 'react'
import './Weather.css'
import search_icon from'../assets/search.png'
const Weather = () => {
  return (
    <div className = 'weather'>
      <h1>Weather</h1>
        <div className="search_bar">
          <input type="text" placeholder = 'Search'/>
          <img src={search_icon} alt="" />
        </div>
      
      
    </div>
  )
}

export default Weather

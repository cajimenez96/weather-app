import React from 'react'
import './weatherCards.css'

function WeatherCards() {
  return (
    <div className="d-flex justify-content-evenly d-none">

      <div className="cards">
        <h3 className="card-title p-2">Dia</h3>
        <img className="p-1" alt="tiempo"/>
        <div className="d-flex justify-content-between">
          <span className="card-text p-3">° Min</span>
          <span className="card-text p-3">° Max</span>
        </div>
      </div>
      
    </div>
  )
}

export default WeatherCards

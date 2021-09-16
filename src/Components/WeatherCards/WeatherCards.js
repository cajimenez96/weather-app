import React from 'react'
import './weatherCards.css'

function WeatherCards() {


  return (

    <div className="container ">
      <div class="box d-flex align-items-center justify-content-center row">

        <div className="row col-md-12 ">
          <h5 class="card-title col-md-12">Card title</h5>
          <img src="..." class="card-img-top col-md-12" alt="..."></img>
        </div>

        <div className="row ps-2 pe-2 col-md-12">
          <p className="col-md-6">0°C</p>

          <p className="col-md-6">0°C</p>
        </div>

      </div>
    </div>
  )
}

export default WeatherCards

import React, { useState } from "react";
import Search from "./Components/Search/Search";
import SectionData from "./Components/SectionData/SectionData";
import WeatherCards from "./Components/WeatherCards/WeatherCards";
import img from "../src/Img/clouds.png";
import "./App.css";


function App() {

  const [dataclima, setdataclima] = useState({})
  const fecha = new Date();
  const HandleData = async (datos) => {
    setdataclima(datos)
    console.log(dataclima)
  }
  // <img className="mb-4 mt-5" src={img} alt="clouds" />
  // <p className="fs-1 mb-3">{(dataclima.main.temp - 273).toFixed()}°C</p>
  // <p className="mb-3">{dataclima.weather[0].main}</p>
  // <p className="mb-3">{fecha.toLocaleDateString()}</p>
  // <p className="mb-5">{dataclima.name}</p>

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row">
            <div className="col-md-5 d-flex flex-column" id="seccion2">
              <Search datos={HandleData} />
              <div className="d-flex justify-content-center flex-column align-items-center" id="hola">
                <img className="mb-4 mt-5" src={img} alt="clouds" />
                <p className="fs-1 mb-3">0°C</p>
                <p className="mb-3">clima</p>
                <p className="mb-3">date</p>
                <p className="mb-5">city</p>
              </div>
            </div>
            <div className="col-md-7 SecondSection pt-5">

              <WeatherCards />
              <SectionData />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;

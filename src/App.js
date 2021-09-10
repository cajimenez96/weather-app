import { useState } from "react";
import Search from "./Components/Search/Search";
import SectionData from "./Components/SectionData/SectionData";
import WeatherCards from "./Components/WeatherCards/WeatherCards";
import WeatherHero from "./Components/WeatherHero/WeatherHero";
import axios from 'axios';
import "./App.css";

const keyAPI ="&appid=98fa15cd4f6c8ddecd35ebcea75cb290";
const CITY = "tucuman";
const API = "http://api.openweathermap.org/data/2.5/forecast?q=";

function App() {
  const [state, setState] = useState ([])

  // axios.get(API+CITY+keyAPI)
  // .then(respuesta => setState(respuesta))

  // console.log(state)

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row">
            <div className="col-md-5 d-flex flex-column" id="seccion2">
              <Search />
              <WeatherHero />
            </div>
            <div className="col-md-7 SecondSection">
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

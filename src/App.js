import "./App.css";
import Search from "./Components/Search/Search";
import SectionData from "./Components/SectionData/SectionData";
import Weatherhero from "./Components/WeatherHero/WeatherHero";

function App() {
  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row">
            <div class="col-md-5 d-flex flex-column" id="seccion2">
              <Search />
              <Weatherhero />
            </div>
            <div className="col-md-7 SecondSection">
              <SectionData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

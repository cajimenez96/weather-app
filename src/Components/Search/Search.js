// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import "./search.css";


function Search() {
  const API = 'https://powerful-mountain-49469.herokuapp.com/https://www.metaweather.com/api/location/search/?query='
  const [location, setLocation] = useState('');
  const handleLocation = (evento) =>{
    setLocation(evento.target.value)
  }
  const searchLocation = () =>{
    axios.get(API + location)
    .then(response => console.log(response.data))
  }
  return (
    <div className="mb-2">
      <nav className="navbar navbar-dark d-flex justify-content-start mt-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4 d-flex justify-content-center align-items-center flex-column">
          <h5 className="text-white h4">Search Location</h5>
          <input
            className="form-control"
            type="text"
            placeholder="Search Location"
            onChange={handleLocation}
            required
          />
          <button type="button" className="btn btn-outline-light mt-3" onClick={searchLocation}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;

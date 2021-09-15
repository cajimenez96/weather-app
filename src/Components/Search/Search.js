// import axios from "axios";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./search.css";


function Search(props) {


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.Location}&appid=98fa15cd4f6c8ddecd35ebcea75cb290`)
      .then((response) => {
        props.datos(response.data)
      })
  };

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
        <form className="p-4 d-flex justify-content-center align-items-center flex-column" onSubmit={handleSubmit(onSubmit)} >
          <h5 className="text-white h4">Search Location</h5>
          <input
            className="form-control"
            type="text"
            placeholder="Search Location"
            {...register("Location", { required: true })}
          />
          <button type="submit" className="btn btn-outline-light mt-3" >
            Search
          </button>
        </form>
      </div>


    </div>
  );
}
export default Search;

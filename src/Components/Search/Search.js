import "./search.css";

function Search() {
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
            aria-label="default input example"
            id="inputLocation"
            required
          />
          <button type="button" className="btn btn-outline-light mt-3" onClick="SearchLocation()">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;

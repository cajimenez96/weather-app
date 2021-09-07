import "./search.css";

function Search() {
  return (
    <div class="mb-2">
      <nav class="navbar navbar-dark d-flex justify-content-start mt-3">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="p-4 d-flex justify-content-center align-items-center flex-column">
          <h5 class="text-white h4">Search Location</h5>
          <input
            class="form-control"
            type="text"
            placeholder="Search Location"
            aria-label="default input example"
            id="inputLocation"
            required
          />
          <button type="button" class="btn btn-outline-light" onclick="SearchLocation()">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;

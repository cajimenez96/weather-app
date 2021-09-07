import "./sectiondata.css";

function SectionData() {
  return (
    <div class="container">
      <p class="fs-4 mb-3 mt-5 text-white">Today's Hightlights </p>
      <div class="row" id="SecondPanel">
        <div class="col-sm-6">
          <div class="servive-block servive-block-u">
            <p class=" fs-5">Wind Status</p>
            <h2 class="fs-1 pb-3">0mph</h2>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="servive-block rounded servive-block-u">
            <p class=" fs-5">Humidity</p>
            <h2 class="fs-1">0%</h2>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                0%
              </div>
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="servive-block servive-block-u">
            <p class="heading-md fs-5">Visibility</p>
            <h2 class="fs-1">0 miles</h2>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="servive-block rounded servive-block-u">
            <p class="heading-md fs-5">Aire Pressure</p>
            <h2 class="fs-1">0 mb</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionData;

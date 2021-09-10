import "./sectiondata.css";

function SectionData() {
  return (
    <div className="container">
      <p className="fs-4 mb-3 mt-5 text-white">Today's Hightlights </p>
      <div className="row" id="SecondPanel">
        <div className="col-sm-6">
          <div className="servive-block servive-block-u">
            <p className=" fs-5">Wind Status</p>
            <h2 className="fs-1 pb-3">0mph</h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="servive-block rounded servive-block-u">
            <p className=" fs-5">Humidity</p>
            <h2 className="fs-1">0%</h2>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                0%
              </div>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="servive-block servive-block-u">
            <p className="heading-md fs-5">Visibility</p>
            <h2 className="fs-1">0 miles</h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="servive-block rounded servive-block-u">
            <p className="heading-md fs-5">Aire Pressure</p>
            <h2 className="fs-1">0 mb</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionData;

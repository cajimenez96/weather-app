import "./weatherhero.css";
import img from "../../Img/clouds.png";

function WeatherHero() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center" id="seccion1">
      <img className="mb-4 mt-5" src={img} alt="clouds" />
      <p className="fs-1 mb-3">0°C</p>
      <p className="mb-3">Weather</p>
      <p className="mb-3">Date</p>
      <p className="mb-5">Location</p>
    </div>
  );
}
export default WeatherHero;

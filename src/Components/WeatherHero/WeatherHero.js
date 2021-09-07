import "./weatherhero.css";
import img from "../../Img/clouds.png";

function Weatherhero() {
  return (
    <div class="d-flex justify-content-center flex-column align-items-center" id="seccion1">
      <img class="mb-4 mt-5" src={img} alt="clouds" />
      <p class="fs-1 mb-3">0°C</p>
      <p class="mb-3">Weather</p>
      <p class="mb-3">Date</p>
      <p class="mb-5">Location</p>
    </div>
  );
}
export default Weatherhero;

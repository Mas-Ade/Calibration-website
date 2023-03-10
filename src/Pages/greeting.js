import greeting_icon2 from "../Assets/pictures/greeting_icon2.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Greetings = () => {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <div className="mb-2">
            {" "}
            <h1>
              Bettter Calibration Experience with Technology Control Section
            </h1>{" "}
          </div>
          <div className="mb-5">
            {" "}
            <h2>We are team of talented Calibrator</h2>
          </div>
          <div>
            <Button variant="outline-primary">
              <Link className="nav-link px-2 text-secondary" to="/login">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img d-flex flex-column">
          <img src={greeting_icon2} className="img-fluid animated" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Greetings;

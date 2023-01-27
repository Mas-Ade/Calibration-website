
import greeting_icon1 from '../Assets/pictures/greeting_icon1.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Greetings = () => {
  return(
   
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div class= "mb-2">  <h1>Bettter Calibration experience with Technology Control Section</h1> </div>
              <div class= "mb-5"> <h2 >We are team of talented designers making websites with Bootstrap</h2></div>
              <div>
            <Button variant="outline-warning" ><Link class="nav-link px-2 text-secondary" to="/login">Get Started</Link></Button>

            </div>
            </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img d-flex flex-column">
          <img src={greeting_icon1} class="img-fluid animated" alt=""></img>
        </div>
        
      </div>
    </div>
  )
}


export default Greetings;
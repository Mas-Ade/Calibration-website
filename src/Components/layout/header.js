import React, { Component } from 'react';
import { Link } from "react-router-dom";
import nok from '../../Assets/pictures/nok.png'

const Header = () => {
// class Header extends Component {
//     render() {

    // const logout = localStorage.removeItem("dataUser");  
    const handleClick = () => {
      localStorage.clear();
      window.location.reload();
    }

    return (
      <div>
      <div>
      <h2 className='container p'>PT.NOK INDONESIA</h2>
      </div>
      <header className="p-2 bg-info">
        <div className="container ">
        {/* <img className="img-fluid" alt="logo dept. NIN" src={nok}></img> */}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/home">Home</Link></li>
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/Input">Input Calibrations</Link></li>
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/Schedule">Schedule</Link></li>
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/Report">Report</Link></li>
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/About">About</Link></li>
              <li><Link  className="nav-link px-2 text-light fw-bold" to="/trial1">trialDate</Link></li>
            </ul>

            <div className="text-end">
              {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
              <button type="button" onClick={handleClick} className="btn btn-outline-dark me-2">Logout</button>
            </div>
          </div>
        </div>
      </header>
      </div>
        );
    }
    // }

    export default Header;
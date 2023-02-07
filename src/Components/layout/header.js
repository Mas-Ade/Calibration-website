import React, { Component } from 'react';
import { Link } from "react-router-dom";
import nok from '../../Assets/pictures/nok.jpg'

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
      {/* <img className="w-10 h-10" alt="logo dept. NIN" src={nok}></img> */}
      </div>
      <header className="p-2 text-bg-dark bg-warning ">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link  className="nav-link px-2 text-light" to="/home">Home</Link></li>
              <li><Link  className="nav-link px-2 text-light" to="/Input">Input Calibrations</Link></li>
              <li><Link  className="nav-link px-2 text-light" to="/Schedule">Schedule</Link></li>
              <li><Link  className="nav-link px-2 text-light" to="/Report">Report</Link></li>
              <li><Link  className="nav-link px-2 text-secondary" to="/About">About</Link></li>
              {/* <li><Link  className="nav-link px-2 text-secondary" to="/table">Datatable</Link></li> */}
              <li><Link  className="nav-link px-2 text-secondary" to="/trialpage">Trial Page</Link></li>
              {/* <li><Link  className="nav-link px-2 text-secondary" to="/hookform">input with hookform</Link></li> */}
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
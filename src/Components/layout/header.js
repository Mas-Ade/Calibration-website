import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
// class Header extends Component {
//     render() {

    // const logout = localStorage.removeItem("dataUser");  
    const handleClick = () => {
      localStorage.clear();
      window.location.reload();
    }

        return (
  <div className="b-example-divider">

  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>
          
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link  className="nav-link px-2 text-secondary" to="/home">Home</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/Input">Input Calibrations</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/Schedule">Schedule</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/Report">Report</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/About">About</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/testApi">TesApi</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/table">Datatable</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/trialpage">Trial Page</Link></li>
          <li><Link  className="nav-link px-2 text-secondary" to="/hookform">input with hookform</Link></li>
        </ul>

        <div className="text-end">
          {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
          <button type="button" onClick={handleClick} className="btn btn-warning">Logout</button>
        </div>
      </div>
    </div>
  </header>
  </div>
        );
    }
    // }

    export default Header;
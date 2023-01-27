import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
  <div class="b-example-divider">

  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link  class="nav-link px-2 text-secondary" to="/home">Home</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/Input">Input Calibrations</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/Schedule">Schedule</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/Report">Report</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/About">About</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/testApi">TesApi</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/table">Datatable</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/trialpage">Trial Page</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/formik">input with formik</Link></li>
          <li><Link  class="nav-link px-2 text-secondary" to="/hookform">input with hookform</Link></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  </div>
        );
    }
    }

    export default Header;
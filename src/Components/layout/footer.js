import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
          
		<div className="container">
      <footer className="justify-content-between align-items-center py-3 my-4 border-top">
        <p className="flex border-start-0 col-md-4 mb-0 text-muted">&copy; 2023 Calibration Website, NOK Indonesia, inc</p>
          <ul className="nav col-md-4 justify-content-end">
            {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li> */}
          </ul>
      </footer>
    </div>
    )
}
}
export default Footer;
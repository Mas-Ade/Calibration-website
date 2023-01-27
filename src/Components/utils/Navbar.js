// import react from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className='List'>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link  class="nav-link px-2 text-secondary" to="/home">Home</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/Input">Input Calibrations</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/Schedule">Schedule</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/Report">Report</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/About">About</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/testApi">TesApi</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/table">Datatable</Link></li>
                    <li><Link  class="nav-link px-2 text-secondary" to="/trialpage">Trial Page</Link></li>
                </ul>
             </nav>
        </div>
    )
}

export default Navbar
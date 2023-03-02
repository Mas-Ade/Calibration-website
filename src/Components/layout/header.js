import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './header.css'
import nok from '../../Assets/pictures/nok.png'
import '../../Assets/font/oswald/Oswald-VariableFont_wght.ttf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Header = () => {

      
      const [users, setUser] = useState([])

      // const logout = localStorage.removeItem("dataUser");  
      const Logout = () => {
      localStorage.clear();
      window.location.reload();
    }

    const saved = localStorage.getItem("dataUser")
    const initialvalue = JSON.parse(saved)
    // console.log("user :", initialvalue)

    useEffect(() => {
    setUser(initialvalue)
    }, [])

return (
      <div>
      <h2 className='container'>PT.NOK INDONESIA</h2>
        <div className='nav-color shadow'>
        <div>
        <Container>
        <Navbar className='nav-color'  expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
              <Nav className="me-auto">
              <Nav.Link  as={Link} to="/home" >Home</Nav.Link>
              <Nav.Link  as={Link} to="/Input" >Input</Nav.Link>
                <NavDropdown style={{color:'white'}}  title="Others" id="navbarScrollingDropdown">
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/Schedule" >Schedule</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/Report" >Report</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/About" >About</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {users.map(user => <div key={user} style={{marginRight:15, color:'white'}}>Login as {user.staff_name}</div>)}
      <button type="button" onClick={Logout} className="btn btn-outline-warning me-2">Logout</button>
      </Navbar>
      </Container>
        </div>
            </div>
          </div> 
        );
    }


//  return (
//       <div>
//       <h2 className='container'>PT.NOK INDONESIA</h2>
//         <div className='bg-info shadow'>
//         <div >
//         <Container>
//         <Navbar bg="info" expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//         <Nav>
//             <Link className='navbar' style={{marginRight:15}}  to="/home">Home</Link>
//             <Link className='navbar' style={{marginRight:15}} to="/Input">Input</Link>
//             <Link className='navbar' style={{marginRight:15}} to="/Schedule">Schedule</Link> 
//             <Link className='navbar' style={{marginRight:15}} to="/Report">Report</Link>
//             <Link className='navbar' style={{marginRight:15}} to="/About">About</Link>
//         </Nav>
//         </Navbar.Collapse>
//         {users.map(user => <div key={user} style={{marginRight:15, color:'black'}}>Login as {user.staff_name}</div>)}
//         <button type="button" onClick={Logout} className="btn btn-outline-dark me-2">Logout</button>
        
//     </Navbar>
//     </Container>
//         </div>
//             </div>
//           </div> 
//         );
//     }


    export default Header;
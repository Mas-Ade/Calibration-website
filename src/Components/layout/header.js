import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './header.css'
import nok from '../../Assets/pictures/nok.png'
import '../../Assets/font/oswald/Oswald-VariableFont_wght.ttf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Space } from 'antd';




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
        <Container>
      <Row>
        <Col><img src={nok} className='mt-1' style={{ height: 60, width: 60, }} ></img></Col> 
      </Row>
        </Container>
    
        <div className='nav-color shadow'>
        <div>
        <Container>
        <Navbar className='nav-color'  expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
              <Nav className="me-auto">
                <Nav.Link style={{ color: 'white' }}  as={Link} to="/home" >Home</Nav.Link>
                <Nav.Link style={{ color: 'white' }}  as={Link} to="/Input" >Input</Nav.Link>
                <NavDropdown style={{color:'white'}}  title={<span style={{color: 'whitesmoke'}}>Others</span>} id="navbarScrollingDropdown">
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/Schedule" >Schedule</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/Report" >Report</NavDropdown.Item>
                  <NavDropdown.Item style={{color:'darkgrey'}}  as={Link} to="/About" >About</NavDropdown.Item>
                  <NavDropdown.Item style={{ color: 'darkgrey' }} as={Link} to="/testing/field" >Trial auto field</NavDropdown.Item>
                  <NavDropdown.Item style={{ color: 'darkgrey' }} as={Link} to="/testing/modal" >Trial add Modal</NavDropdown.Item>
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
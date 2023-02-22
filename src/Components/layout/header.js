import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './header.css'
import nok from '../../Assets/pictures/nok.png'
import '../../Assets/font/oswald/Oswald-VariableFont_wght.ttf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { data } from 'jquery';



const Header = () => {

      const [dataLogin, setDataLogin] = useState([])
      const [users, setUser] = useState([])

      // const logout = localStorage.removeItem("dataUser");  
      const Logout = () => {
      localStorage.clear();
      window.location.reload();
    }

    useEffect(() => {
    const getlogin = () => JSON.parse(localStorage.getItem('dataUser'))
    setUser(initialvalue)
    }, [])

    const saved = localStorage.getItem("dataUser")
    const initialvalue = JSON.parse(saved)
    console.log("user :", initialvalue)

    const finalUser = () => { users.map(row => ({
      staff_name: row.staff_name
    }))
    }
    

 return (
      <div>
      <h2 className='container'>PT.NOK INDONESIA</h2>
        <div className='bg-info shadow'>
        <div >
        <Container>
        <Navbar bg="info" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav>
            <Link className='navbar' style={{marginRight:15}}  to="/home">Home</Link>
            <Link className='navbar' style={{marginRight:15}} to="/Input">Input</Link>
            <Link className='navbar' style={{marginRight:15}} to="/Schedule">Schedule</Link> 
            <Link className='navbar' style={{marginRight:15}} to="/Report">Report</Link>
            <Link className='navbar' style={{marginRight:15}} to="/About">About</Link>
        </Nav>
        </Navbar.Collapse>
        {users.map(user => <div key={user} style={{marginRight:15}}>Login as {user.staff_name}</div>)}
        <button type="button" onClick={Logout} className="btn btn-outline-dark me-2">Logout</button>
        
    </Navbar>
    </Container>
        </div>
            </div>
          </div> 
        );
    }


    // return (
    //   <div>
    //   <div>
    //   <h2 className='container p'>PT.NOK INDONESIA</h2>
    //   </div>
    //   <header className="p-2 bg-info">
    //     <div className="container ">
    //     {/* <img className="img-fluid" alt="logo dept. NIN" src={nok}></img> */}
    //       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
    //         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    //           <li><Link  className='navbar' style={{marginRight:15}} to="/home">Home</Link></li>
    //           <li><Link  className='navbar' style={{marginRight:15}} to="/Input">Input Calibrations</Link></li>
    //           <li><Link  className='navbar' style={{marginRight:15}} to="/Schedule">Schedule</Link></li>
    //           <li><Link  className='navbar' style={{marginRight:15}} to="/Report">Report</Link></li>
    //           <li><Link  className='navbar' style={{marginRight:15}} to="/About">About</Link></li>
    //         </ul>

    //         <div className="text-end">
    //           {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
    //           <button type="button" onClick={handleClick} className="btn btn-outline-dark me-2">Logout</button>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   </div>
    //     );
    // }

    export default Header;
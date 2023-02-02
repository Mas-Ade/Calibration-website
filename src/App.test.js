import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import App from "./Components/App/App";
import Input from "./Pages/inputData";
import About from "./Pages/About";
import Report from "./Pages/report";
import Schedule from "./Pages/schedule";

import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
import Home from "./Pages/home";



// Routes berfungsi sebagai induk untuk menampung semua route
// class Apptest extends Component {
//   render() {
//   return (

function Apptest() {
    return(
   <div className="Aptest">
    <Header />
    <h1>ini page index app</h1>
  
    <Routes> 
        <Route path="home" element={ <Home /> } />
        <Route path="input" element={ <Input /> } />
        <Route path="report" element={ <Report /> } />
        <Route path="schedule" element={ <Schedule /> } />
        <Route path="about" element={ <About /> } />
    </Routes>


    <Footer />
    </div>
    )
    }

//   )
// }
// }

export default Apptest;


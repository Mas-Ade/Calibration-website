import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/About";
import Input from "./Pages/input";
import Report from "./Pages/report";
import Schedule from "./Pages/schedule";
import Greetings from "./Pages/greeting";
import LoginPages from "./Pages/loginPages";
import DataTables from './Components/datatableDev'
import ReactPaginate from "./Components/reactPaginate";



// Routes berfungsi sebagai induk untuk menampung semua route
class App extends Component {
  render() {
  return (
   <div className="App">
   
      <Routes> 
        <Route path="/" element={ <Greetings /> } />
        <Route path="/login" element={ <LoginPages /> } />
        <Route path="Home" element={ <Home /> } />
        <Route path="Input" element={ <Input /> } />
        <Route path="/Report" element={ <Report /> } />
        <Route path="/Schedule" element={ <Schedule /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/table" element={ <DataTables  /> } />
        <Route path="/paginate" element={ <ReactPaginate /> } />
      </Routes>

    </div>

  )
}
}

export default App;


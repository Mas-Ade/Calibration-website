import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../Pages/About";
import Input from "../../Pages/menuInput";
import Report from "../../Pages/report";
import Schedule from "../../Pages/schedule";
import DataTables from '../../Components/datatableDev'
import Datatables2 from "../../Components/funcDatatables2";
import FormInput1 from "../../Pages/inputData";
import Navbar from "../Navbar";
import Footer from "../footer";


// Routes berfungsi sebagai induk untuk menampung semua route
class App extends Component {
  render() {
  return (
  <div className="container">
        <Navbar />
            <div className="App">
            <h1>Ini adalah menu home</h1>
   
            <Routes> 
                <Route path="Input" element={ <Input /> } />
                <Route path="/Report" element={ <Report /> } />
                <Route path="/Schedule" element={ <Schedule /> } />
                <Route path="/About" element={ <About /> } />
                <Route path="/table" element={ <DataTables  /> } />
                <Route path="/trialpage" element={ <Datatables2 /> } />
                <Route path="/Input/form1" element={ <FormInput1 /> } />
            </Routes>
            <Footer />

            </div>
    </div>

  )
}
}

export default App;


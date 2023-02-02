// import from React 
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom"

// import JSX Page
import Home from "./Pages/home";
import About from "./Pages/About";
import Input from "./Pages/menuInput";
import Report from "./Pages/report";
import Schedule from "./Pages/schedule";

import DataTables from './Components/utils1/datatableDev'
import Datatables2 from "./Components/utils1/funcDatatables2";
import HookForm from "./Pages/hookForm";
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';

// import welcome Page & login Page
import Greetings from "./Pages/greeting";
import LoginPages from "./Pages/loginPages";


// Routes berfungsi sebagai induk untuk menampung semua route
class App extends Component {
  render() {
  return (
   <div className="App">
   <Header />
      <Routes> 
        <Route path="/home" element={ <Home /> } />
        <Route path="Input" element={ <Input /> } />
        <Route path="/Report" element={ <Report /> } />
        <Route path="/Schedule" element={ <Schedule /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/table" element={ <DataTables  /> } />
        <Route path="/trialpage" element={ <Datatables2 /> } />
        <Route path="/hookform" element={ <HookForm /> } />
      </Routes>
<Footer />
    </div>

  )
}
}

export default App;


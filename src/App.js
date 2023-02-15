// import from React 
// import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom"
import ProtectedRoutes from '../src/utils/protectedRoutes'
// import component
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
// import JSX Page
import Home from "./Pages/dashborad/home";
import About from "./Pages/dashborad/About";
import Input from "./Pages/input/menuInput";
import Report from "./Pages/dashborad/report";
import Schedule from "./Pages/dashborad/schedule";
// import DataTables from './Components/testing/datatable(notuse)'
// Import menu imput
import InputTempCont from "./Pages/input/inputTempCont";
import InputTempPress from "./Pages/input/inputTempPress";
import InputTempRecord from "./Pages/input/inputTempRecord";
// import Greeting & Login Page
import Greetings from "./Pages/greeting";
import LoginPages from "./Pages/login/loginPages";

import TbHomeNow from "./Components/testing/home.dateNow";

// Routes berfungsi sebagai induk untuk menampung semua route
const App = () => {

  const location = useLocation()
  const page = location.pathname
  console.log('page' , page)

  return (
   <div className="App">
   {page === '/'  ? '' : page === '/login' ? '' : <Header/> }
   
      <Routes> 
        <Route path="/" element={ <Greetings /> } />
        <Route path="/login" element={ <LoginPages /> } />
        {/* =================DASHBOARD========================== */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/Home" element={ <Home /> } />
            <Route path="/Input" element={ <Input /> } />
            <Route path="/Report" element={ <Report /> } />
            <Route path="/Schedule" element={ <Schedule /> } />
            <Route path="/About" element={ <About /> } />
        {/* =================END OF DASHBOARD==================== */}
            <Route path="/trial1" element={ <TbHomeNow /> } />
            {/* <Route path="/table" element={ <DataTables  /> } />
            <Route path="/testTable" element={ <DataTables  /> } /> */}
        {/* =================INPUT=============================== */}
            <Route path="/inputTempCont" element={ <InputTempCont /> } />
            <Route path="/inputTempPress" element={ <InputTempPress /> } />
            <Route path="/inputTempRecord" element={ <InputTempRecord /> } />
        {/* =================END OF INPUT======================== */}
        </Route>
      </Routes>

      {page === '/'  ? '' : page === '/login' ? '' : <Footer/> }

    </div>

  )
  }


export default App;


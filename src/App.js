// import from React 
// import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom"
import ProtectedRoutes from '../src/utils/protectedRoutes'
// import component
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
// import JSX Page
import Home from "./Pages/dashborad/home.js"
import About from "./Pages/dashborad/About";
import Input from "./Pages/input/menuInput";
import Report from "./Pages/dashborad/report";
import Schedule from "./Pages/dashborad/schedule";

// Import menu imput
import InputTempCont from "./Pages/input/inputTempCont";
import InputTempPress from "./Pages/input/inputTempPress";
import InputTempRecord from "./Pages/input/inputTempRecord";
// import Greeting & Login Page
import Greetings from "./Pages/greeting";
import LoginPages from "./Pages/login/loginPages";

import TbHomeNow from "./Components/testing/home.dateNow";
import IndexHome from "./Pages/dashborad/Home/index";

// import Download Data Page
import DownloadTemp from "./Pages/download/downloadTemp";
import DownloadPress from "./Pages/download/downloadPress";
import DownloadRecord from "./Pages/download/downloadRecord";

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
            <Route path="/Home" element={ <IndexHome /> } />
            <Route path="/Input" element={ <Input /> } />
            <Route path="/Report" element={ <Report /> } />
            <Route path="/Schedule" element={ <Schedule /> } />
            <Route path="/About" element={ <About /> } />
        {/* =================END OF DASHBOARD==================== */}

            {/* <Route path="/trial2" element={ <Home /> } /> */}
            {/* <Route path="/table" element={ <DataTables  /> } />
            <Route path="/testTable" element={ <DataTables  /> } /> */}

        {/* =================INPUT=============================== */}
            <Route path="/inputTempCont" element={ <InputTempCont /> } />
            <Route path="/inputTempPress" element={ <InputTempPress /> } />
            <Route path="/inputTempRecord" element={ <InputTempRecord /> } />
        {/* =================END OF INPUT======================== */}
        
        {/* =================DOWNLOAD=============================== */}
            <Route path="/downloadtemp" element={ <DownloadTemp /> } />
            <Route path="/downloadpress" element={ <DownloadPress /> } />
            <Route path="/downloadrecord" element={ <DownloadRecord /> } />
        {/* =================END OF DOWNLOAD======================== */}
        </Route>
      </Routes>

      {page === '/'  ? '' : page === '/login' ? '' : <Footer/> }

    </div>

  )
  }


export default App;


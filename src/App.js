// import from React 
// import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom"
import ProtectedRoutes from '../src/utils/protectedRoutes'

// import component
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';

// import JSX Page
import Home from "./Pages/home";
import About from "./Pages/About";
import Input from "./Pages/menuInput";
import Report from "./Pages/report";
import Schedule from "./Pages/schedule";
import DataTables from './Components/testing/datatableDev'
import Datatables2 from "./Components/testing/funcDatatables2";
import HookForm from "./Pages/hookForm";

// import Greeting & Login Page
import Greetings from "./Pages/greeting";
import LoginPages from "./Pages/login/loginPages";


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

         <Route path="/" element={<ProtectedRoutes />}>

        <Route path="/Home" element={ <Home /> } />
        <Route path="/Input" element={ <Input /> } />
        <Route path="/Report" element={ <Report /> } />
        <Route path="/Schedule" element={ <Schedule /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/table" element={ <DataTables  /> } />
        <Route path="/trialpage" element={ <Datatables2 /> } />
        <Route path="/hookform" element={ <HookForm /> } />
        </Route>
      </Routes>

      {page === '/'  ? '' : page === '/login' ? '' : <Footer/> }

    </div>

  )
  }


export default App;


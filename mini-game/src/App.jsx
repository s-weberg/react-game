import React, { useState } from 'react';

import {BrowserRouter, Routes, Route} from "react-router";
import './components/game.css';

import Game from "./components/game.jsx";
import "./components/login.jsx";
import "./components/registration.jsx";
import LogInRegistration from "./components/loginRegistration.jsx";



function App() {


  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<LogInRegistration/>} />
        <Route path="/game" element={<Game/>} />
        </Routes>
        </BrowserRouter>
  )
}

export default App;

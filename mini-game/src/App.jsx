import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router"
import './components/game.css';
import LogIn from "./components/login.jsx";
import Game from "./components/game.jsx";


function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/game" element={<Game/>} />
        </Routes>
        </BrowserRouter>
  )
}

export default App;

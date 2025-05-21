import { Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import LoginRegistration from './loginRegistration.jsx';
import Game from './game.jsx'; 
import './login.css';

function App() {
  return (
    <Routes>
   
      <Route path="/" element={<LoginRegistration />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
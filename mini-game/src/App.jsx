import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Login from './components/login.jsx'; 
import Registration from './components/registration.jsx'; 
import Game from './components/game.jsx'; 
import './components/game.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
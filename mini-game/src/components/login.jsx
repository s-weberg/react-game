import React, { useState } from "react";
 
import {useNavigate} from "react-router"; 
import './login.css';



function logIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleLogin = () => {
        console.log('Login:', {email, password});
    };
    
     return (
        <div className="login-box">
        <div className="login">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className="password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
        </div>
        </div>
       
      );
    }

    export default logIn;

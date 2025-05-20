import React, { useState } from "react"
import {useNavigate} from "react-router"  

import './login.css';


function registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = () => {
        if (!email) {
            setFeedback('Enter your email');
            return;
        }
        setFeedback('You are registered!');
        setEmail('');
        setPassword('');
        navigate('/game');
    };

    return (
        <div>
            <h2 className="signup-btn">Sign up</h2>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"/>

            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />

            <button className="register-btn"
            onClick={handleSubmit}>
            Register
            </button>
            
            {feedback && {feedback}}

        </div>
    )
}

export default registration;
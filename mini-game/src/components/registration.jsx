import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import './login.css';


    function Registration({ handleUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleReg = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    if (!email || !password) {
      setFeedback('Please fill in all fields');
      return;
    }

    if (user.email === email) {
      setFeedback("You're already a gamer!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    setFeedback("You're a gamer!");
    setEmail('');
    setPassword('');
    setTimeout(() => {
      navigate('/game');
    }, 1000);
  };

    return (
        <div>
            <h2 className="signup-btn">Sign up</h2>
             {feedback && (
            <p className={`feedback ${feedback.includes('registered') }`}>
            {feedback}
          </p>
        )}
             <form onSubmit={handleReg}>
          <div className="form-reg">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"/>

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button className="register-btn"
            type="submit">
            Register
            </button>
      
       </div>
       
        <div>
        <p className="account-exist">
          Already have an account?{' '}
          </p>
          <button className="login"
            onClick={() => handleUser('/login')}>
            Log in
          
        </button>
       
      </div>
      

       <div>
            Already a gamer?{' '}
            
              <p
              onClick={() => handleUser('login')}>
            </p>
              Log in
            
          </div>
           </form>
    </div>
  );

}


export default Registration;


/*
function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async () => {
        try {
        if (!email || !password) {
            setFeedback('Enter your email');
            return;
        }
        console.log('Registration:', { email, password });
        setFeedback('You are registered!');
        setEmail('');
        setPassword('');
        // Navigate to game after little delay
        setTimeout(() => {
            navigate('/game');
         }, 1000);
        } catch (error) {
        setFeedback('Registration failed. Please try again.');
        console.error('Registration error:', error);
    
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
      
       
       
        <div>
        <p className="account-exist">
          Already have an account?{' '}
          </p>
          <button className="login"
            onClick={() => navigate('/login')}>
            Log in
          
        </button>
      </div>
    </div>
  );
}
}*/


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import './game.jsx';
import './registration.jsx';



    function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('user')) || {};

      if (!email || !password) {
      setFeedback('Please fill in all fields');
      return;
    }
 if (user.email === email && user.password === password) {
      setFeedback('Login successful!');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        navigate('/game');
      }, 1000);
    } else {
      setFeedback('Invalid email or password');
    }
  };
      return (

        
        
    <div className="form-box">
      {feedback && (
        <p className={`text-center mb-4 ${feedback.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}
      <form className="login" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>
      
      <div>
        <p className="account-exist">
          Don't have an account?{' '}
          <button className="register-btn" onClick={() => { console.log('Navigating to /registration'); navigate('/registration'); }}>
          Sign up
        </button>
        </p>
      </div>
      </form>
    </div>
  );
}

export default Login;
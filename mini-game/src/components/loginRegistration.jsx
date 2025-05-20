import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login.jsx";
import Registration from "./registration.jsx";

function LoginRegistration() {
  const [form, setForm] = useState('login');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">
          {form === 'login' ? 'Log In' : 'Sign Up'}
        </h2>
        {form === 'login' ? (
          <Login handleUser={setForm} navigate={navigate} />
        ) : (
          <Registration handleUser={setForm} navigate={navigate} />
        )}
      </div>
    </div>
  );
}

export default LoginRegistration;
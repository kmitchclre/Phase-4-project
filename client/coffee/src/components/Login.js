import React, { useState } from "react";
import coffee from "../assets/coffee.jpg";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleSignup() {
    navigate("/SignUpForm");
  }

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w=full h-full" src={coffee} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold text-center mb-8">Café Java</h2>
            <div>
              <input
                className="border p-2 mr-2"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="border p-2"
                type="password"
                autoComplete="current-password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-2 my-4 bg-orange-400 hover:bg-orange-300">
              Sign In
            </button>
            <p className="text-center">Forgot Username or Password?</p>
          </form>
          <button onClick={handleSignup} className="text-center">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

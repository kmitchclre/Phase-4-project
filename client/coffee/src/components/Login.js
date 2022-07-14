import React, { useState } from "react";
import coffee from "../assets/coffee.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";

function Login({ onLogin }) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    auth.signin(
      username,
      password,
      () => {
        navigate("/CoffeePage", { replace: true });
      },
      (error) => {
        setError(error.error.login);
      }
    );

    //navigate("/CoffeePage");
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
            {error && (
              <div className="bg-red-200 text-red-600 py-2 px-4">{error}</div>
            )}
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

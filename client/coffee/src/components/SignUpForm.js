import React, { useState } from "react";
import coffee from "../assets/coffee.jpg";

function SignUpForm({ setCurrentUser }) {
  const [username, Setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser);
      } else {
        res.json().then((e) => setErrors(Object.entries(e.error).flat()));
      }
    });
  }
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w=full h-full" src={coffee} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold text-center mb-8">Café Java.</h2>
            <div>
              <input
                className="border p-2 mr-2"
                type="text"
                id="username"
                autoComplete="off"
                placeholder="Username"
                value={username}
                onChange={(e) => Setusername(e.target.value)}
              />
              <input
                className="border p-2"
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <button
              className="w-full
              py-2 my-4 bg-orange-400 hover:bg-orange-300"
              type="submit"
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

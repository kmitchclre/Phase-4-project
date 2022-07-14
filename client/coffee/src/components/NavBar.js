import React, { useState, useEffect } from "react";

async function fetchUser() {
  const response = await fetch("http://localhost:3000/me", {
    mode: "cors",
    credentials: "include",
  });
  const currentUser = await response.json();
  return currentUser;
}

function NavBar() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser().then((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <div className="w-screen h-[45px] z-10 bg-orange-400 fixed-drop-shadlow-lg">
      <div className="px-1 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-black">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Café Java</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Welcome! {user.username}</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import { FiCoffee } from "react-icons/fi";

function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!auth.user ? (
        ""
      ) : (
        <div className="w-screen h-[75px] z-10 bg-orange-300 fixed-drop-shadlow-lg">
          <div className="px-1 flex justify-between items-center w-full h-full">
            <div className="flex items-center text-black">
              <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                Café Java
                <FiCoffee />
              </h1>
              <ul className="hidden md:flex space-x-5">
                <button>
                  <NavLink to="/CoffeePage">Home</NavLink>
                </button>
                {/* <button>
                  <NavLink to="/About">About</NavLink>
                </button> */}
                <button
                  onClick={() => {
                    localStorage.removeItem("coffee");
                    navigate("/reviewlist");
                  }}
                >
                  Reviews
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    auth.logout();
                  }}
                >
                  Logout
                </button>
                <li>Welcome {auth && auth.user.username}!</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

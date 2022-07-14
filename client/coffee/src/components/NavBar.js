import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAuth } from "../useAuth";

function NavBar() {
  const auth = useAuth();
  return (
    <>
      {!auth.user ? (
        ""
      ) : (
        <div className="w-screen h-[45px] z-10 bg-orange-300 fixed-drop-shadlow-lg">
          <div className="px-1 flex justify-between items-center w-full h-full">
            <div className="flex items-center text-black">
              <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Café Java</h1>
              <ul className="hidden md:flex space-x-5">
                <button>
                  <NavLink to="/CoffeePage">Home</NavLink>
                </button>
                {/* <button>
                  <NavLink to="/About">About</NavLink>
                </button> */}
                <button>
                  <NavLink exact to="/reviewlist">
                    Reviews
                  </NavLink>
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
            <div className="hidden md:flex pr-4">
              <button>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

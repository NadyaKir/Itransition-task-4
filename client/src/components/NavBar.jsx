import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/signin");
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-gray-800 h-16 p-2 w-full">
      <div className="mx-auto px-4 flex justify-between items-center">
        <div>
          {userEmail && (
            <span className="text-white">Logged in as: {userEmail}</span>
          )}
        </div>
        <div>
          {token && (
            <button
              onClick={handleLogout}
              className="bg-transparent border border-red-500 hover:bg-red-500 text-white hover:text-white font-bold py-2 px-4 rounded outline-none focus:outline-none"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

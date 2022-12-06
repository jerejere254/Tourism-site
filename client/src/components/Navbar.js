import React from 'react'
import { Link } from "react-router-dom";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { FaShopify, FaCog } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser, number, setNumber }) {
  const navigate = useNavigate();

  function handleTouristLogOut() {
    fetch("http://127.0.0.1:3000/api/tourist_logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        setNumber(0);
        navigate("/");
      }
    });
  }

  function handleTourguideLogOut() {
    fetch("http://127.0.0.1:3000/api/tourguide_logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <nav className="flex number-center justify-between flex-wrap bg-black p-6">
      <div className="flex number-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          color="blue"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight text-teal-200 hover:text-white hover:cursor-pointer mr-5">
          <Link to="/">MOJE</Link>
        </span>

        <Link to="/" className=" text-teal-200 hover:text-white ml-5">
          All Sites
        </Link>
      </div>

      {user ? (
        <h1 className=" text-teal-200 hover:text-white ">Hi {user.username}</h1>
      ) : null}

      <div className="flex number-center text-lg">
        {user && user.user_type === "tourist" ? (
          <Link
            to="/basket"
            className=" text-teal-200 hover:text-white mr-5 text-"
          >
            <Badge badgeContent={number} color="secondary" className="text-2xl">
              <FaShopify />
            </Badge>
          </Link>
        ) : null}

        {user && user.user_type === "tourguide" ? (
          <Link
            to="/manage_sites"
            className=" text-teal-200 hover:text-white mr-5 text-"
          >
            <FaCog />
          </Link>
        ) : null}

        {user && user.user_type === "tourist" ? (
          <button
            className="text-teal-200 hover:text-white mr-5"
            onClick={handleTouristLogOut}
          >
            tourist logout
            <FaPowerOff className="inline ml-1 " />
          </button>
        ) : (
          <Link
            to="/tourist_login"
            className="text-teal-200 hover:text-white mr-5"
          >
            <FaUserCircle className="inline mr-1 mt-0" />
            Tourist Login
          </Link>
        )}

        {user && user.user_type === "tourguide" ? (
          <button
            className="text-teal-200 hover:text-white mr-5"
            onClick={handleTourguideLogOut}
          >
            tourguide logout
            <FaPowerOff className="inline ml-1 " />
          </button>
        ) : (
          <Link
            to="/tourguide_login"
            className="text-teal-200 hover:text-white mr-5"
          >
            <FaUserCircle className="inline mr-1 mt-0" />
            Tourguide Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
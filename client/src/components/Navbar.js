import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { FaShoppingCart, FaCog } from "react-icons/fa";

import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser, items, setItems }) {
  const navigate = useNavigate();

  function handleCustomerLogOut() {
    fetch("/api/customer_logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        setItems(0);
        navigate("/");
      }
    });
  }

  function handleVendorLogOut() {
    fetch("/api/vendor_logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
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
          <Link to="/">E-MALL</Link>
        </span>

        <Link to="/" className=" text-teal-200 hover:text-white ml-5">
          All Products
        </Link>
      </div>

      {user ? (
        <h1 className=" text-teal-200 hover:text-white ">Hi {user.username}</h1>
      ) : null}

      <div className="flex items-center text-lg">
        {user && user.user_type === "customer" ? (
          <Link
            to="/cart"
            className=" text-teal-200 hover:text-white mr-5 text-"
          >
            <Badge badgeContent={items} color="secondary" className="text-2xl">
              <FaShoppingCart />
            </Badge>
          </Link>
        ) : null}

        {user && user.user_type === "vendor" ? (
          <Link
            to="/manage_products"
            className=" text-teal-200 hover:text-white mr-5 text-"
          >
            <FaCog />
          </Link>
        ) : null}

        {user && user.user_type === "customer" ? (
          <button
            className="text-teal-200 hover:text-white mr-5"
            onClick={handleCustomerLogOut}
          >
            customer logout
            <FaPowerOff className="inline ml-1 " />
          </button>
        ) : (
          <Link
            to="/customer_login"
            className="text-teal-200 hover:text-white mr-5"
          >
            <FaUserCircle className="inline mr-1 mt-0" />
            Customer Login
          </Link>
        )}

        {user && user.user_type === "vendor" ? (
          <button
            className="text-teal-200 hover:text-white mr-5"
            onClick={handleVendorLogOut}
          >
            vendor logout
            <FaPowerOff className="inline ml-1 " />
          </button>
        ) : (
          <Link
            to="/vendor_login"
            className="text-teal-200 hover:text-white mr-5"
          >
            <FaUserCircle className="inline mr-1 mt-0" />
            Vendor Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
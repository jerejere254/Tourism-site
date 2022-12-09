import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TouristLoginForm({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/tourists_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <h1 className="text-center p-6 text-4xl font-medium">TOURIST LOGIN</h1>
      <form
        className=" w-2/3 my-6 mx-auto flex flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="text-l">
          UserName:
        </label>
        <input
          required
          className="bg-[#0a0a23] mt-2 h-8"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="mt-5 text-xl">
          Password:
        </label>
        <input
          className="bg-[#0a0a23] mt-2 h-8"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.map((error) => {
          return (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          );
        })}
        <button className="bg-blue-500 hover:bg-blue-700 mt-6 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <h2 className="text-center mt-6 py-6 text-xl ">
          Don't have an account?
        </h2>

        <Link
          to="/tourist_signup"
          className="text-center text-l text-green-500 underline hover:text-teal-200"
        >
          Sign Up here
        </Link>
      </form>
    </div>
  );
}

export default TouristLoginForm;
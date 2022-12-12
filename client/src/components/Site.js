import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./site.css";
import { useNavigate } from "react-router-dom";

function Site({ number, setNumber }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [site, setSite] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`/api/sites/${id}`)
      .then((res) => res.json())
            .then((data) => {
               setSite(data);
              
      });
  }, [id]);

 console.log(site)

 





  function handleOrderClick() {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ site_id: id }),
    }).then((r) => {
      if (r.ok) {
        setNumber(number + 1);
        navigate("/basket");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <hr></hr>
      <div className="flex m-5 main-cont">
        <div className="w-2/5 mr-5 cont-left">
          <img
            className="w-full rounded-3xl max-h-[60vh] object-cover"
            alt="loading"
            src={site.image_url}
          ></img>
        </div>
        <div className="w-3/5 cont-right">
          <div className="w-5/6 mx-auto border-solid border-2 border-slate-800  p-3 inner-cont">
            <h1 className="text-center font-black  text-white text-2xl">
              Site Details
            </h1>
            <hr></hr>
            <p className="font-bold mt-2 text-center ">
                     {`VISIT ${site.title}`}
            </p>
            <p className="font-bold mt-2 text-xl">
              Description: {site.description}
              <span className="text-lg font-light text-neutral-400 ml-3">
                
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Price:Ksh  {site.price}
              <span className="text-lg font-black text-neutral-400 ml-3">
                
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
               Remaining:  {site.remaining}
              <span className="text-lg font-light text-neutral-400 ml-3">
               
              </span>
            </p>

            <h1 className="text-center font-black mt-3 text-white text-2xl">
              Tourguide's Details
            </h1>
            <hr></hr>
            <p className="font-bold mt-2 text-xl">
              Name:{site.username}
              <span className="text-lg font-light text-neutral-400 ml-3">
                
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Phone:{site.phone}
              <span className="text-lg font-light text-neutral-400 ml-3">
                
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Email: {site.email}
              <span className="text-lg font-light text-neutral-400 ml-3">
                
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
               Address: {site.address}
              <span className="text-lg font-light text-neutral-400 ml-3">
                
              </span>
            </p>
            <hr></hr>
            {errors.map((error) => {
              return (
                <div
                  className="bg-red-100 w-full mx-auto border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5 text-center"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              );
            })}
            <div className="flex justify-center">
              <button
                className='bg-green-900 w-full hover:bg-green-500 mt-8  py-2 px-4 rounded text-lg font-bold border border-white hover:border-transparent"'
                onClick={handleOrderClick}
              >
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
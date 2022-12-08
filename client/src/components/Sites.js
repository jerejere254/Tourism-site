import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";


function Sites() {
  const navigate = useNavigate();
  const [Sites, setSites] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/sites")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSites(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center p-3 text-white text-xl font-black">
        ALL AVAILABLE Sites
      </h1>
      <div className="mx-8 pb-8" >
      <Grid container spacing={5} >
        
        {/* <div className="flex flex-wrap gap-8 justify-evenly  p-4 font-bold"> */}
        {Sites.map((site) => (
          <Grid item xs={12} sm={6}  md={4} lg={3}>
            <div
              className=" rounded-xl overflow-hidden shadow-2xl bg-[#1F2937]"
              key={site.id}
            >
              <img
                className="w-full h-80 object-cover"
                src={site.image_url}
                alt="site"
              ></img>
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">{site.title}</div>
                <div className="w-9/12 mx-auto">
                  <p className="text-center ">Ksh. {site.price}</p>
                </div>
                <div className="flex justify-center">
                  <button
                    className=" bg-purple-900 hover:bg-purple-600 mt-5  py-2 px-4 border border-purple-300 hover:border-transparent rounded"
                    onClick={() => navigate(`/view_site/${site.id}`)}
                  >
                    Explore site
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        ))}
        {/* </div> */}
      </Grid>
      </div>

    </div>
  );
}

export default Sites;
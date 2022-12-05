import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate, useParams } from "react-router-dom";

function SiteEditForm() {
  const [errors, setErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const [price, setPrice] = useState(0);
  const [remaining, setremaining] = useState(0);

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/tourguide_sites/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setImage_url(data.image_url);
        setremaining(data.remaining);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://127.0.0.1:3000/api/tourguide_sites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image_url,
        price,
        remaining,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          navigate("/manage_sites");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center p-3 text-white text-2xl font-bold">
          EDIT SITE DETAILS
        </h1>

        <div className="flex flex-col w-1/2 gap-8 flex-wrap mx-auto edit-form">
          <fieldset className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="description">Description</label>
            <textarea
              className="text-black mt-2 p-1"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="image_url">Image URL</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="text"
              name="image_url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="remaining">Remaining</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="remaining"
              type="number"
              value={remaining}
              onChange={(e) => setremaining(e.target.value)}
            />
          </fieldset>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 mt-6 w-2/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
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
        </div>
      </form>
    </div>
  );
}

export default SiteEditForm;
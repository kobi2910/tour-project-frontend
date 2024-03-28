import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../..";
import { AppContext } from "../../App";

// this is the form that will be used to create a new trip

function TripCreateForm() {
  const { token, user } = useContext(AppContext);
  const nav = useNavigate();
  useEffect(() => {
    console.log("Token:", token, "User:", user);
  }, [token]);

  const [title, setTitle] = useState("");
  // const [guide, setGuide] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleTripNameChange = (event) => {
    setTitle(event.target.value);
    console.log("Title:", event.target.value);
  };

  const handleDestinationChange = (event) => {
    setArea(event.target.value);
    console.log("Destination:", event.target.value);
  };

  const handleStartDateChange = (event) => {
    setDate(event.target.value);
    console.log("Date:", event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log("Price:", event.target.value);
  };
  const handelTripDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("description:", event.target.value);
  };

  // const handleGuideChange = (event) => {
  //   setGuide(event.target.value);
  //   console.log("Guide:", event.target.value);
  // };

  const guide = user.username;
  const tripData = {
    title,
    guide,
    date,
    area,
    price,
    description,
  };
  console.log("Trip Data:", tripData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("data is being sent");
    try {
      const response = await axios.post(BaseUrl + "trips/create/", tripData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    nav('/trips')
  };

  return (
    <div className="form-container">
      <h2>Create a New Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Trip Name:
          <input type="text" value={title} onChange={handleTripNameChange} />
        </label>
        <br />
        <label>
          description
          <textarea
            type="text"
            value={description}
            onChange={handelTripDescriptionChange}
          />
        </label>
        <br />

        <label>
          Destination:
          <select value={area} onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            <option value='Golan'>Golan</option>
            <option value='Galil'>Galil</option>
            <option value='Negev'>Negev</option>
            <option value='Jerusalem'>Jerusalem</option>
            <option value='Tel Aviv'>Tel Aviv</option>
          </select>
        </label> 
        <br />

        <label>
          Date:
          <input type="date" value={date} onChange={handleStartDateChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        {/* <label>
          Guide:
          <input type="text" value={guide} onChange={handleGuideChange} />
        </label> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TripCreateForm;

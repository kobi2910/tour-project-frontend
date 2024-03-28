import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
import { BaseUrl } from "../../index";

const TripUpdate = ({ trip }) => {
  const token = useContext(AppContext).token;
  const nav = useNavigate();

  const [updatedTrip, setUpdatedTrip] = useState({
    // Initialize the trip object with prev values
    title: trip.title,
    guide: trip.guide,
    date: trip.date,
    area: trip.area,
    price: trip.price,
    description: trip.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data is being sent");
    try {
      const response = await axios.patch(
        BaseUrl + `trips/${trip.id}/update/`,
        updatedTrip,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Trip updated:", updatedTrip);
    nav("/trips");
  };

  return (
    <div>
      <h2>Trip Update</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Trip Name:
          <input
            type="text"
            name="title"
            value={updatedTrip.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          area:
          <select name="area" value={updatedTrip.area} onChange={handleChange}>
            <option value="Golan">Golan</option>
            <option value="Galil">Galil</option>
            <option value="Negev">Negev</option>
            <option value="Jerusalem">Jerusalem</option>
            <option value="Tel Aviv">Tel Aviv</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={updatedTrip.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="float"
            name="price"
            value={updatedTrip.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          description:
          <input
            type="text"
            name="description"
            value={updatedTrip.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Update Trip</button>
      </form>
    </div>
  );
};

export default TripUpdate;

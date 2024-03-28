import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import TripUpdate from "./TripUpdate";

function TripDetail() {
  const { user } = useContext(AppContext);
  console.log(user);

  const [showOwner, setShowOwner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user && user.username === trip.guide) {
      setShowOwner(true);
    }
  }, []);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { id } = useParams();
  const trip = useLoaderData(id);

  return (
    <div className="trip-details-container">
      <div className="trip-title">
        <h2>{trip.title}</h2>
      </div>
      <div className="trip-details">
        <h2>when : {trip.date}</h2>
        <h2>guide : {trip.guide}</h2>
        <h2>where : {trip.area}</h2>
        <h2>price : {trip.price}</h2>
      </div>
      <div className="trip-description">
        <p>{trip.description}</p>
      </div>
      {showOwner && (
        <button onClick={handleEditClick} className="btn-primary">
          Edit
        </button>
      )}
      {showModal && <TripUpdate trip={trip} closeModal={closeModal} />}
      <br />
      <button className="btn-secondary">
        <Link to={`/trips/`}>back to list</Link>
      </button>
    </div>
  );
}

export default TripDetail;

export const tripDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://127.0.0.1:8000/api/trips/${params.id}/`);
  return res.json();
};

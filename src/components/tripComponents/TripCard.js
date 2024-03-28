import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip }) {
  console.log("Trip:", trip);

  return (
    <div className="card--container">
      <img src="https://picsum.photos/100/120" alt="no img" />
      <div className="card--info">
        <h3>{trip.title}</h3>
        <p>date: {trip.date}</p>
        <p>price : {trip.price}</p>
        <button className="btn-secondary">
        <Link className="card--link" to={`/trips/${trip.id}`}>
          View Details
        </Link>
        </button>
      </div>
    </div>
  );
}

export default TripCard;

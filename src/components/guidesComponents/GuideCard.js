import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => {
  console.log("GuideCard", guide);
  return (
    <div className="card--container">
      <img src="https://picsum.photos/50/50" alt="card img" />
      <h1>{guide.username}</h1>
      <p>{guide.email}</p>
      <div className="btn-primary">
        <Link to={`/guides/guides/${guide.id}`}>View</Link>
      </div>
    </div>
  );
};

export default GuideCard;

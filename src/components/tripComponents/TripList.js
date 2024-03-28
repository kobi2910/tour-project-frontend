import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import TripCard from "./TripCard";
import TripCreateForm from "./TripCreateForm";
import { AppContext } from "../../App";
import { BaseUrl } from "../..";

const TripList = () => {
  const { user } = useContext(AppContext);

  const [listOfTrips, setListOfTrips] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isCurrentUserGuide, setIsCurrentUserGuide] = useState(false);

  useEffect(() => {
    if (user && user.is_guide) {
      setIsCurrentUserGuide(true);
    }
  }, [user]);

  useEffect(() => {
    console.log("Fetching trips..."); // debug log
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl + "trips/");
        console.log("Response:", response.data); // debug log
        setListOfTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {isCurrentUserGuide && (
          <div>
            <button
              className="btn-secondary"
              onClick={() => setShowCreateForm(true)}
            >
              Create New Trip
            </button>
            {showCreateForm && (
              <TripCreateForm onClose={() => setShowCreateForm(false)} />
            )}
          </div>
        )}
      </div>
      <div className="trip-list-container">
        <ul className="trip-list">
          {listOfTrips &&
            listOfTrips.map((trip) => <TripCard trip={trip} key={trip.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TripList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../tripComponents/TripCard";
import { BaseUrl } from "../../index";

const HomeTrip = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(BaseUrl + "trips/trips_home/");
        // Get the last 5 trips from the response data:
        const lastFiveTrips = response.data
        console.log("lastFiveTrips:", lastFiveTrips);
        setTrips(lastFiveTrips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="home--section">
      {trips.map((trip) => (
        <div key={trip.id} className="home--section--card">
          <TripCard trip={trip} />
        </div>
      ))}
    </div>
  );
};

export default HomeTrip;

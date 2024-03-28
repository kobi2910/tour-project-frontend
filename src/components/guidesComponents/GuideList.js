// component that displays a list of guides
import React, { useEffect, useState } from "react";
import axios from "axios";
import GuideCard from "./GuideCard";
import { BaseUrl } from "../..";

const GuideList = () => {
  const [listOfGuides, setListOfGuides] = useState([]);

  useEffect(() => {
    console.log("Fetching guides..."); //debug log
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl + "guides/guides/");
        console.log("Response:", response.data); //debug log
        setListOfGuides(response.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      }
    };

    fetchData();
  }, []);

  console.log("List of guides:", listOfGuides); //debug log

  return (
    <div className="guide-list-container">
      <ul>
        {listOfGuides.map((guide) => (
          <GuideCard guide={guide} key={guide.id} />
        ))}
      </ul>
    </div>
  );
};

export default GuideList;

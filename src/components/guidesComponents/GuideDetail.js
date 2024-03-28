import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
import { BaseUrl } from "../..";
import GuideProfileUpdate from "./GuideProfileUpdate";


const GuideDetail = () => {
  const { user } = useContext(AppContext);

  const [isCurrentUserOwner, setIsCurrentUserOwner] = useState(false);
  const [guideData, setGuideData] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (user !== null && user.username === guideData.username) {
      setIsCurrentUserOwner(true);
      console.log("User is a guide");
    }
  }, [user, guideData.username]);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await axios.get(BaseUrl + `guides/guides/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setGuideData(response.data);
        console.log("Guide Data:", response.data);
      } catch (error) {
        console.error("Error fetching guide:", error);
      }
    };
    fetchGuide();
  }, [id]);

  const handelEditClick = () => {
    setShowEditForm(true);
  };

  return (
    <div>
      <h2>username : {guideData.username}</h2>
      <p>email: {guideData.email}</p>
      <p>first name: {guideData.first_name}</p>
      <p>last name: {guideData.last_name}</p>

      {isCurrentUserOwner && <button onClick={handelEditClick}>Edit</button>}
      {showEditForm && <GuideProfileUpdate guideData={guideData} />}
    </div>
  );
};

export default GuideDetail;

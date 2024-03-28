import React, { useState, useContext } from "react";
import axios from "axios";
import { BaseUrl } from "../../index";
import { AppContext } from "../../App";


const EditProfile = ({ guideData }) => {
  const token = useContext(AppContext).token;
  console.log("Guide Data:", guideData);

    const [updatedProfile, setUpdatedProfile] = useState({
        username: guideData.username,
        email: guideData.email,
        first_name: guideData.first_name,
        last_name: guideData.last_name,
        // bio: guide.bio,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProfile((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log("Guide Data:", guideData);
        e.preventDefault();
        try {
        const response = await axios.put(
            BaseUrl + `guides/guides/${guideData.id}/`,
            updatedProfile,
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
    };

    return (
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            User name
            <input
              type="text"
              name="username"
              value={updatedProfile.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={updatedProfile.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={updatedProfile.first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={updatedProfile.last_name}
              onChange={handleChange}
            />
            <br />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={updatedProfile.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

export default EditProfile;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../App";
import { BaseUrl } from "../../index"

// create new post:

const CretePost = () => {
  const { token, user } = useContext(AppContext);
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const author = user.username;
  console.log(author);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, content, author };

    try {
      const response = await axios.post(BaseUrl + "blog/create/", post, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      console.log("res:", response);
      alert("Post created successfully");
      nav("/");
    } catch (error) {
      console.log("err:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default CretePost;

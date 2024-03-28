import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../App";
import { BaseUrl } from "../../index"

// update post:

const UpdatePostModal = ({ post, closeModal }) => {
  console.log(post);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const token = useContext(AppContext).token;
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };

    try {
      const response = await axios.patch(
        BaseUrl + `blog/${post.id}/update/`,
        updatedPost,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("res:", response, "hi from update");
      alert("Post updated successfully");
      closeModal(); // Close modal after successful update
      nav('/blog')
    } catch (error) {
      console.log("err:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePostModal;
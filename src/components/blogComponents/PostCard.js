import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log("Post:", post);
  console.log(post.author);

  return (
    <div className="card--container">
      <div className="card--info">
        <h2>{post.title}</h2>
      </div>
      <br />
      <div className="card--text">
        <p>{post.content}</p>
      </div>
      <div className="card--info">
        <h3>{post.author}</h3>
        <h3>{post.date}</h3>
      </div>
      <br />
      
      <div className="btn-secondary">
        <Link to={`/blog/${post.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;

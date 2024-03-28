import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { BaseUrl } from "../..";
import { Link } from "react-router-dom";

const PostList = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    console.log("Fetching posts..."); //debug log
    const fetchData = async () => {
      try {
        const response = await axios.get(BaseUrl + "blog/");
        console.log("Response:", response.data); //debug log
        setListOfPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  console.log("List of posts:", listOfPosts); //debug log

  return (
    <div >
      <button className="btn-primary">
        <Link to="/blog/create">Create Post</Link>
      </button>
      <span className="trip-list-container ">
        <ul className="trip-list ">
          {listOfPosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ul>
      </span>
    </div>
  );
};

export default PostList;

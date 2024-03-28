import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../index";

const HomeBlog = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(BaseUrl + "blog/post_home/");
          // Get the last 5 trips from the response data:
          const lastTowPosts = response.data
          setPosts(lastTowPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
  
      fetchBlog();
    }, []);
  
    return (
      <div className="home--section">
        {posts.map((post) => (
            <div key={post.id} className="home--section--post">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <a href={`/blog/${post.id}`} className="btn-secondary">Read more</a>
            </div>
            ))}
      </div>
    );
  };
  
  export default HomeBlog;
  
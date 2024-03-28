import { useState, useContext } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { AppContext } from "../../App";
import UpdatePostModal from './PostUpdate';

function PostDetail() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const post = useLoaderData(id);

  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="post-details-container">
      <img className="post--img" src="https://picsum.photos/1000/1000" alt="no img" />
      <h1>{post.title}</h1>
      <br />
      <div className="post-header">
        <p>
          author: {post.author} published: {post.date}
        </p>
      </div>
      <div className="post-details--text">
        <p>{post.content}</p>
      </div>
      <br />
      {user && user.username === post.author && (
        <button className="btn--primary" onClick={handleEditClick}>Edit</button>
      )}
      {showModal && (
        <UpdatePostModal post={post} closeModal={closeModal} />
      )}
    </div>
  );
}

export default PostDetail;

export const postDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://127.0.0.1:8000/api/blog/${params.id}/`);
  console.log("res:", res);
  return res.json();
};

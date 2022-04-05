import React from 'react'; 
//import PropTypes from "prop-types";
import "./Posts.css";

const Post = ({ id, activity, date, duration, kcal, distance, deletePost }) => {
  return (
    <div className="post">
      <div className="postActivity">Activity: {activity}</div>
      <div className="postDate">Date : {date}</div>
      <div className="postDuration">Duration : {duration}</div>
      <div className="postKcal">kcal : {kcal}</div>
      <div className="postDistance">Distance : {distance}</div>
      <button className="Post__delete" onClick={() => deletePost(id)}>
        x
      </button>
    </div>
  )};

//   Post.PropTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     deletePost: PropTypes.func.isRequired,
//   };

  export default Post;
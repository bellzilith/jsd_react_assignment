import React from "react";
import Post from "../Posts/Posts";
import { useUserRecords } from "../Hooks/Hooks";
// import {removeRecords } from '../Api/Api';
import axios from "axios";
import "./History.css";

const History = ({ posts }) => {
  const deletePost = (id) => {
    // const updatePosts = posts.filter((post) => post.id !== id);
    // setPosts(updatePosts);
  }

  return (
    <main>
      <h2 className="title">Recent Activities</h2>
      <div className="history">
        {posts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            activity={post.activity}
            date={post.date}
            duration={post.duration}
            kcal={post.kcal}
            distance={post.distance}
            deletePost={deletePost}
          />
        ))}
      </div>
    </main>
  );
};

export default History;

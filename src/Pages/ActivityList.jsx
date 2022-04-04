import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Post from "../Components/Posts/Posts";
import Profile from "../Components/Profile/Profile";

import "../App.css";

const ActivityList = (props) => {
    const [posts, setPosts] = useState([
      {
        id: 1,
        activity: "running",
        date: "4/4/2022",
        duration: "30:00",
        kcal: 120,
        distance: 5,
      },
      {
        id: 2,
        activity: "hiking",
        date: "4/4/2022",
        duration: "30:00",
        kcal: 120,
        distance: 5,
      },
      {
        id: 3,
        activity: "swimming",
        date: "4/4/2022",
        duration: "30:00",
        kcal: 120,
        distance: 5,
      },
    ]);
    // useEffect(() => {
    //     ////////////////////////////////////////////////////////////////
    //     setPost([].t...);
    // })

    // const addPost = ({ activity, date, duration, kcal, distance }) => {
    //   const newPost = { id, activity, date, duration, kcal, distance };
    //   console.log(newPost);
    //   setPosts([newPost, ...posts]);
    // };

    const deletePost = (id) => {
        const updatePosts = posts.filter((post) => post.id !== id);
        setPosts(updatePosts);
    }

  return (
    <main>
      <NavBar />
      <Profile />
      <div className="history">
      {posts.map((post) => (
        <Post
          key={post.id}
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

export default ActivityList;

import React from 'react';
import Post from "../Posts/Posts";
import { useUserRecords } from '../Hooks/Hooks';
import './History.css';

const History = () => {
    const [posts, setPosts] = useUserRecords();

    const addPost = ({ id, activity, date, duration, kcal, distance }) => {
      const newPost = { id, activity, date, duration, kcal, distance };
      console.log(newPost);
      setPosts([newPost, ...posts]);
    };

    const deletePost = (id) => {
      const updatePosts = posts.filter((post) => post.id !== id);
      setPosts(updatePosts);
    }

    return (
      <main>
        <h2 className="container">Recent Activities</h2>
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
}

export default History;
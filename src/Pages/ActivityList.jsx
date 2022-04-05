import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Post from "../Components/Posts/Posts";
import Profile from "../Components/Profile/Profile";
import History from "../Components/History"

import "../App.css";

const ActivityList = (props) => {

  return (
    <main>
      <NavBar />
      <Profile />
      <History />
    </main>
  );
};

export default ActivityList;

import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import InputActivity from '../Components/Input/InputActivity';
import Profile from "../Components/Profile/Profile";
import History from "../Components/History/";
import '../App.css';


const AddActivity = () => {
    return (
      <main>
          <NavBar />
          <Profile />
          <InputActivity />
          <History />
          
      </main>
    );
}

export default AddActivity;
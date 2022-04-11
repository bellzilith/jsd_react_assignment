import React, { useState, useEffect } from "react";
import ActivityButton from "../Button/ActivityButton";
import IconButton from "../IconButton/IconButton";
import { useUserRecords } from '../Hooks/Hooks';
import "./InputActivity1.css";

const InputActivity = ({ addPost }) => {
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState(""); //new Date()
  const [duration, setDuration] = useState("");
  const [kcal, setKcal] = useState("");
  const [distance, setDistance] = useState("");

  const [posts, setPosts] = useUserRecords();

    addPost = ({ id, activity, date, duration, kcal, distance }) => {
      const newPost = { id, activity, date, duration, kcal, distance };
      //console.log(newPost);
      setPosts([newPost, ...posts]);
    };

  const onChangeActivity = (e) => {
    setActivity(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeKcal = (e) => {
    setKcal(e.target.value);
  };

  const onChangeDistance = (e) => {
    setDistance(e.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    const valueInputActivity = {
      Activity: activity,
      Date: date,
      Duration: duration,
      Kcal: kcal,
      Distance: distance,
    };

    addPost(valueInputActivity);
    console.log(valueInputActivity);
  };

  return (
    <main>
      <div className="main-box">
        <div className="form-box">
          <h2 className="title_input">Add Activity</h2>
          <div className="form">

            {/*---------------Activity Type---------------*/}
            <div className="form-input">
              <label className="form-label" placeholder="Activity">
                Activity type
              </label>
              <input
                className="activity-input"
                type="text"
                value={activity}
                onChange={onChangeActivity}
                placeholder="Running"
                required
              />
            </div>
            <span>Error message</span>

            {/*---------------Date---------------*/}
            <div className="form-input">
              <label className="form-label" placeholder="Date">
                Date
              </label>
              <input
                className="date-input"
                type="date"
                value={date}
                onChange={onChangeDate}
                placeholder="1/1/22 12:00"
                required
              />
              </div>
              <span>Error message</span>

              {/*---------------Duration---------------*/}
              <div className="form-input">
              <label className="form-label" placeholder="Duration">
                Duration
              </label>
              <input
                className="duration-input"
                type="text"
                value={duration}
                onChange={onChangeDuration}
                placeholder="30:00:000"
                required
              />
              </div>
              <span>Error message</span>

              {/*---------------kcal---------------*/}
              <div className="form-input">
              <label className="form-label" placeholder="kcal">
                kcal
              </label>
              <input
                className="kcal-input"
                type="number"
                value={kcal}
                onChange={onChangeKcal}
                placeholder="120"
                required
              />
              </div>
              <span>Error message</span>
              
              {/*---------------Distance---------------*/}
              <div className="form-input">
              <label className="form-label" placeholder="Distance">
                Distance
              </label>
              <input
                className="distance-input"
                type="number"
                value={distance}
                onChange={onChangeDistance}
                placeholder="5 KM."
                required
              />
            </div>
            <span>Error message</span>
          </div>
        </div>
        <div className="icon-box">
          <IconButton src="./images/athletes/Running.png" alt="Running" />
          <IconButton src="./images/athletes/Badminton.png" alt="Badminton" />
          <IconButton
            src="./images/athletes/Canoe_Slalom.png"
            alt="Canoe_Slalom"
          />
          <IconButton
            src="./images/athletes/Cycling_Road.png"
            alt="Cycling_Road"
          />
          <IconButton src="./images/athletes/Football.png" alt="Football" />
          <IconButton src="./images/athletes/Handball.png" alt="Handball" />
          <IconButton src="./images/athletes/Karate.png" alt="Karate" />
          <IconButton
            src="./images/athletes/Sport_Climbing.png"
            alt="Sport_Climbing"
          />
          <IconButton src="./images/athletes/Surfing.png" alt="Surfing" />
          <IconButton src="./images/athletes/Swimming.png" alt="Swimming" />
        </div>
      </div>
      <div className="form-button">
        {/*---------------Button---------------*/}
        <ActivityButton onClick={(event) => submit(event)}>
          Save Activity
        </ActivityButton>
      </div>
    </main>
  );
};

export default InputActivity;

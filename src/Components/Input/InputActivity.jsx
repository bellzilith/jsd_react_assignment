import React, { useState } from "react";
import ActivityButton from "../Button/ActivityButton";
import IconButton from "../IconButton/IconButton";
import "./InputActivity.css";

const InputActivity = ({ addPost }) => {
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [kcal, setKcal] = useState("");
  const [distance, setDistance] = useState("");

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
  };
  return (
    <main>
      <div className="main-box">
        <div className="form-box">
          <h2 className="title">Add Activity</h2>
          <div className="form">
            <div className="form-label">
              <label placeholder="Activity">Activity type</label>
              <label placeholder="Date">Date</label>
              <label placeholder="Duration">Duration</label>
              <label placeholder="kcal">kcal</label>
              <label placeholder="Distance">Distance</label>
            </div>

            <div className="form-input">
              {/*---------------Activity Type---------------*/}
              <input
                className="activity-input"
                type=""
                value={activity}
                onChange={onChangeActivity}
                placeholder="Running"
              />
              {/*---------------Date---------------*/}
              <input
                className="date-input"
                type=""
                value={date}
                onChange={onChangeDate}
                placeholder="1/1/22 12:00"
              />
              {/*---------------Duration---------------*/}
              <input
                className="duration-input"
                type=""
                value={duration}
                onChange={onChangeDuration}
                placeholder="30:00"
              />
              {/*---------------kcal---------------*/}
              <input
                className="kcal-input"
                type=""
                value={kcal}
                onChange={onChangeKcal}
                placeholder="120"
              />
              {/*---------------Distance---------------*/}
              <input
                className="distance-input"
                type=""
                value={distance}
                onChange={onChangeDistance}
                placeholder="5 KM."
              />
            </div>
          </div>
        </div>
        <div className="icon-box">
          <IconButton src="./images/athletes/Running.png" alt="Running" />
          <IconButton src="./images/athletes/Badminton.png" alt="Badminton" />
          <IconButton src="./images/athletes/Canoe_Slalom.png" alt="Canoe_Slalom" />
          <IconButton src="./images/athletes/Cycling_Road.png" alt="Cycling_Road" />
          <IconButton src="./images/athletes/Football.png" alt="Football" />
          <IconButton src="./images/athletes/Handball.png" alt="Handball" />
          <IconButton src="./images/athletes/Karate.png" alt="Karate" />
          <IconButton src="./images/athletes/Sport_Climbing.png" alt="Sport_Climbing" />
          <IconButton src="./images/athletes/Surfing.png" alt="Surfing" />
          <IconButton src="./images/athletes/Swimming.png" alt="Swimming" />
        </div>
      </div>
      <div className="form-button">
        {/*---------------Button---------------*/}
        <ActivityButton
          onClick={(event) => submit(event)}
          onChange={onChangeDate}
        >
          Save Activity
        </ActivityButton>
      </div>
    </main>
  );
};

export default InputActivity;

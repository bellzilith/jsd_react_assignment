import React, { useState, useEffect } from "react";
import ActivityButton from "../Button/ActivityButton";
import IconButton from "../IconButton/IconButton";
import FormInput from "../Input/Input";
import { useUserRecords } from '../Hooks/Hooks';
import "./InputActivity.css";

const InputActivity = ({ addPost }) => {
  const [values, setValues] = useState({
      activity:"",
      date:"",
      duration:"",
      kcal:"",
      distance:"",
  });

  const inputs = [
    {
      id: 1,
      name: "activity",
      type: "text",
      placeholder: "running",
      errorMessage: "Activity should be 3-16 characters and not include any special characters.",
      label: "Activity type",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "date",
      type: "date",
      placeholder: "11-04-2022",
      errorMessage: "Please choose your activity date.",
      label: "Date",
      required: true,
    },
    {
      id: 3,
      name: "duration",
      type: "text",
      placeholder: "30:00:000",
      errorMessage: "Duration should be in this format 00:00:000",
      label: "Duration",
      pattern: "^[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]$",
      required: true,
    },
    {
      id: 4,
      name: "kcal",
      type: "number",
      placeholder: "120",
      errorMessage: "Please input your kcal number.",
      label: "Kcal",
      required: true,
    },
    {
      id: 5,
      name: "distance",
      type: "number",
      placeholder: "5",
      errorMessage: "Please input your distance number.",
      label: "Distance",
      required: true,
    },
  ];

  const [posts, setPosts] = useUserRecords();

    addPost = ({ id, activity, date, duration, kcal, distance }) => {
      const newPost = { id, activity, date, duration, kcal, distance };
      //console.log(newPost);
      setPosts([newPost, ...posts]);
    };

  const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value });
  }

  const submit = (event) => {
    event.preventDefault();
    const valueInputActivity = {
      Activity: values.activity,
      Date: values.date,
      Duration: values.duration,
      Kcal: values.kcal,
      Distance: values.distance,
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
            <div className="form-input">
              {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
            </div>
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
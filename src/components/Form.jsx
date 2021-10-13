import React, { useState } from "react";
import "./Form.css";

const Form = ({ handleEnteredData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleName = (event) => {
    // console.log(event.target.value);

    setName(event.target.value);

    // console.log(name);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      age: +age,
    };

    if (data.name && data.age) {
      if (data.age > 0) {
        handleEnteredData(data);
      } else {
        alert(`the value enterd should be > 0`);
      }
    } else if (!data.name && data.age) {
      alert(`please provide a username`);
    } else if (data.name && !data.age) {
      alert(`please provide an age`);
    } else {
      alert(`Please provide both username and age`);
    }

    console.log(data);
    setAge("");
    setName("");
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" onChange={handleName} value={name} id="username" />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
        </div>
        <div>
          <input type="text" onChange={handleAge} value={age} id="age" />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

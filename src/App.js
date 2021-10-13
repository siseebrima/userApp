// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [users, setUsers] = useState([
    { name: "Ebrima Sise", age: 30, id: Math.random() },
    { name: "Lamin Sise", age: 3, id: Math.random() },
    { name: "Fatima Saidykhan", age: 30, id: Math.random() },
  ]);

  const handleData = (data) => {
    // console.log(data);
    const newData = { ...data, id: Math.random() };
    setUsers((prevdata) => [...prevdata, newData]);
  };

  return (
    <div className="App">
      <Form handleEnteredData={handleData} />
      <List users={users} />
    </div>
  );
}

export default App;

import React from "react";
import "./List.css";

const List = ({ users }) => {
  return (
    <ul className="list-container">
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        );
      })}
    </ul>
  );
};

export default List;

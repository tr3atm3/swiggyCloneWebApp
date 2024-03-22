import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h2>Location: Bangalore</h2>
      <h4>Contact: @tushar</h4>
    </div>
  );
};

export default User;

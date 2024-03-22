import React from "react";

import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1>About</h1>

      <UserClass name={"Tushar Sharma"} location={"Bangalore"} />
    </div>
  );
};

export default About;

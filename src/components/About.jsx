import React from "react";

const About = () => {
  const loggedIn = true;
  return (
    <div>
      <h2 style={{ color: "green" }}>This is the About component</h2>
      {loggedIn ? (
        <p>Welcome to our website!</p>
      ) : (
        <p>Please login to access the content.</p>
      )}
    </div>
  );
};

export default About;

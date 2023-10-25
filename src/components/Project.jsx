import React from "react";

const Project = () => {
  const projects = ["Project 1", "Project 2", "Project 3"];
  return (
    <div>
      <h2
        style={{
          color: "yellow",
          backgroundColor: "gray",
          margin: "7px",
          padding: "10px",
        }}
      >
        This is the Project component
      </h2>
      <p>Some information Project the header</p>
      <ul style={{ listStyle: "none" }}>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;

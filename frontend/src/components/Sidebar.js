import "./Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="link-container">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="link-container">
            <Link to="/students">Students</Link>
          </div>
        </li>
        <li>
          <div className="link-container">
            <Link to="/courses">Courses</Link>
          </div>
        </li>
        <li>
          <div className="link-container">
            <Link to="/results">Results</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

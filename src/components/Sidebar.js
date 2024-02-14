// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Students">Students</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        <li><Link to="/page3">Page 3</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

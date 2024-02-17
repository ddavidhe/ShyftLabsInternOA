// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Students from './components/Students';
import Courses from './components/Courses';
import Results from './components/Results';

const App = () => {
  return (
      <div className="App">
        <Sidebar />
        <main className="content">
          <Routes>
			      <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;

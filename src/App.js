// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Students from './components/Students';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const App = () => {
  return (
      <div className="App">
        <Sidebar />
        <main className="content">
          <Routes>
			      <Route path="/" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;

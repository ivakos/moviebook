import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import './styles/normilize.css';
import './App.css';

import { Menu } from './Components/Menu.js';
import { Genre } from './Components/Genre.js';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/:genres" element={<Genre />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
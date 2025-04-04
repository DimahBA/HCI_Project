import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';

import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MenuPage" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// export default App;
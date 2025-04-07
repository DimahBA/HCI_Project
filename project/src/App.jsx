import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";

import { Link } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full max-w-md mx-auto bg-light flex flex-col overflow-hidden">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/MenuPage"
            e
            element={
              <DefaultLayout>
                <MenuPage />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

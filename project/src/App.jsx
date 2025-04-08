import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";

import DefaultLayout from "./components/DefaultLayout";
import SetMenuPage from "./pages/SetMenuPage";

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full max-w-md mx-auto bg-light flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu-page"
            e
            element={
              <DefaultLayout>
                <MenuPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/set-menu-page"
            e
            element={
              <DefaultLayout>
                <SetMenuPage />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

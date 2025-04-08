import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import DishDetailsPage from "./pages/DishDetailsPage";


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
            element={
              <DefaultLayout>
                <MenuPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/SettingsPage"
            element={
              <DefaultLayout>
                <SettingsPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/HelpPage"
            element={
              <DefaultLayout>
                <HelpPage />
              </DefaultLayout>
            }
          />
          <Route 
            path="/dish/:id" 
            element={

              <DefaultLayout>
                <DishDetailsPage />
              </DefaultLayout>

            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

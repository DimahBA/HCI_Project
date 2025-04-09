import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import DishDetailsPage from "./pages/DishDetailsPage";
import CartPage from "./pages/CartPage";


import DefaultLayout from "./components/DefaultLayout";
import SetMenuPage from "./pages/SetMenuPage";

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full max-w-md mx-auto bg-light flex flex-col overflow-hidden">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            e
            element={
              <DefaultLayout>
                <MenuPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/set-menus"
            e
            element={
              <DefaultLayout>
                <SetMenuPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DefaultLayout>
                <SettingsPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/help"
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
          <Route
            path="/cart"
            element={
              <DefaultLayout>
                <CartPage />
              </DefaultLayout>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

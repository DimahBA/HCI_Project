import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import DishDetailsPage from "./pages/DishDetailsPage";
import CartPage from "./pages/CartPage";
import OrderedPage from "./pages/OrderedPage";
import PaymentPage from "./pages/PaymentPage";

import RatingPage from "./pages/RatingPage";

import { useSelector } from "react-redux";

import DefaultLayout from "./components/DefaultLayout";
import SetMenuPage from "./pages/SetMenuPage";
import CartSyncer from "./components/CartSyncer";


function App() {
  const accessibility = useSelector((state) => state.accessibility);
  useEffect(() => {
    const { contrast, bigFont, simpleMode, darkMode } = accessibility;

    const root = document.documentElement;

    root.classList.toggle("dark", darkMode);
    document.body.classList.toggle("high-contrast", contrast);
    document.body.classList.toggle("big-font", bigFont);
    document.body.classList.toggle("simple-mode", simpleMode);
    localStorage.setItem("accessibility", JSON.stringify(accessibility));
  }, [accessibility]);
  return (
    <>
    <CartSyncer />
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
          <Route
            path="/ordered"
            element={
              <DefaultLayout>
                <OrderedPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/rating"
            element={
              <DefaultLayout>
                <RatingPage />
              </DefaultLayout>
            }
          />

          <Route
            path="/PaymentPage"
            element={
              <DefaultLayout>
                <PaymentPage />
              </DefaultLayout>

            }
          />

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

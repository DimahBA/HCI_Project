import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import MenuIcons from "./MenuIcons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMenuId } from "../slices/setMenuSlice";

// Navbar.jsx
export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedMenuId = useSelector((state) => state.setMenu.selectedMenuId);
  const [currentPage, setCurrentPage] = useState(location.pathname);
  console.log("Current Page", currentPage);
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);
  return (
    <div className="fixed bottom-0 w-full max-w-md h-20 flex items-center justify-center bg-light shadow-dark shadow-2xl z-40">
      <div className="flex items-center justify-evenly w-full">
        <button
          onClick={() => {
            navigate("/menu");
            dispatch(setSelectedMenuId(""));
          }}
        >
          <MenuIcons
            width={location.pathname === "/menu" && !selectedMenuId ? 40 : 35}
            color={
              location.pathname === "/menu" && !selectedMenuId
                ? "#6f1d1b"
                : "#b79a71"
            }
          />
        </button>
        <button onClick={() => navigate("/set-menus")}>
          <MenuIcons
            width={
              location.pathname === "/set-menus" ||
              (selectedMenuId && !location.pathname !== "/cart")
                ? 40
                : 35
            }
            isASetMenu
            color={
              location.pathname === "/set-menus" ||
              (selectedMenuId && !location.pathname !== "/cart")
                ? "#6f1d1b"
                : "#b79a71"
            }
          />
        </button>
        <button className="relative" onClick={() => navigate("/cart")}>
          <CartIcon
            width={location.pathname === "/cart" ? 40 : 35}
            color={location.pathname === "/cart" ? "#6f1d1b" : "#b79a71"}
          />
          <span className="bg-red rounded-full w-4 h-4 absolute bottom-6 -right-1 text-[10px] text-center text-light ">
            {cartItems.length}
          </span>
        </button>
      </div>
    </div>
  );
}

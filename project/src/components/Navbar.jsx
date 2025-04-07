import CartIcon from "./CartIcon";
import MenuIcons from "./MenuIcons";

// Navbar.jsx
export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full max-w-md h-20 flex items-center justify-center bg-light shadow-dark shadow-2xl z-40">
      <div className="flex items-center justify-evenly w-full">
        <MenuIcons width={34} color="#b79a71" />

        <MenuIcons width={35} isASetMenu color="#b79a71" />
        <CartIcon width={35} color="#b79a71" />
      </div>
    </div>
  );
}

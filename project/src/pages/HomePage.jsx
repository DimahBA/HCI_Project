// import dishIcon from "../assets/icons/dish.svg";
// import { ReactComponent as DishIcon } from "../assets/icons/dish.svg";

import forkIcon from "../assets/icons/fork.svg";
import { useNavigate } from "react-router-dom";
import SmallButton from "../components/SmallButton";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import MenuIcons from "../components/MenuIcons";

const HomePage = () => {
  const navigate = useNavigate();

  const goToMenuPage = () => {
    navigate("/MenuPage");
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-light flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-red text-light py-3 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-title">Table 24</h1>
        <button className="text-light"></button>
      </div>

      {/* Main content with striped background */}
      <div
        className="flex-1 flex  flex-col p-6 bg-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255, 233, 201, 0.5) 15px, rgba(255, 233, 201, 0.5) 30px)",
        }}
      >
        {/* Welcome text */}
        <div className="text-center mt-36 mb-14">
          <h2 className="text-4xl font-[600] font-title text-dark">Welcome</h2>
          <h2 className="text-4xl font-[600] font-title text-dark">
            to our Restaurant!
          </h2>
        </div>

        {/* Menu buttons */}
        <div className="flex justify-center gap-4 my-8">
          <button
            className="flex flex-col items-center justify-center bg-red text-light rounded-xl p-4 w-36 h-40 hover:border-2 hover:border-red hover:bg-light hover:text-red transition duration-300 ease-in-out"
            onClick={goToMenuPage}
          >
            <div className="flex items-center justify-center mb-2">
              {/* <img src={forkIcon} width="74" height="74" alt="Menu icon" /> */}
              <MenuIcons />
            </div>
            <span className="text-2xl font-title">Menu</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-red text-light rounded-xl p-4 w-36 h-40 hover:border-2 hover:border-red hover:bg-light hover:text-red transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-2">
              {/* <DishIcon />{" "} */}
              <MenuIcons isASetMenu={true} />
            </div>
            <span className="text-2xl font-title">
              Set
              <br />
              Menus
            </span>
          </button>
        </div>

        {/* Footer buttons */}
        <div className="absolute bottom-0 left-0 right-0 px-4">
          {/* Divider */}
          <div className="border-t border-light-dark my-8"></div>
          <div className="flex justify-center gap-4 mt-auto mb-8">
            <SmallButton>
              <IoSettingsOutline className="mr-2" size={20} />
              Settings
            </SmallButton>
            <SmallButton>
              {" "}
              <IoIosHelpCircleOutline className="mr-2" size={23} /> Need help?{" "}
            </SmallButton>
          </div>
        </div>
      </div>

      {/* Device label - just for illustration
      <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400">
        iPhone 16 - 2
      </div> */}
    </div>
  );
};

export default HomePage;

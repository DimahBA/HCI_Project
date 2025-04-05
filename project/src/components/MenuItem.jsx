import { useState } from "react";


const MenuItem = ({ name, isActive, onClick }) => {
    return (
        <li onClick={onClick} className={` px-2 ${isActive ? 'font-bold text-dark border-b-4 border-dark' : 'text-dark border-b-1 border-dark'}`}>
            {name}
        </li>
    );
};


const Menu = () => {
    const [activeMenu, setActiveMenu] = useState("Customers favorites");

    const handleClick = (name) => { setActiveMenu(name); };

    return (
        <div className="overflow-x-auto max-w-full">
            <ul className="flex items-center m-0 whitespace-nowrap ">
                <MenuItem
                    name="Customers favorites"
                    isActive={activeMenu === "Customers favorites"}
                    onClick={() => handleClick("Customers favorites")}
                />
                <MenuItem
                    name="Starters"
                    isActive={activeMenu === "Starters"}
                    onClick={() => handleClick("Starters")}
                />
                <MenuItem
                    name="Main Courses"
                    isActive={activeMenu === "Main Courses"}
                    onClick={() => handleClick("Main Courses")}
                />
                <MenuItem
                    name="Deserts"
                    isActive={activeMenu === "Deserts"}
                    onClick={() => handleClick("Deserts")}
                />
                <MenuItem
                    name="Drinks"
                    isActive={activeMenu === "Drinks"}
                    onClick={() => handleClick("Drinks")}
                />
            </ul>
        </div>

    );
};

export default Menu;

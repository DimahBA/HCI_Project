// components/MenuItem.jsx (or MenuTab.jsx if that's the file)
const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <div onClick={onClick} className="relative inline-block pb-1  ">
      <span
        className={`px-4 cursor-pointer transition-all duration-300 ease-in-out  ${
          isActive ? "font-medium text-dark  " : "text-light-dark "
        }`}
      >
        {name}
      </span>
      <span
        className={`px-4 absolute left-0 bottom-0 w-full  rounded-full transition-all duration-300 ease-in-out ${
          isActive ? "h-[2.5px] bg-dark" : "h-[1px] bg-light-dark"
        }`}
      ></span>
    </div>

    // <li
    //   onClick={onClick}
    //   className={`px-4 cursor-pointer  ${
    //     isActive
    //       ? "font-bold text-dark border-b-3 border-dark"
    //       : "text-light-dark border-b-2 border-light-dark"
    //   }`}
    // >
    //   {name}
    // </li>
  );
};

const MenuTab = ({ categories, activeMenu, setActiveMenu }) => {
  return (
    <div className="overflow-x-auto max-w-full w-full flex  justify-center px-6">
      <ul className="flex items-center m-0 whitespace-nowrap ">
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            name={category.name}
            isActive={activeMenu === category.name}
            onClick={() => setActiveMenu(category.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuTab;

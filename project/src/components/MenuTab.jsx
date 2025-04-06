// components/MenuItem.jsx (or MenuTab.jsx if that's the file)
const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`px-2 cursor-pointer ${
        isActive
          ? "font-bold text-dark border-b-4 border-dark"
          : "text-dark border-b-1 border-dark"
      }`}
    >
      {name}
    </li>
  );
};

const MenuTab = ({ categories, activeMenu, setActiveMenu }) => {
  return (
    <div className="overflow-x-auto max-w-full w-full px-6">
      <ul className="flex items-center m-0 whitespace-nowrap justify-between">
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

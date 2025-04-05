import Item from "../components/Item";
import Filter from "../components/Filter";
import Menu from "../components/MenuItem";

const MenuPage = () => {
  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-light flex flex-col overflow-hidden">
      <div className="m-0 p-0 w-full overflow-x-hidden flex items-center justify-center">
        <div className="w-full  text-center">
          <div className=" w-full flex items-center justify-center h-24">
            <h1 className="text-3xl font-bold font-title text-center">Menu</h1>
          </div>

          <div
            className="items-center justify-between w-full w-autoorder-1"
            id="navbar-search"
          >
            <div className="overflow-x-auto max-w-full  m-4">
              <Menu />
            </div>

            <div className="overflow-x-auto  max-w-full">
              <ul className=" flex items-center m-0 p-0 whitespace-nowrap pl-6">
                <Filter name="Vegetarian" />
                <Filter name="Vegan" />
                <Filter name="Gluten Free" />
              </ul>
            </div>
          </div>
          <ul className="mt-4">
            <Item name="Tomato Soup" price="10" />
            <Item name="Tomato Soup" price="10" />
            <Item name="Tomato Soup" price="10" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

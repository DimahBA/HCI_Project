import menuData from "../data/menu";
import Item from "../components/Item";
import Button from "../components/Button";

const CartPage = () => {
    const allItems = menuData.categories.flatMap((category) => category.items);
    const firstThreeItems = allItems.slice(0, 3);
    // notes: for the item, needs to be thinner
    // so todo: make a isCart thingy without detail button and smaller (pic smaller)
    // also should we add a arrow down button?
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-4">My Cart</h1>

            <ul className="flex flex-col gap-4">

                <div className="border-t border-1 rounded border-light-dark mx-4 "></div>

                {firstThreeItems.map((item) => (
                    <li key={item.id}>
                        <Item
                            isSetMenu={false}
                            name={item.name}
                            price={item.price}
                            image={item.imageUrl}
                        />
                    </li>
                ))}
            </ul>
            <div className="mb-4">
                <label for="text" class="block ml-6 mb-2 text-xl font-medium text-dark ">Notes for the chef</label>

                <div class="ml-6 mr-6">
                    <input
                        type="text"
                        id="text"
                        class="border border-dark placeholder-light-dark text-dark text-sm rounded-lg focus:ring-red focus:border-red block w-full h-16 p-2.5"
                        placeholder="Write if you have some notes"
                        required
                    />
                </div>
            </div>

            <div className="flex justify-between ml-6 mr-6 text-lg">
                <span className="font-bold">Total:</span>
                <span>150€</span>
            </div>

            <div className="flex justify-center gap-4">
                <Button text="Add more" />
                <Button text="Order" />
            </div>




        </>
    );
};

export default CartPage;

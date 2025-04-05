
const images = import.meta.glob("../assets/images/*.jpg", { eager: true });

import glutenFree from '../assets/icons/gluten-free.svg';
import vegetarian from '../assets/icons/vegetarian.svg';
import vegan from '../assets/icons/vegan.svg';


const imageMap = {
  'Gluten Free': glutenFree,
  'Vegetarian': vegetarian,
  'Vegan': vegan,

};



const Filter = ({ name }) => {

    return (
        <button className="border-2 border-green-dark text-green-dark rounded-full mr-2 py-2 px-1 flex ">
            <img src={imageMap[name]} alt={"img"} className="mr-1" />
            {name}
        </button>
    );
}

export default Filter;

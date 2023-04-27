import React, { useEffect, useState } from "react";
import "./Menu.css";
import { ReataurantsType } from "components/Scripts";

type Props = {
  restaurants: ReataurantsType[];
  setFilteredRestaurants: (filteredRestaurants: ReataurantsType[]) => void;
};

const Menu = React.memo(({ restaurants, setFilteredRestaurants }: Props) => {
  const options = ["Pasta", "Burger", "Pizza", "Dessert", "Biryani", "Rice", "Butter-chicken"];
  const [activeOption, setActiveOption] = useState<number | null>(null);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants, setFilteredRestaurants]);

  const OnSelectOption = (index: number | null) => {
    setActiveOption(index);
  };

  const filter = (option: string, index: number) => {
    if (index >= 0) {
      const filteredArr = restaurants.filter((restaurant) => {
        return restaurant.cuisine.includes(option.toLowerCase());
      });
      setFilteredRestaurants(filteredArr);
    }
    OnSelectOption(index);
  };

  const allRestaurant = () => {
    setFilteredRestaurants(restaurants);
    setActiveOption(null);
  };

  return (
    <div className="bg-neutral-200/60 p-2 rounded-2xl mt-12 shadow-sm">
      <ul className="flex gap-2 items-center">
        <li
          onClick={() => allRestaurant()}
          className={
            activeOption === null
              ? "rounded-xl px-5 py-2 text-lg bg-white"
              : "hover:bg-white rounded-xl px-5 py-2 text-lg"
          }>
          Все
        </li>
        {options.map((option, index) => {
          return (
            <li
              onClick={() => filter(option, index)}
              key={`${index}_${option}`}
              className={
                activeOption === index
                  ? "rounded-xl px-5 py-2 text-lg bg-white"
                  : "hover:bg-white rounded-xl px-5 py-2 text-lg"
              }>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Menu;

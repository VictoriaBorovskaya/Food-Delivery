import React, { useEffect } from 'react';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import type { RootState } from 'redux/store';
import './Menu.css';

type Props = {
  setFilteredRestaurants: (filteredRestaurants: RestaurantsType[]) => void;
};

const options = ['Pasta', 'Burger', 'Pizza', 'Dessert', 'Biryani', 'Rice', 'Butter-chicken'];

const Menu = React.memo(({ setFilteredRestaurants }: Props) => {
  const dispatch = useDispatch();
  const activeOption = useSelector((state: RootState) => state.filter.option);
  const restaurants = useSelector((state: RootState) => state.restaurants.restaurants);

  const setActiveOption = (index: number | null) => {
    dispatch(setFilter(index));
  };

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
      <ul className="flex items-center flex-wrap lg:justify-start justify-center leading-none sm:text-base text-sm ">
        <li
          onClick={() => allRestaurant()}
          className={
            activeOption === null
              ? 'rounded-xl px-5 py-2 text-lg bg-white mx-2'
              : 'hover:bg-white rounded-xl px-5 py-2 text-lg mx-2'
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
                  ? 'rounded-xl px-5 py-2 text-lg bg-white mx-2'
                  : 'hover:bg-white rounded-xl px-5 py-2 text-lg mx-2'
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

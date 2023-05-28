import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { SearchSVG, LocationSVG, ShoppingCartSVG } from './SVG';
import Logo from './logo';

type Props = {
  setFilteredRestaurants: (filteredRestaurants: RestaurantsType[]) => void;
  filteredRestaurants: RestaurantsType[];
};

const Header = ({ setFilteredRestaurants, filteredRestaurants }: Props) => {
  const [value, setValue] = useState<string>('');
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce((prev, cur) => prev + parseFloat(cur.item.price) * cur.count, 0);

  const filter = (event: FormEvent) => {
    event.preventDefault();
    const filteredItem = filteredRestaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredRestaurants(filteredItem);
    setValue('');
  };

  return (
    <div className="flex sm:flex-row flex-col md:items-center sm:justify-between max-w-7xl m-auto border-b-2 border-b-neutral-300 py-5 md:gap-5 gap-2">
      <div className="flex flex-col sm:flex-row items-center md:gap-5 gap-2">
        <Logo />
        <form className="relative w-full sm:w-fit" onSubmit={(event) => filter(event)}>
          <SearchSVG />
          <div className="h-11 rounded-2xl overflow-hidden flex items-center w-full sm:w-fit">
            <input
              value={value}
              type="text"
              placeholder="Найти ресторан"
              className="border-2 border-yellow-300 rounded-l-2xl rounded-r-none outline-none h-full pl-9 lg:w-80 sm:w-72 w-3/5 focus:border-yellow-400"
              onChange={(event) => setValue(event.target.value)}
            />
            <button
              type="submit"
              className="px-5 h-full bg-yellow-300 border-2 border-yellow-300 hover:border-yellow-400 w-2/5 sm:w-fit hover:bg-yellow-400 font-medium">
              Найти
            </button>
          </div>
        </form>
        <button className="lg:block hidden border-2 border-yellow-300 bg-yellow-300 rounded-r-2xl hover:bg-yellow-400 hover:border-yellow-400 rounded-2xl h-11 px-5 font-medium">
          <span className="flex">
            <span>
              <LocationSVG />
            </span>
            Адрес доставки
          </span>
        </button>
      </div>
      <Link to="/cart" className="flex justify-end">
        <div
          className={
            cart.length > 0
              ? 'flex items-center justify-center gap-2 bg-yellow-300 h-11 sm:px-5 px-3 rounded-2xl w-2/5 sm:w-fit'
              : 'flex items-center justify-center gap-2 bg-neutral-200/60 h-11 sm:px-5 px-3 rounded-2xl w-2/5 sm:w-fit'
          }>
          <ShoppingCartSVG />
          <p className="font-medium">{cart.length ? Math.ceil(totalPrice) : 0}₽</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;

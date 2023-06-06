import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { SearchSVG, LocationSVG, ShoppingCartSVG } from './SVG';
import Logo from './logo';
import cn from 'classnames';
import './Header.css';

type Props = {
  setFilteredRestaurants: (filteredRestaurants: RestaurantsType[]) => void;
  filteredRestaurants: RestaurantsType[];
  setIsSearch: (isSearch: boolean) => void;
};

const Header = ({ setFilteredRestaurants, filteredRestaurants, setIsSearch }: Props) => {
  const [value, setValue] = useState<string>('');
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce((prev, cur) => prev + parseFloat(cur.item.price) * cur.count, 0);

  const filter = (event: FormEvent) => {
    event.preventDefault();
    setIsSearch(true);
    const filteredItem = filteredRestaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(value.toLowerCase());
    });
    if (filteredItem.length > 0) {
      setIsSearch(true);
      setFilteredRestaurants(filteredItem);
      setValue('');
    } else {
      setIsSearch(false);
      setValue('');
    }
  };

  return (
    <div className="flex sm:flex-row flex-col md:items-center sm:justify-between max-w-7xl m-auto border-b-2 border-b-neutral-300 py-5 md:gap-5 gap-2">
      <div className="flex flex-col sm:flex-row items-center md:gap-5 gap-2">
        <div onClick={() => window.location.reload()}>
          <Logo />
        </div>
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
            <button type="submit" className="h-full bg-yellow-300 w-2/5 sm:w-fit header-button">
              Найти
            </button>
          </div>
        </form>
        <button className="lg:block hidden rounded-2xl h-11 header-button">
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
          className={cn('flex items-center justify-center gap-2 h-11 sm:px-5 px-3 rounded-2xl w-2/5 sm:w-fit', {
            'bg-yellow-300 hover:bg-yellow-400': cart.length > 0,
            'bg-neutral-200/60': cart.length === 0,
          })}>
          <ShoppingCartSVG />
          <p className="font-medium">{cart.length ? Math.ceil(totalPrice) : 0}₽</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;

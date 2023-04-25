import React, { FormEvent, useState } from "react";
import { ReataurantsType } from "components/Scripts";

type Props = {
  setFilteredRestaurants: (filteredRestaurants: ReataurantsType[]) => void;
  filteredRestaurants: ReataurantsType[];
};

const Header = React.memo(({ setFilteredRestaurants, filteredRestaurants }: Props) => {
  const [value, setValue] = useState<string>("");
  const logo = require("./logo.png");

  const filter = (event: FormEvent) => {
    event.preventDefault();
    const filteredItem = filteredRestaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredRestaurants(filteredItem);
    setValue("");
  };

  return (
    <div className="flex items-center justify-between max-w-7xl m-auto border-b-2 border-b-neutral-300 py-5">
      <div className="flex items-center gap-5">
        <div className="flex text-3xl font-semibold">
          <p>Food</p>
          <img src={logo} alt="" className="w-9 h-9" />
          <p>Delivery</p>
        </div>
        <form className="relative" onSubmit={(event) => filter(event)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute left-2 top-2.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="h-11 rounded-2xl overflow-hidden flex items-center">
            <input
              value={value}
              type="text"
              placeholder="Найти ресторан"
              className="border-2 border-yellow-300 rounded-l-2xl outline-none h-full pl-9 w-80 focus:border-yellow-400"
              onChange={(event) => setValue(event.target.value)}
            />
            <button
              type="submit"
              className="px-5 h-full bg-yellow-300 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400">
              Найти
            </button>
          </div>
        </form>
        <button className="border-2 border-yellow-300 bg-yellow-300 rounded-r-2xl hover:bg-yellow-400 hover:border-yellow-400 rounded-2xl h-11 px-5 font-medium">
          <span className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 pr-1">
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Укажите адрес доставки
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <p className="text-sm">Русский</p>
      </div>
    </div>
  );
});
export default Header;

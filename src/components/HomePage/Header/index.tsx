import React, { FormEvent, useState } from "react";
import { ReataurantsType } from "components/Scripts";
import Logo from "./logo";
import { SearchSVG, LocationSVG, ShoppingCartSVG } from "components/Scripts/SVG";

type Props = {
  setFilteredRestaurants: (filteredRestaurants: ReataurantsType[]) => void;
  filteredRestaurants: ReataurantsType[];
};

const Header = React.memo(({ setFilteredRestaurants, filteredRestaurants }: Props) => {
  const [value, setValue] = useState<string>("");

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
        <Logo />
        <form className="relative" onSubmit={(event) => filter(event)}>
          <SearchSVG />
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
              className="px-5 h-full bg-yellow-300 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400 font-medium">
              Найти
            </button>
          </div>
        </form>
        <button className="border-2 border-yellow-300 bg-yellow-300 rounded-r-2xl hover:bg-yellow-400 hover:border-yellow-400 rounded-2xl h-11 px-5 font-medium">
          <span className="flex">
            <span>
              <LocationSVG />
            </span>
            Укажите адрес доставки
          </span>
        </button>
      </div>

      <div className="flex items-center rounded-2xl bg-neutral-200/60 h-11 px-5 gap-2">
        <p className="border-r-2 border-black pr-2 font-medium">0₽</p>
        <ShoppingCartSVG />
      </div>
    </div>
  );
});
export default Header;

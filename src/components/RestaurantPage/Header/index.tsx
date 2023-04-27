import { Link } from "react-router-dom";
import Logo from "components/HomePage/Header/logo";
import { LocationSVG, ShoppingCartSVG } from "components/Scripts/SVG";

const Header = () => {
  return (
    <div className="flex py-5 items-center justify-between border-b-2 border-b-neutral-300 max-w-7xl m-auto px-5">
      <div className="flex items-center gap-5">
        <Link to="/">
          <Logo />
        </Link>
        <button className="border-2 border-neutral-300 rounded-r-2xl hover:bg-neutral-200 rounded-2xl h-11 px-5 font-medium duration-200">
          <span className="flex">
            <span>
              <LocationSVG />
            </span>
            Aдрес доставки
          </span>
        </button>
      </div>
      <div className="flex items-center rounded-2xl bg-neutral-200/60 h-11 px-5 gap-2">
        <p className="border-r-2 border-black pr-2 font-medium">0₽</p>
        <ShoppingCartSVG />
      </div>
    </div>
  );
};

export default Header;

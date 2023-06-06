import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import Logo from 'components/HomePage/Header/logo';
import { LocationSVG, ShoppingCartSVG } from './SVG';
import cn from 'classnames';
import './Header.css';

const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce((prev, cur) => prev + parseFloat(cur.item.price) * cur.count, 0);

  return (
    <div className="flex py-5 items-center justify-between border-b-2 border-b-neutral-300 max-w-7xl m-auto px-5 header-container">
      <div className="flex items-center gap-5">
        <Logo />
        <button className="hidden sm:block border-2 border-neutral-300 rounded-r-2xl hover:bg-neutral-200 rounded-2xl h-11 px-5 font-medium duration-200">
          <span className="flex">
            <span>
              <LocationSVG />
            </span>
            Aдрес доставки
          </span>
        </button>
      </div>
      <Link to="/cart" className="flex justify-end cart-container">
        <div
          className={cn('flex items-center justify-center gap-2 h-11 sm:px-5 px-3 rounded-2xl w-fit', {
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

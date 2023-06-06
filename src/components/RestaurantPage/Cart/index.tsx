import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import { setCart } from 'redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import ClearCartModal from './ClearCartModal';
import CartItem from './CartItem';

type Props = {
  freeDeliveryItem: () => boolean | undefined;
};

const Basket = ({ freeDeliveryItem }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  const totalPrice = cart.reduce((prev, cur) => prev + parseFloat(cur.item.price) * cur.count, 0);
  const serviceCharge = 39;

  const clearCart = () => {
    dispatch(setCart([]));
    setIsOpenModal(false);
  };

  return (
    <div className="w-1/3 bg-white rounded-t-3xl mt-10 shadow-sm sticky h-screen top-0 hidden md:block">
      <div className="h-full w-full flex flex-col pt-3 px-3 justify-between">
        <div className="flex items-center justify-between">
          <p className="pb-5 font-semibold text-2xl">Корзина</p>
          {cart.length > 0 && (
            <button className="pb-5 text-lg text-neutral-500" onClick={() => setIsOpenModal(true)}>
              Очистить
            </button>
          )}
        </div>
        <ClearCartModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} clearCart={clearCart} />
        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
              alt=""
            />
            <p className="text-lg font-semibold pt-1 text-center">В Вашей корзине пока пусто</p>
          </div>
        )}
        {cart.length > 0 && (
          <div className="h-full pb-5">
            <div className="overflow-y-auto h-4/5">
              {[...cart]
                .sort((a, b) => +a.item.id - +b.item.id)
                .map((item) => (
                  <CartItem item={item} key={uuidv4()} />
                ))}
              <div className="flex items-center justify-between pt-3 pb-8">
                <p>Работа сервиса</p>
                <p className="font-medium">{serviceCharge}₽</p>
              </div>
            </div>

            <div className="border-t-2 border-neutral-200 flex flex-col gap-3 pt-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mr-3">
                  <img
                    src="https://avatars.mds.yandex.net/get-bunker/128809/8a437d76ad8ef449df0d4a09b3d3fcc045abd915/orig"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                {freeDeliveryItem() && totalPrice < 600 ? (
                  <div>
                    <p>Доставка 99₽</p>
                    <p className="text-xs text-neutral-500">До бесплатной доставки {Math.ceil(600 - totalPrice)}₽</p>
                  </div>
                ) : freeDeliveryItem() && totalPrice > 600 ? (
                  <div>
                    <p className="text-lime-500 font-medium">
                      Доставка 0₽ <span className="line-through text-xs text-neutral-500">99₽</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>Доставка 99₽</p>
                  </div>
                )}
              </div>
              <Link to="/cart">
                <button className="border-2 border-yellow-300 bg-yellow-300 rounded-r-2xl hover:bg-yellow-400 hover:border-yellow-400 rounded-2xl h-11 font-medium w-full lg:text-lg">
                  Верно, к оплате{' '}
                  {freeDeliveryItem() && totalPrice > 600
                    ? Math.ceil(totalPrice + serviceCharge)
                    : freeDeliveryItem() && totalPrice < 600
                    ? Math.ceil(totalPrice + serviceCharge + 99)
                    : Math.ceil(totalPrice + serviceCharge + 99)}
                  ₽
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;

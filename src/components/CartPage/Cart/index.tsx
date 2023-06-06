import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartType, setCart } from 'redux/slices/cartSlice';
import { AddSVG, CutlerySVG, DeleteSVG } from './SVG';

type Props = {
  cart: CartType[];
};

const Cart = ({ cart }: Props) => {
  const [cutleryCount, setCutleryCount] = useState(1);
  const dispatch = useDispatch();

  const addCount = (item: CartType) => {
    dispatch(
      setCart([
        ...cart.filter((elem) => elem.item.id !== item.item.id),
        {
          ...item,
          count: item.count + 1,
        },
      ]),
    );
  };

  const deleteCount = (item: CartType) => {
    if (item.count > 1) {
      return dispatch(
        setCart([
          ...cart.filter((elem) => elem.item.id !== item.item.id),
          {
            ...item,
            count: item.count - 1,
          },
        ]),
      );
    } else {
      return dispatch(setCart([...cart.filter((elem) => elem.item.id !== item.item.id)]));
    }
  };

  return (
    <div className="bg-white rounded-3xl p-3.5 sm:p-8 flex flex-col gap-8 ">
      <div className="flex justify-between items-center">
        <p className="text-xl sm:text-2xl font-bold cart-title">Ваш заказ</p>
        <button onClick={() => dispatch(setCart([]))}>
          <span className="flex items-center gap-1 opacity-40 text-sm sm:text-base hover:opacity-100 ">
            <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.trash.e4a122e26252ac568700.svg" alt="" />
            Очистить корзину
          </span>
        </button>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-1 w-1/2 text-sm sm:text-base">
          <CutlerySVG />
          Приборы
        </span>
        <div className="flex items-center gap-5 sm:w-1/2">
          <button
            className="bg-neutral-200/60 p-1.5 rounded-xl "
            onClick={() => cutleryCount > 1 && setCutleryCount(cutleryCount - 1)}
            type="button">
            <DeleteSVG />
          </button>
          <p className="text-sm sm:text-base cart-text flex flex-col text-center w-5">{cutleryCount}</p>
          <button
            className="bg-neutral-200/60 p-1.5 rounded-xl "
            onClick={() => setCutleryCount(cutleryCount + 1)}
            type="button">
            <AddSVG />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {[...cart]
          .sort((a, b) => +a.item.id - +b.item.id)
          .map((item) => (
            <div className="flex flex-row items-center justify-between w-full gap-3" key={item.item.id}>
              <div className="flex items-center gap-3 w-1/2 ">
                <img
                  src={item.item.image}
                  alt=""
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover object-center rounded-2xl "
                />
                <p className="text-sm sm:text-base cart-name">{item.item.name}</p>
              </div>
              <div className=" flex justify-between items-center gap-3 sm:w-1/2">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-neutral-200/60 p-1.5 rounded-xl "
                    onClick={() => deleteCount(item)}
                    type="button">
                    <DeleteSVG />
                  </button>
                  <span className="text-sm sm:text-base flex flex-col text-center w-11 ">
                    <p>{item.count}</p>
                    <p className="text-xs text-neutral-400 sm:hidden">({Math.ceil(+item.item.price * item.count)}₽)</p>
                  </span>
                  <button className="bg-neutral-200/60 p-1.5 rounded-xl" onClick={() => addCount(item)} type="button">
                    <AddSVG />
                  </button>
                </div>
                <p className="text-end text-base hidden sm:block">{Math.ceil(+item.item.price * item.count)}₽</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

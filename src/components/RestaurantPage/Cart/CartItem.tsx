import { CartType } from 'redux/slices/cartSlice';
import { DeleteSVG, AddSVG } from './SVG';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import { setCart } from 'redux/slices/cartSlice';

type Props = {
  item: CartType;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  const addCount = () => {
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

  const deleteCount = () => {
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
    <div className="border-b-2 border-neutral-200 flex lg:flex-row flex-col justify-between items-center gap-2 py-3">
      <div className="flex flex-row items-start lg:items-center gap-2 w-full">
        <img src={item.item.image} alt="" className="w-16 h-16 object-cover object-center rounded-md" />
        <div>
          <p className="text-sm">{item.item.name}</p>
          <p className="font-medium">{Math.ceil(+item.item.price * item.count)}₽</p>
        </div>
      </div>

      <div className="bg-neutral-200/60 rounded-xl p-2 shadow-sm text-center flex items-center justify-between w-full lg:w-1/3 gap-1">
        <button onClick={() => deleteCount()}>
          <DeleteSVG />
        </button>
        <p>{item.count}</p>
        <button onClick={() => addCount()}>
          <AddSVG />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

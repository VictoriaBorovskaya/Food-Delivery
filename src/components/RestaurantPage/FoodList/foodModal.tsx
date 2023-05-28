import { CartType } from 'redux/slices/cartSlice';
import { FoodType } from 'redux/slices/foodSlice';
import { DeleteSVG, AddSVG } from './SVG';
import { useDispatch } from 'react-redux';
import { setCart } from 'redux/slices/cartSlice';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { useState } from 'react';

type Props = {
  item: FoodType;
  cart: CartType[];
  restaurant: RestaurantsType;
  setIsOpen: (isOpen: boolean) => void;
  setIsDelete: (isDelete: boolean) => void;
};

const FoodModal = ({ item, cart, restaurant, setIsOpen, setIsDelete }: Props) => {
  let index = cart.findIndex((elem) => elem.item.id === item.id);

  const [foodCount, setFoodCount] = useState<number>(
    !cart.map((el) => el.item.id).includes(item.id) ? 1 : cart[index].count,
  );

  const dispatch = useDispatch();

  const addCount = () => {
    setFoodCount(foodCount + 1);
  };

  const deleteCount = () => {
    setFoodCount(foodCount - 1);
  };

  const addToCart = () => {
    if (cart.length === 0) {
      setIsOpen(false);
      return dispatch(setCart([...cart, { item, name: restaurant.name, count: foodCount }]));
    } else if (cart.length > 0) {
      const cartItemIds = cart.map((el) => el.item.id);
      if (!cartItemIds.includes(item.id)) {
        if (cart[0].item.restaurantId !== item.restaurantId) {
          setIsDelete(true);
          setIsOpen(false);
        } else {
          setIsOpen(false);
          return dispatch(setCart([...cart, { item, name: restaurant.name, count: foodCount }]));
        }
      } else {
        const elem = cart.find((c) => c.item.id === item.id)!;
        setIsOpen(false);
        return dispatch(
          setCart([
            ...cart.filter((elem) => elem.item.id !== item.id),
            {
              ...elem,
              count: foodCount,
            },
          ]),
        );
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-700/50 z-50 flex items-center justify-center"
      id="modal"
      onClick={(event) => event.target === document.getElementById('modal') && setIsOpen(false)}>
      <div className="bg-white w-4/5 sm:w-3/5 lg:w-2/5 flex flex-col p-5 rounded-3xl gap-5">
        <div className="flex flex-col-reverse sm:flex-row items-end md:items-center justify-between">
          <p className="text-lg md:text-xl font-medium w-full text-start">{item.name}</p>
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-base pb-4">{item.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex sm:flex-row flex-col-reverse gap-5">
            <button
              onClick={() => addToCart()}
              className="border-2 border-yellow-300 bg-yellow-300 rounded-r-2xl hover:bg-yellow-400 hover:border-yellow-400 rounded-xl h-9 md:h-11 px-5 font-medium md:text-lg">
              Добавить
            </button>
            <div>
              <div className="bg-neutral-200/60 rounded-xl p-1.5 md:p-2 shadow-sm md:text-lg grow text-center flex items-center justify-between">
                <button className="text-2xl " onClick={() => deleteCount()}>
                  <DeleteSVG />
                </button>
                <p className="px-4">{foodCount}</p>
                <button className="text-2xl" onClick={() => addCount()}>
                  <AddSVG />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full text-end">
            <p className="text-xs text-neutral-400">Сумма</p>
            <p>{Math.ceil(+item.price * foodCount)}₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodModal;

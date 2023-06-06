import { useState } from 'react';
import { CartType } from 'redux/slices/cartSlice';
import { FoodType } from 'redux/slices/foodSlice';
import { DeleteSVG, AddSVG, CloseSVG } from './SVG';

type Props = {
  item: FoodType;
  cart: CartType[];
  setIsOpen: (isOpen: boolean) => void;
  addToCart: (count?: number) => void;
};

const FoodModal = ({ item, cart, setIsOpen, addToCart }: Props) => {
  let index = cart.findIndex((elem) => elem.item.id === item.id);

  const [foodCount, setFoodCount] = useState<number>(
    !cart.map((el) => el.item.id).includes(item.id) ? 1 : cart[index].count,
  );

  const addCount = () => {
    setFoodCount(foodCount + 1);
  };

  const deleteCount = () => {
    if (foodCount > 1) {
      setFoodCount(foodCount - 1);
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
            <CloseSVG />
          </button>
        </div>
        <p className="text-base pb-4">{item.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex sm:flex-row flex-col-reverse gap-5">
            <button
              onClick={() => addToCart(foodCount)}
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

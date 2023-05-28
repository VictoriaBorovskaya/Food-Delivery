import { useState } from 'react';
import { FoodType } from 'redux/slices/foodSlice';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import { setCart } from 'redux/slices/cartSlice';
import DeleteModal from './deleteModal';
import { InfoSVG, DeleteSVG, AddSVG } from './SVG';
import FoodModal from './foodModal';

type Props = {
  item: FoodType;
  restaurant: RestaurantsType;
};

const FoodList = ({ item, restaurant }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  const addToCart = () => {
    if (cart.length === 0) {
      dispatch(setCart([...cart, { item, name: restaurant.name, count: 1 }]));
    } else if (cart.length > 0) {
      const cartItemIds = cart.map((el) => el.item.id);
      if (!cartItemIds.includes(item.id)) {
        if (cart[0].item.restaurantId !== item.restaurantId) {
          setIsDelete(true);
        } else {
          return dispatch(setCart([...cart, { item, name: restaurant.name, count: 1 }]));
        }
      } else {
        const elem = cart.find((c) => c.item.id === item.id)!;
        return dispatch(
          setCart([
            ...cart.filter((elem) => elem.item.id !== item.id),
            {
              ...elem,
              count: elem.count + 1,
            },
          ]),
        );
      }
    }
  };

  const getNewCart = () => {
    dispatch(
      setCart([
        ...cart.filter((elem) => elem.item.restaurantId === item.restaurantId),
        { item, name: restaurant.name, count: 1 },
      ]),
    );
    setIsDelete(false);
  };

  const deleteFood = () => {
    cart
      .filter((el) => el.item.id === item.id)
      .map((elem) => {
        if (elem.count > 1) {
          return dispatch(
            setCart([
              ...cart.filter((elem) => elem.item.id !== item.id),
              {
                ...elem,
                count: elem.count - 1,
              },
            ]),
          );
        } else {
          return dispatch(setCart([...cart.filter((elem) => elem.item.id !== item.id)]));
        }
      });
  };

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm flex flex-col">
      <img loading="lazy" src={item.image} alt="" className="rounded-3xl h-60 md:h-48 w-full object-cover" />
      <p className="font-medium text-xl pt-2 pb-0.5">{Math.ceil(+item.price)}₽</p>
      <p className="pb-4 grow">{item.name}</p>
      {isOpen === true && (
        <FoodModal item={item} cart={cart} setIsOpen={setIsOpen} setIsDelete={setIsDelete} restaurant={restaurant} />
      )}
      <div className="flex items-center justify-between gap-3">
        <button
          className="bg-neutral-200/60 rounded-xl p-2 shadow-sm active:bg-neutral-200"
          onClick={() => setIsOpen(!isOpen)}>
          <InfoSVG />
        </button>
        {cart.filter((elem) => elem.item.id === item.id).length === 0 ? (
          <button
            className="bg-neutral-200/60 rounded-xl py-2 shadow-sm text-lg grow active:bg-neutral-200"
            onClick={() => addToCart()}>
            <span className="font-semibold text-2xl">+</span> Добавить
          </button>
        ) : (
          <div className="bg-neutral-200/60 rounded-xl p-2 shadow-sm text-lg grow text-center flex items-center justify-between">
            <button className="text-2xl " onClick={() => deleteFood()}>
              <DeleteSVG />
            </button>
            <p>
              {cart.map((elem) => {
                return elem.item.name === item.name ? elem.count : null;
              })}
            </p>
            <button className="text-2xl" onClick={() => addToCart()}>
              <AddSVG />
            </button>
          </div>
        )}

        <DeleteModal
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          restaurant={restaurant}
          getNewCart={getNewCart}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default FoodList;

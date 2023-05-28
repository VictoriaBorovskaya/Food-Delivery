import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { CartType } from 'redux/slices/cartSlice';

type Props = {
  isDelete: boolean;
  setIsDelete: (isDelete: boolean) => void;
  restaurant: RestaurantsType;
  cart: CartType[];
  getNewCart: () => void;
};

const DeleteModal = ({ isDelete, setIsDelete, restaurant, cart, getNewCart }: Props) => {
  return (
    <div
      className={
        isDelete && cart.length > 0
          ? 'fixed top-0 right-0 bottom-0 left-0 bg-neutral-900/10 z-50 flex items-center justify-center'
          : 'hidden'
      }>
      <div className="bg-white p-7 rounded-2xl w-96">
        <p className="text-xl font-bold">Оформить заказ из ресторана {restaurant.name}?</p>
        <p className="leading-tight pt-2">
          Все ранее добавленные блюда из ресторана {cart.length > 0 ? cart[0].name : ''} будут
          удалены из корзины
        </p>
        <div className="flex gap-5 justify-between pt-5">
          <button
            onClick={() => setIsDelete(!isDelete)}
            className="bg-neutral-200/70 h-12 w-1/2 rounded-2xl font-medium hover:bg-neutral-200/100 duration-200">
            Отмена
          </button>
          <button
            onClick={() => getNewCart()}
            className="bg-yellow-300 h-12 w-1/2 rounded-2xl font-medium hover:bg-yellow-400 duration-200">
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

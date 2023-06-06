import { CartType } from 'redux/slices/cartSlice';
import { PaySVG } from './SVG';
import './Payment.css';

type Props = {
  cart: CartType[];
  isLoaded: boolean;
};

const Payment = ({ cart, isLoaded }: Props) => {
  const totalPrice = cart.reduce((prev, cur) => prev + parseFloat(cur.item.price) * cur.count, 0);

  return (
    <div className="bg-white rounded-3xl p-3.5 sm:p-8 w-full lg:w-2/5 flex flex-col payment-container">
      <p className="text-xl sm:text-2xl font-bold pb-2">Споcоб оплаты</p>
      <span className="border-b border-neutral-300 pb-5 flex items-center gap-2 sm:text-lg">
        <PaySVG />
        Картой при получении
      </span>
      <p className="text-xl font-bold pt-5">Итого</p>
      <span className="payment-text">
        <p>Стоимость товаров</p>
        {Math.ceil(totalPrice)}₽
      </span>
      {(+cart[0].item.restaurantId === 1 ||
        +cart[0].item.restaurantId === 3 ||
        +cart[0].item.restaurantId === 4 ||
        +cart[0].item.restaurantId === 6 ||
        +cart[0].item.restaurantId === 8 ||
        +cart[0].item.restaurantId === 9) &&
      totalPrice < 600 ? (
        <span className="payment-text">
          <p>Доставка</p>
          99₽
        </span>
      ) : (+cart[0].item.restaurantId === 1 ||
          +cart[0].item.restaurantId === 3 ||
          +cart[0].item.restaurantId === 4 ||
          +cart[0].item.restaurantId === 6 ||
          +cart[0].item.restaurantId === 8 ||
          +cart[0].item.restaurantId === 9) &&
        totalPrice > 600 ? (
        <span className="payment-text">
          <p>Доставка</p>
          0₽
        </span>
      ) : (
        <span className="payment-text">
          <p>Доставка</p>
          99₽
        </span>
      )}
      <span className="payment-text">
        <p>Работа сервиса</p>
        39₽
      </span>
      <div className="flex justify-between items-center font-medium pt-5 sm:pt-10">
        {isLoaded ? (
          <button className="payment-button text-lg flex justify-center">
            <div className="w-7 h-7 animate-spin rounded-full bg-gradient-to-r from-black to-yellow-300 flex items-center justify-center">
              <div className="bg-yellow-300 w-5 h-5 rounded-full"></div>
            </div>
          </button>
        ) : (
          <button className="payment-button bg-yellow-300 sm:text-lg" type="submit">
            Оформить заказ
          </button>
        )}
        <p className="sm:text-2xl text-lg">
          {(+cart[0].item.restaurantId === 1 ||
            +cart[0].item.restaurantId === 3 ||
            +cart[0].item.restaurantId === 4 ||
            +cart[0].item.restaurantId === 6 ||
            +cart[0].item.restaurantId === 8 ||
            +cart[0].item.restaurantId === 9) &&
          totalPrice > 600
            ? Math.ceil(totalPrice + 39)
            : (+cart[0].item.restaurantId === 1 ||
                +cart[0].item.restaurantId === 3 ||
                +cart[0].item.restaurantId === 4 ||
                +cart[0].item.restaurantId === 6 ||
                +cart[0].item.restaurantId === 8 ||
                +cart[0].item.restaurantId === 9) &&
              totalPrice < 600
            ? Math.ceil(totalPrice + 39 + 99)
            : Math.ceil(totalPrice + 39 + 99)}
          ₽
        </p>
      </div>
    </div>
  );
};

export default Payment;

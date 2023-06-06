import Logo from 'components/HomePage/Header/logo';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import Delivery from './Delivery';
import Cart from './Cart';
import Payment from './Payment';
import Footer from './Footer';
import EmptyCart from './EmptyCart';
import { useState, FormEvent } from 'react';
import { User, Address } from 'helpers';
import { setCart } from 'redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state: RootState) => state.restaurants);

  const index = () => {
    return cart.length > 0 ? restaurants.findIndex((item) => +item.id === +cart[0].item.restaurantId) : -1;
  };

  const [form, setForm] = useState<User>({
    customerName: '',
    phone: '',
    email: '',
  });

  const [address, setAddress] = useState<Address>({
    street: '',
    apartment: '',
    intercom: '',
    entrance: '',
    floor: '',
  });

  const cartItems = cart.map((item) => {
    return { itemId: +item.item.id, quantity: item.count, price: Math.ceil(+item.item.price * item.count) };
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const order = {
      customerName: form.customerName,
      phone: form.phone,
      email: form.email,
      restaurantId: +cart[0].item.restaurantId,
      cartItems,
    };
    setIsLoaded(true);

    // почему axios не работает??????
    let response = await fetch('https://www.bit-by-bit.ru/api/student-projects/restaurants/order', {
      method: 'POST',
      body: JSON.stringify(order),
    });
    let data = await response.json();
    if (data.error === null) {
      setIsLoaded(false);
      setIsOrdered(true);
      setForm({
        customerName: '',
        phone: '',
        email: '',
      });

      setAddress({
        street: '',
        apartment: '',
        intercom: '',
        entrance: '',
        floor: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200/60">
      <div className="max-w-7xl m-auto py-5 flex justify-center border-b border-neutral-300">
        <Logo />
      </div>
      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 && index() >= 0 && (
        <div className="max-w-7xl m-auto py-10 px-2">
          <Link to={`/${restaurants[index()].slug}`}>
            <p className=" text-3xl text-center sm:text-start sm:text-4xl font-bold pb-10">{cart[0].name}</p>
          </Link>
          <form
            className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 w-full"
            onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10 w-full lg:w-3/5">
              <Delivery form={form} setForm={setForm} address={address} setAddress={setAddress} />
              <Cart cart={cart} />
            </div>
            <Payment cart={cart} isLoaded={isLoaded} />
          </form>
        </div>
      )}
      <div
        id="cart-modal"
        onClick={(event) => event.target === document.getElementById('cart-modal') && setIsOrdered(false)}
        className={cn({
          'fixed top-0 left-0 right-0 bottom-0 bg-neutral-700/50 flex items-center justify-center': isOrdered,
          hidden: !isOrdered,
        })}>
        <dialog className="bg-white rounded-3xl w-4/5 md:w-3/5 lg:w-2/5 p-5 flex flex-col items-center  justify-center text-center gap-5">
          <p className="text-lg">
            Ваш заказ успешно оформлен. Наш менеджер свяжится с Вами в течение 5 минут для подтверждения заказа.
          </p>
          <button
            className="bg-yellow-300 hover:bg-yellow-400 rounded-2xl py-2 px-5 w-full sm:w-2/3 text-lg font-medium"
            onClick={() => {
              setIsOrdered(false);
              dispatch(setCart([]));
            }}>
            Ок
          </button>
        </dialog>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

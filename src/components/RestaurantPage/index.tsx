import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchFood } from 'redux/slices/foodSlice';
import type { RootState } from 'redux/store';
import { useAppDispatch } from 'redux/store';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import FoodList from './FoodList';
import LoadingFoodCard from './FoodList/LoadingFoodCard';
import LoadingRestaurantInfo from './RestaurantInfo/LoadingRestaurantInfo';
import RestaurantInfo from './RestaurantInfo';
import Cart from './Cart';
import InfoModal from './InfoModal';
import Header from './Header';
import Footer from 'components/Footer';
import CartLoading from './Cart/CartLoading';
import { DeliverySVG } from './SVG';

const RestaurantPage = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { food, status } = useSelector((state: RootState) => state.food);
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);
  const [restaurant, setRestaurant] = useState<RestaurantsType | null>(null);

  useEffect(() => {
    axios.get(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`).then(({ data }) => {
      setRestaurant(data);
    });
  }, [slug]);

  useEffect(() => {
    if (slug) {
      dispatch(fetchFood(slug));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const freeDeliveryItem = () => {
    if (restaurant !== null) {
      return (
        +restaurant.id === 1 ||
        +restaurant.id === 3 ||
        +restaurant.id === 4 ||
        +restaurant.id === 6 ||
        +restaurant.id === 8 ||
        +restaurant.id === 9
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-neutral-200/50 min-h-[90vh] px-3 lg:px-2">
        {restaurant && (
          <div className="max-w-7xl m-auto gap-12 flex">
            <div className="w-full md:w-2/3 relative">
              {status === 'success' ? (
                <RestaurantInfo
                  restaurant={restaurant}
                  isOpenInfoModal={isOpenInfoModal}
                  setIsOpenInfoModal={setIsOpenInfoModal}
                />
              ) : (
                <LoadingRestaurantInfo />
              )}
              {freeDeliveryItem() && (
                <div className="bg-lime-400/30 rounded-2xl p-2  flex items-center">
                  <div className="w-12 h-12 relative">
                    <DeliverySVG />
                    <img
                      src="https://avatars.mds.yandex.net/get-bunker/128809/8a437d76ad8ef449df0d4a09b3d3fcc045abd915/orig"
                      alt=""
                      className="invert w-8 h-8 absolute top-2 left-2"
                    />
                  </div>
                  <p className="font-medium sm:text-base text-sm pl-3">
                    Бесплатная доставка действует на заказ от 600₽
                  </p>
                </div>
              )}
              <InfoModal
                isOpenInfoModal={isOpenInfoModal}
                restaurant={restaurant}
                setIsOpenInfoModal={setIsOpenInfoModal}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {status === 'success'
                  ? food.map((item) => <FoodList item={item} key={item.id} restaurant={restaurant} />)
                  : Array.from(Array(10)).map((x, i) => <LoadingFoodCard key={i} />)}
              </div>
            </div>
            {status === 'success' ? <Cart freeDeliveryItem={freeDeliveryItem} /> : <CartLoading />}
          </div>
        )}
        {!restaurant && (
          <div className="max-w-7xl m-auto gap-12 flex">
            <div className="w-2/3 relative">
              <LoadingRestaurantInfo />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {Array.from(Array(10)).map((x, i) => (
                  <LoadingFoodCard key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantPage;

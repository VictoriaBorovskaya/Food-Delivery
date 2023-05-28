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
              {(+restaurant.id === 1 ||
                +restaurant.id === 3 ||
                +restaurant.id === 4 ||
                +restaurant.id === 6 ||
                +restaurant.id === 8 ||
                +restaurant.id === 9) && (
                <div className="bg-lime-400/30 rounded-2xl p-2  flex items-center">
                  <div className="w-12 h-12 relative">
                    <svg
                      viewBox="0 0 48 47"
                      fill="none"
                      className="w-12 h-12 text-lime-400"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7594 41.5647H16.0891C16.4937 41.5647 16.7567 41.6457 17.04 41.9492L20.1153 45.0042C22.7656 47.6546 25.2339 47.6343 27.8641 45.0042L30.9394 41.9492C31.2226 41.6457 31.5059 41.5647 31.8903 41.5647H36.2199C39.9426 41.5647 41.7028 39.8046 41.7028 36.0616V31.732C41.7028 31.3476 41.8242 31.0644 42.1074 30.7811L45.1624 27.7058C47.8128 25.0757 47.7926 22.6074 45.1624 19.9772L42.1074 16.8817C41.8242 16.5985 41.7028 16.3355 41.7028 15.9511V11.6214C41.7028 7.89874 39.9628 6.11833 36.2199 6.11833H31.8903C31.5059 6.11833 31.2226 6.01717 30.9394 5.73392L27.8641 2.67889C25.2339 0.028504 22.7656 0.028504 20.1153 2.67889L17.04 5.73392C16.777 6.01717 16.4937 6.11833 16.0891 6.11833H11.7594C8.03676 6.11833 6.27658 7.85828 6.27658 11.6214V15.9511C6.27658 16.3355 6.17542 16.5985 5.89217 16.8817L2.83715 19.9772C0.186757 22.6074 0.206989 25.0757 2.83715 27.7058L5.89217 30.7811C6.17542 31.0644 6.27658 31.3476 6.27658 31.732V36.0616C6.27658 39.7843 8.03676 41.5647 11.7594 41.5647Z"
                        fill="currentColor"></path>
                    </svg>
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
            <Cart restaurant={restaurant} />
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
    </div>
  );
};

export default RestaurantPage;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import Header from 'components/HomePage/Header';
import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import Menu from 'components/HomePage/Menu';
import RestaurantsList from 'components/HomePage/ReataurantsList';
import Loading from 'components/HomePage/ReataurantsList/Loading';
import Footer from 'components/Footer';

const HomePage = () => {
  const { restaurants, status } = useSelector((state: RootState) => state.restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantsType[]>(restaurants);
  const [isSearch, setIsSearch] = useState<boolean>(true);

  return (
    <div>
      <div className="min-h-screen max-w-7xl m-auto px-3 lg:px-2">
        <Header
          setFilteredRestaurants={setFilteredRestaurants}
          filteredRestaurants={filteredRestaurants}
          setIsSearch={setIsSearch}
        />
        <Menu setFilteredRestaurants={setFilteredRestaurants} setIsSearch={setIsSearch} />
        {isSearch === true && (
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 pt-12 pb-20">
            {status === 'success'
              ? filteredRestaurants.map((restaurant) => <RestaurantsList key={restaurant.id} restaurant={restaurant} />)
              : Array.from(Array(10)).map((x, i) => <Loading key={i} />)}
          </div>
        )}
        {isSearch === false && (
          <div className="py-20 text-lg font-medium text-center w-full m-auto">По Вашему запросу ничего не найдено</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

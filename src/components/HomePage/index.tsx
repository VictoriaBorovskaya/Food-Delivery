import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import Header from 'components/HomePage/Header';
import Menu from 'components/HomePage/Menu';
import RestaurantsList from 'components/HomePage/ReataurantsList';
import Loading from 'components/HomePage/ReataurantsList/Loading';

const HomePage = () => {
  const { restaurants, status } = useSelector((state: RootState) => state.restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  return (
    <div className="min-h-screen max-w-7xl m-auto px-3 lg:px-2">
      <Header setFilteredRestaurants={setFilteredRestaurants} filteredRestaurants={filteredRestaurants} />
      <Menu setFilteredRestaurants={setFilteredRestaurants} />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 pt-12 pb-20">
        {status === 'success'
          ? filteredRestaurants.map((restaurant) => <RestaurantsList key={restaurant.id} restaurant={restaurant} />)
          : Array.from(Array(10)).map((x, i) => <Loading key={i} />)}
      </div>
      {filteredRestaurants.length === 0 && (
        <div className="py-20 text-lg font-medium text-center w-full m-auto">
          По Вашему запросу в выбранной категории ничего не найдено
        </div>
      )}
    </div>
  );
};

export default HomePage;

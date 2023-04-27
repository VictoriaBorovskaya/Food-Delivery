import { useState } from "react";
import Header from "components/HomePage/Header";
import Menu from "components/HomePage/Menu";
import RestaurantsList from "components/HomePage/ReataurantsList";
import Loading from "components/HomePage/ReataurantsList/Loading";
import { ReataurantsType } from "components/Scripts";

type Props = {
  restaurants: ReataurantsType[];
  error: Error | undefined;
  isLoaded: boolean;
};

const HomePage = ({ restaurants, error, isLoaded }: Props) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  return (
    <div className="min-h-screen max-w-7xl m-auto px-5">
      <Header
        setFilteredRestaurants={setFilteredRestaurants}
        filteredRestaurants={filteredRestaurants}
      />
      <Menu restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
      <div className="grid grid-cols-4 gap-10 pt-12 pb-20">
        {isLoaded
          ? filteredRestaurants.map((restaurant) => (
              <RestaurantsList key={restaurant.id} restaurant={restaurant} error={error} />
            ))
          : // вот тут ошибка в консоли из-за того, что нет ключа, но если его прописать, то все работает неправильно
            Array(10).fill(<Loading />)}
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

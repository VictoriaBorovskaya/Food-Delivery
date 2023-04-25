import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "components/Header";
import Menu from "components/Menu";
import RestaurantsList from "components/ReataurantsList";
import Loading from "components/ReataurantsList/Loading";
import { ReataurantsType } from "components/Scripts";

function App() {
  const [restaurants, setRestaurants] = useState<ReataurantsType[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://www.bit-by-bit.ru/api/student-projects/restaurants")
      .then(({ data }) => {
        setRestaurants(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  return (
    <div className="min-h-screen max-w-7xl m-auto px-5">
      <Header
        setFilteredRestaurants={setFilteredRestaurants}
        filteredRestaurants={filteredRestaurants}
      />
      <Menu restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
      <div className="grid grid-cols-4 gap-10 pt-12 pb-20">
        {isLoaded
          ? filteredRestaurants.map((item) => (
              <RestaurantsList key={item.id} item={item} error={error} />
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
}

export default App;

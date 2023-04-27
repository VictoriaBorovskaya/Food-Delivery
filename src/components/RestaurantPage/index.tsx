import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { ReataurantsType, FoodType } from "components/Scripts";
import FoodList from "./FoodList";
import LoadingFoodCard from "./FoodList/LoadingFoodCard";
import RestaurantInfo from "./RestaurantInfo";
import Basket from "./Basket";
import InfoModal from "./InfoModal";

type Props = {
  restaurant: ReataurantsType;
};

const RestaurantPage = ({ restaurant }: Props) => {
  const [food, setFood] = useState<FoodType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${restaurant.slug}/items`)
      .then(({ data }) => {
        setFood(data);
        setIsLoaded(true);
      });
  }, [restaurant.slug]);

  return (
    <div className="">
      <Header />
      <div className="bg-neutral-200/50 min-h-[90vh]">
        <div className="max-w-7xl m-auto gap-12 flex">
          <div className="w-2/3 relative">
            <RestaurantInfo
              restaurant={restaurant}
              isOpenInfoModal={isOpenInfoModal}
              setIsOpenInfoModal={setIsOpenInfoModal}
            />
            <InfoModal isOpenInfoModal={isOpenInfoModal} restaurant={restaurant} />
            <div className="grid grid-cols-3 gap-5 py-10">
              {isLoaded
                ? food.map((item) => <FoodList item={item} key={item.id} />)
                : Array(10).fill(<LoadingFoodCard />)}
            </div>
          </div>
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { RestaurantInfoSVG, RatingSVG } from './SVG';
import './RestaurantInfo.css';

type Props = {
  restaurant: RestaurantsType;
  isOpenInfoModal: boolean;
  setIsOpenInfoModal: (isOpenInfoModal: boolean) => void;
};

const RestaurantInfo = ({ restaurant, isOpenInfoModal, setIsOpenInfoModal }: Props) => {
  const image = require('.//delivery.png');

  return (
    <div className="h-64 sm:h-80 my-10 relative rounded-3xl overflow-hidden shadow-sm ">
      <img src={restaurant.image} alt="" className="object-cover object-center h-full w-full" />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-neutral-800/50 via-neutral-800/30 to-neutral-800/0 flex flex-col justify-end p-3 sm:p-10">
        <p className="text-2xl sm:text-3xl font-bold text-white">{restaurant.name}</p>
        <div className="flex items-center pt-3 sm:pt-5 gap-5 info-container">
          <div className="hidden py-2 px-4 sm:flex items-center restaurantInfo-button">
            <img src={image} alt="" className="sm:w-10 sm:h-10 w-8 h-8 scale" />
            <div className="flex flex-col scale">
              <p className="sm:text-xl font-medium leading-tight">30-40</p>
              <p className="leading-none text-neutral-600">мин</p>
            </div>
          </div>
          <div className="py-2 px-4 flex items-center restaurantInfo-button">
            <RatingSVG />
            <div className="flex flex-col scale">
              <p className="sm:text-xl font-medium leading-tight">4.9</p>
              <p className="leading-none text-neutral-600">(200+)</p>
            </div>
          </div>
          <button
            className="shadow-sm w-16 text-center restaurantInfo-button"
            onClick={() => setIsOpenInfoModal(!isOpenInfoModal)}>
            <RestaurantInfoSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;

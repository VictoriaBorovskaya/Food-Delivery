import { ReataurantsType } from "components/Scripts";
import { RestaurantInfoSVG } from "components/Scripts/SVG";

type Props = {
  restaurant: ReataurantsType;
  isOpenInfoModal: boolean;
  setIsOpenInfoModal: (isOpenInfoModal: boolean) => void;
};

const RestaurantInfo = ({ restaurant, isOpenInfoModal, setIsOpenInfoModal }: Props) => {
  const image = require(".//delivery.png");

  return (
    <div className="h-80 my-10 relative rounded-3xl overflow-hidden shadow-sm">
      <img src={restaurant.image} alt="" className="h-full w-full object-cover object-center" />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-neutral-800/50 via-neutral-800/30 to-neutral-800/0 flex flex-col justify-end p-10">
        <p className="text-3xl font-bold text-white">{restaurant.name}</p>
        <div className="flex items-center pt-5 gap-5">
          <div className="bg-neutral-100/80 py-2 px-4 rounded-xl flex items-center h-16 hover:bg-neutral-100">
            <img src={image} alt="" className="w-10 h-10" />
            <div className="flex flex-col">
              <p className="text-xl font-medium leading-tight">30-40</p>
              <p className="leading-none text-neutral-600">мин</p>
            </div>
          </div>
          <div className="bg-neutral-100/80 py-2 px-4 rounded-xl flex items-center h-16 hover:bg-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mr-2">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <div className="flex flex-col">
              <p className="text-xl font-medium leading-tight">4.9</p>
              <p className="leading-none text-neutral-600">(200+)</p>
            </div>
          </div>
          <button
            className="bg-neutral-100/80 rounded-xl shadow-sm h-16 px-3 hover:bg-neutral-100"
            onClick={() => setIsOpenInfoModal(!isOpenInfoModal)}>
            <RestaurantInfoSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;

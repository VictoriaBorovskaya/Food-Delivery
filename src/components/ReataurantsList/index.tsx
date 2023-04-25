import { ReataurantsType } from "components/Scripts";
import FreeDelivery from "./FreeDelivery";

type Props = {
  item: ReataurantsType;
  error: Error | undefined;
};

const RestaurantsList = ({ item, error }: Props) => {
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div className="relative">
      <div className="bg-yellow-300/70 absolute rounded-2xl top-2 left-2 z-30">
        <p className="font-medium text-lg px-5 py-1">{item.cuisine}</p>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow cursor-pointer h-48">
        <img
          loading="lazy"
          src={item.image}
          alt=""
          decoding="async"
          className="object-cover object-center"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900/10 hover:bg-neutral-900/0"></div>
      </div>
      <p className="font-medium text-xl pt-1 cursor-pointer">{item.name}</p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-yellow-400 mr-1">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm">4.8 Хорошо (200+)</p>
      </div>
      {+item.id === 1 && <FreeDelivery key={item.name} />}
      {+item.id === 3 && <FreeDelivery key={item.name} />}
      {+item.id === 4 && <FreeDelivery key={item.name} />}
      {+item.id === 6 && <FreeDelivery key={item.name} />}
      {+item.id === 8 && <FreeDelivery key={item.name} />}
      {+item.id === 9 && <FreeDelivery key={item.name} />}
    </div>
  );
};

export default RestaurantsList;

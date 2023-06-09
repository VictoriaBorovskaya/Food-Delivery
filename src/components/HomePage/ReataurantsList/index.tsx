import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { Link } from 'react-router-dom';
import { RatingSVG } from './SVG';
import FreeDelivery from './FreeDelivery';

type Props = {
  restaurant: RestaurantsType;
};

const RestaurantsList = ({ restaurant }: Props) => {
  const freeDeliveryItem =
    +restaurant.id === 1 ||
    +restaurant.id === 3 ||
    +restaurant.id === 4 ||
    +restaurant.id === 6 ||
    +restaurant.id === 8 ||
    +restaurant.id === 9;

  return (
    <div className="relative">
      <div className="bg-yellow-300/70 absolute rounded-2xl top-2 left-2 z-30">
        <p className="font-medium text-lg px-5 py-1">{restaurant.cuisine}</p>
      </div>
      <Link to={`/${restaurant.slug}`}>
        <div className="relative rounded-2xl overflow-hidden shadow cursor-pointer sm:h-48 h-60">
          <img loading="lazy" src={restaurant.image} alt="" className="object-cover object-center h-full w-full" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900/10 hover:bg-neutral-900/0"></div>
        </div>
      </Link>
      <Link to={`/${restaurant.slug}`}>
        <p className="font-medium text-xl pt-1 cursor-pointer">{restaurant.name}</p>
      </Link>
      <div className="flex items-center">
        <RatingSVG />
        <p className="text-sm">4.8 Хорошо (200+)</p>
      </div>
      {freeDeliveryItem && <FreeDelivery key={restaurant.id} />}
    </div>
  );
};

export default RestaurantsList;

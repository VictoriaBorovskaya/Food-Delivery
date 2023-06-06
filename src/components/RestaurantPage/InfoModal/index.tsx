import { RestaurantsType } from 'redux/slices/restaurantsSlice';
import { getHours, getMinutes } from 'date-fns';
import { PhoneSVG, EmailSVG, CloseSVG } from './SVG';
import cn from 'classnames';
import './InfoModal.css';

type Props = {
  isOpenInfoModal: boolean;
  setIsOpenInfoModal: (isOpenInfoModal: boolean) => void;
  restaurant: RestaurantsType;
};

const InfoModal = ({ isOpenInfoModal, restaurant, setIsOpenInfoModal }: Props) => {
  const getCloseTime = new Date(restaurant.closeAt);
  const closeTime = {
    hours: getHours(getCloseTime),
    minutes: getMinutes(getCloseTime),
  };

  const getOpenTime = new Date(restaurant.openAt);
  const openTime = {
    hours: getHours(getOpenTime),
    minutes: getMinutes(getOpenTime),
  };

  const formatTime = (arg: number) => {
    return arg < 10 ? '0' + arg.toString() : arg.toString();
  };

  return (
    <div
      id="info-modal"
      onClick={(event) => event.target === document.getElementById('info-modal') && setIsOpenInfoModal(false)}
      className={cn('', {
        'fixed top-0 right-0 left-0 bottom-0 bg-neutral-700/50 z-50 flex items-center justify-center': isOpenInfoModal,
        hidden: !isOpenInfoModal,
      })}>
      <div className="flex items-center justify-center">
        <div className="flex-col bg-white shadow-md rounded-2xl z-50 w-4/5 sm:w-3/5 lg:w-2/5 p-5 overflow-x-auto">
          <div className=" flex flex-col-reverse sm:flex-row items-end md:items-center justify-between">
            <p className="text-xl font-medium pb-2 w-full text-start">{restaurant.name}</p>
            <button onClick={() => setIsOpenInfoModal(false)}>
              <CloseSVG />
            </button>
          </div>
          <p>{restaurant.address}</p>
          <p className="text-neutral-500 border-b border-neutral-400 pb-2">
            Сегодня до {formatTime(closeTime.hours)}:{formatTime(closeTime.minutes)}
          </p>
          <div className="py-2 text-neutral-500 border-b border-neutral-400">
            <span>{restaurant.cuisine}</span>
            <span className="px-2" aria-hidden="true">
              &middot;
            </span>
            <span>{restaurant.description}</span>
          </div>
          <div className="py-2 text-neutral-500">
            <p>Контакты:</p>
            <div className="flex gap-1 items-center">
              <PhoneSVG />
              <p>{restaurant.phone}</p>
            </div>
            <div className="flex gap-1 items-center">
              <div>
                <EmailSVG />
              </div>
              <p>{restaurant.email}</p>
            </div>
          </div>
          <p className="pt-2 text-neutral-500 text-lg">
            Режим работы: c {formatTime(openTime.hours)}:{formatTime(openTime.minutes)} до {formatTime(closeTime.hours)}
            :{formatTime(closeTime.minutes)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;

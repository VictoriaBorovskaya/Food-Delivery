import { ReataurantsType } from "components/Scripts";
import { getHours, getMinutes } from "date-fns";

type Props = {
  isOpenInfoModal: boolean;
  restaurant: ReataurantsType;
};

const InfoModal = ({ isOpenInfoModal, restaurant }: Props) => {
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
    return arg < 10 ? "0" + arg.toString() : arg.toString();
  };

  return (
    <div className={isOpenInfoModal ? "flex relative" : "hidden"}>
      <div className="flex-col absolute bg-white shadow-md rounded-2xl z-50 w-96 p-5 -top-16 left-40">
        <p className="text-xl font-medium pb-2">{restaurant.name}</p>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <p>{restaurant.phone}</p>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p>{restaurant.email}</p>
          </div>
        </div>
        <p className="pt-2 text-neutral-500 text-lg">
          Режим работы: c {formatTime(openTime.hours)}:{formatTime(openTime.minutes)} до{" "}
          {formatTime(closeTime.hours)}:{formatTime(closeTime.minutes)}
        </p>
      </div>
    </div>
  );
};

export default InfoModal;

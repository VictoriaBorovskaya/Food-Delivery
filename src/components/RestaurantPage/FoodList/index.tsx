import { useState } from "react";
import { FoodType } from "components/Scripts";

type Props = {
  item: FoodType;
};

const FoodList = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm flex flex-col">
      <img
        loading="lazy"
        decoding="async"
        src={item.image}
        alt=""
        className="rounded-3xl h-48 w-full object-cover"
      />
      <p className="font-medium text-xl pt-2 pb-0.5">{item.price}₽</p>
      <p className="pb-4">{item.name}</p>
      <div className={!isOpen ? "grow" : "grow-0"}>
        <p className={!isOpen ? "hidden" : "text-sm pb-4"}>{item.description}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <button
          className="bg-neutral-200/60 rounded-xl p-2 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>

        <button className="bg-neutral-200/60 rounded-xl py-2 shadow-sm text-lg grow">
          <span className="font-semibold text-2xl">+</span> Добавить
        </button>
      </div>
    </div>
  );
};

export default FoodList;

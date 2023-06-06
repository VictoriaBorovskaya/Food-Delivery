import { useState } from 'react';
import cn from 'classnames';

const FreeDelivery = () => {
  const image = require('.//delivery.png');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="flex relative mt-2">
        <div className="bg-lime-400 rounded-full w-fit z-50">
          <img src={image} alt="" className="w-8 h-8 p-1.5" />
        </div>
        <p
          onMouseOut={() => setIsOpen(false)}
          onMouseOver={() => setIsOpen(true)}
          className="bg-neutral-100 rounded-2xl hover:bg-neutral-200 text-sm px-5 py-1.5 absolute left-4 top-1.5 cursor-pointer z-10">
          Бесплатная доставка
        </p>
      </div>
      <div
        className={cn('', {
          hidden: !isOpen,
          'flex flex-col container rounded-3xl shadow-md border border-neutral-200 text-sm px-4 py-2 mt-3 absolute z-50 bg-white w-fit':
            isOpen,
        })}>
        <p className="font-medium">Бесплатная доставка</p>
        <p>действует на заказ от 600₽</p>
      </div>
    </div>
  );
};

export default FreeDelivery;

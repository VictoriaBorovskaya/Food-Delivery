import { Link } from 'react-router-dom';
import { BackSVG } from './SVG';

const EmptyCart = () => {
  return (
    <div className="max-w-7xl m-auto relative h-[80vh]">
      <div className="flex flex-col items-center justify-center w-full  h-full">
        <img
          className="w-24 h-24"
          src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
          alt=""
        />
        <p className="text-lg font-semibold pt-1 text-center">В Вашей корзине пока пусто</p>
        <Link to="/">
          <button className="border border-neutral-400 rounded-r-2xl hover:bg-neutral-200 rounded-2xl h-11 px-5 font-medium duration-200 my-5">
            <span className="flex items-center gap-2">
              <BackSVG />
              Вернуться на главную страницу
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;

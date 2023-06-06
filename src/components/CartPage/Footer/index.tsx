import { Link } from 'react-router-dom';

const Footer = () => {
  const logo = require('components/HomePage/Header/logo.png');

  return (
    <footer className="max-w-7xl m-auto flex sm:flex-row flex-col justify-between items-end relative bottom-0 left-0 right-0 py-5">
      <div className="flex items-start sm:items-end gap-5 sm:gap-16 sm:flex-row flex-col w-full sm:w-fit">
        <Link to="/">
          <div className="flex text-2xl font-semibold items-center opacity-40">
            <p>Food</p>
            <img src={logo} alt="" className="w-7 h-7" />
            <p>Delivery</p>
          </div>
        </Link>
        <div className="flex text-end items-center gap-1 cursor-pointer">
          <img
            src="https://avatars.mds.yandex.net/get-bunker/60661/1a0d5a85380003680cc58d7119ce24f33d5f8406/svg"
            alt=""
          />
          <p className="text-sm opacity-40">Обратная связь</p>
        </div>
      </div>
      <p className="opacity-40 text-sm cursor-pointer mt-5 sm:mt-0">Пользовательское соглашение</p>
    </footer>
  );
};

export default Footer;

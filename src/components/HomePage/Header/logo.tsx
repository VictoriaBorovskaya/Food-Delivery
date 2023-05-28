import { Link } from 'react-router-dom';

const Logo = () => {
  const logo = require('./logo.png');

  return (
    <Link to="/">
      <div className="flex text-3xl font-semibold">
        <p className="block sm:hidden md:block">Food</p>
        <img src={logo} alt="" className="md:w-9 md:h-9 w-11 h-11" />
        <p className="block sm:hidden md:block">Delivery</p>
      </div>
    </Link>
  );
};

export default Logo;

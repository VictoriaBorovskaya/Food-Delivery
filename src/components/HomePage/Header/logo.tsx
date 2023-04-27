const Logo = () => {
  const logo = require("./logo.png");

  return (
    <div className="flex text-3xl font-semibold">
      <p>Food</p>
      <img src={logo} alt="" className="w-9 h-9" />
      <p>Delivery</p>
    </div>
  );
};

export default Logo;

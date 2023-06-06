import Header from 'components/RestaurantPage/Header';

const ErrorPage = () => {
  return (
    <div className="min-h-screen max-w-7xl m-auto px-3 lg:px-2">
      <Header />
      <p className="text-xl font-medium text-center my-52">Страница не найдена</p>
    </div>
  );
};

export default ErrorPage;

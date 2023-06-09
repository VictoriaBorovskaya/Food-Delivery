import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchRestaurants } from 'redux/slices/restaurantsSlice';
import { useAppDispatch } from 'redux/store';
import HomePage from 'components/HomePage';
import RestaurantPage from 'components/RestaurantPage';
import CartPage from 'components/CartPage';
import ErrorPage from 'components/ErrorPage';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:slug" element={<RestaurantPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

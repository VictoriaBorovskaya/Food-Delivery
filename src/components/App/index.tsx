import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "components/HomePage";
import { useState, useEffect } from "react";
import { ReataurantsType } from "components/Scripts";
import axios from "axios";
import RestaurantPage from "components/RestaurantPage";

function App() {
  const [restaurants, setRestaurants] = useState<ReataurantsType[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://www.bit-by-bit.ru/api/student-projects/restaurants")
      .then(({ data }) => {
        setRestaurants(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage restaurants={restaurants} error={error} isLoaded={isLoaded} />
          }></Route>
        {restaurants.map((restaurant) => {
          return (
            <Route
              path={restaurant.slug}
              element={<RestaurantPage restaurant={restaurant} />}></Route>
          );
        })}
        {/* <Route path="/expenses" element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

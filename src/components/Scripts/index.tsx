export type ReataurantsType = {
  name: string;
  slug: string;
  phone: string;
  email: string;
  address: string;
  cuisine: string;
  image: string;
  openAt: string;
  closeAt: string;
  description: string;
  id: number;
};

export type FoodType = {
  id: string;
  restaurantId: string;
  name: string;
  image: string;
  description: string;
  price: string;
};

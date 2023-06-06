export const options = ['Pasta', 'Burger', 'Pizza', 'Dessert', 'Biryani', 'Rice', 'Butter-chicken'];

export const dishes = [
  'Итальянская кухня',
  'Индийская кухня',
  'Фастфуд',
  'Пицца',
  'Паста',
  'Бургеры',
  'Десерты',
  'Блюда из риса',
];

export const information = [
  'Пользовательское соглашение',
  'Контакты',
  'Доставка',
  'Вопросы и ответы',
  'Стать партнером',
  'Стать курьером',
];

export type User = {
  customerName: string;
  phone: string;
  email: string;
};

export type Address = {
  street: string;
  apartment: string;
  intercom: string;
  entrance: string;
  floor: string;
};

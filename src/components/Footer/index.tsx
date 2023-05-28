const Footer = () => {
  return (
    <div className="bg-neutral-100/70">
      <div className="max-w-7xl m-auto px-5 flex flex-col py-16">
        <p className="text-xl font-semibold text-center sm:text-start">В приложении еще удобнее</p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-5 pt-5">
          <button>
            <img
              src="https://avatars.mds.yandex.net/get-bunker/50064/763f8b02d2dcb86dc0a7f5c00609ce68261cd418/svg"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://avatars.mds.yandex.net/get-bunker/60661/56991f6060ab2c47ea80ddb75ab1a1358e0e58fc/svg"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://avatars.mds.yandex.net/get-bunker/998550/6570800137052ee111fb467b574f136878769ec3/orig"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl m-auto px-5 flex justify-between py-10 gap-5">
          <div className="hidden sm:flex flex-col gap-2">
            <p className="font-bold text-lg text-neutral-600 pb-5">Блюда и кухни</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Итальянская кухня</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Индийская кухня</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Фастфуд</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Пицца</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Паста</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Бургеры</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Десерты</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Блюда из риса</p>
          </div>
          <div className="flex flex-col text-start gap-2 w-full sm:text-end">
            <p className="font-bold text-lg text-neutral-600 pb-5">О компании</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">
              Пользовательское соглашение
            </p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Контакты</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Доставка</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Вопросы и ответы</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Стать партнером</p>
            <p className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-600">Стать курьером</p>
            <div className="flex text-end items-center gap-1 self-end pt-10 text-neutral-500 cursor-pointer hover:text-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p className="text-sm">Обратная связь</p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200">
          <p className="max-w-7xl m-auto p-5 text-neutral-500 text-sm">© 2018–2023 ООО «Food.Delivery»</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

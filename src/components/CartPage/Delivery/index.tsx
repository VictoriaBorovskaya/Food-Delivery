import { User, Address } from 'helpers';
import { ContactSVG } from './SVG';
import './Delivery.css';

type Props = {
  form: User;
  setForm: (form: User) => void;
  address: Address;
  setAddress: (address: Address) => void;
};

const Delivery = ({ form, setForm, address, setAddress }: Props) => {
  return (
    <div className="bg-white rounded-3xl p-3.5 flex flex-col gap-3 sm:p-8">
      <p className="text-xl sm:text-2xl font-bold">Условия доставки</p>
      <p className="text-sm text-neutral-500">*Доставка осуществляется только по Москве</p>
      <span className="flex items-center gap-2">
        <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.home.43bb9d03ab149cbcdd5f.svg" alt="" />
        <input
          name="street"
          value={address.street}
          onChange={(event) => setAddress({ ...address, street: event.target.value })}
          className="w-full delivery-input"
          placeholder="Введите улицу и дом"
        />
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between">
        <input
          name="apartment"
          value={address.apartment}
          onChange={(event) => setAddress({ ...address, apartment: event.target.value })}
          className="delivery-input"
          placeholder="Кв./офис"
        />
        <input
          name="intercom"
          value={address.intercom}
          onChange={(event) => setAddress({ ...address, intercom: event.target.value })}
          className="delivery-input"
          placeholder="Домофон"
        />
        <input
          name="entrance"
          value={address.entrance}
          onChange={(event) => setAddress({ ...address, entrance: event.target.value })}
          className="delivery-input"
          placeholder="Подъезд"
        />
        <input
          name="floor"
          value={address.floor}
          onChange={(event) => setAddress({ ...address, floor: event.target.value })}
          className="delivery-input"
          placeholder="Этаж"
        />
      </div>
      <div>
        <span className="flex items-center gap-2 text-lg font-medium">
          <ContactSVG />
          Контактные данные
        </span>
        <input
          name="customerName"
          type="text"
          value={form.customerName}
          onChange={(event) => setForm({ ...form, customerName: event.target.value })}
          className="w-full delivery-input my-3"
          placeholder="Имя и фамилия"
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-5">
          <input
            name="phone"
            pattern="\+?[0-9\s\-\(\)]+"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="delivery-input"
            placeholder="Телефон"
            required
          />
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="delivery-input"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <span className="flex items-center gap-2 font-medium mt-2">
        <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.clock.1d32ff950ae376e447b4.svg" alt="" />
        Время доставки 30-40 минут
      </span>
    </div>
  );
};

export default Delivery;

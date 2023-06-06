import cn from 'classnames';
import './Cart.css';

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  clearCart: () => void;
};

const ClearCartModal = ({ isOpenModal, setIsOpenModal, clearCart }: Props) => {
  return (
    <div
      className={cn('', {
        hidden: isOpenModal === false,
        'fixed top-0 left-0 right-0 bottom-0 bg-neutral-900/30 z-50 flex items-center justify-center':
          isOpenModal === true,
      })}>
      <div className="bg-white p-7 rounded-2xl w-96">
        <p className="text-2xl font-bold pb-5">Очистить корзину?</p>
        <div className="flex gap-5 justify-between pt-5">
          <button
            onClick={() => setIsOpenModal(false)}
            className="bg-neutral-200/70 hover:bg-neutral-200/100 clearCartModal-button">
            Оставить, как есть
          </button>
          <button onClick={() => clearCart()} className="bg-yellow-300 hover:bg-yellow-400 clearCartModal-button">
            Да, очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCartModal;

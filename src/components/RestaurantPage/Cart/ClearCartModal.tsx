type Props = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  clearCart: () => void;
};

const ClearCartModal = ({ isOpenModal, setIsOpenModal, clearCart }: Props) => {
  return (
    <div
      className={
        isOpenModal === false
          ? 'hidden'
          : 'fixed top-0 left-0 right-0 bottom-0 bg-neutral-900/30 z-50 flex items-center justify-center'
      }>
      <div className="bg-white p-7 rounded-2xl w-96">
        <p className="text-2xl font-bold pb-5">Очистить корзину?</p>
        <div className="flex gap-5 justify-between pt-5">
          <button
            onClick={() => setIsOpenModal(false)}
            className="bg-neutral-200/70 w-1/2 rounded-2xl font-medium hover:bg-neutral-200/100 duration-200 text-center text-lg p-2 leading-tight">
            Оставить, как есть
          </button>
          <button
            onClick={() => clearCart()}
            className="bg-yellow-300 w-1/2 rounded-2xl font-medium hover:bg-yellow-400 duration-200 text-center text-lg p-2 leading-tight">
            Да, очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCartModal;

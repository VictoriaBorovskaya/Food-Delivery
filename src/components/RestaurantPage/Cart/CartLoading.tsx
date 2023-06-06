import ContentLoader from 'react-content-loader';

const CartLoading = () => {
  return (
    <ContentLoader
      speed={2}
      width={387}
      height={839}
      viewBox="0 0 387 839"
      backgroundColor="#f3f3f3"
      foregroundColor="#e5e5e5">
      <rect x="0" y="0" rx="22" ry="22" width="387" height="839" />
    </ContentLoader>
  );
};

export default CartLoading;

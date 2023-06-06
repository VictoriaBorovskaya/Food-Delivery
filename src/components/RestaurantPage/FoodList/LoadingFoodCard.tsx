import ContentLoader from 'react-content-loader';

const LoadingFoodCard = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={343}
      viewBox="0 0 260 343"
      backgroundColor="#f3f3f3"
      foregroundColor="#e5e5e5">
      <rect x="0" y="0" rx="22" ry="22" width="100%" height="343" />
    </ContentLoader>
  );
};

export default LoadingFoodCard;

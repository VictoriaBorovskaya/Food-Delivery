import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={290}
      viewBox="0 0 280 290"
      backgroundColor="#f3f3f3"
      foregroundColor="#e5e5e5"
    >
      <rect x="0" y="0" rx="22" ry="22" width="280" height="190" />
      <rect x="0" y="196" rx="10" ry="10" width="280" height="25" />
      <rect x="0" y="227" rx="10" ry="10" width="200" height="20" />
      <circle cx="20" cy="270" r="20" />
      <rect x="8" y="264" rx="10" ry="10" width="265" height="25" />
    </ContentLoader>
  );
};

export default Loading;

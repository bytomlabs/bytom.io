import React from 'react';
import css from 'styled-components';
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader 
    height={255}
    width={392}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="-1" rx="0" ry="0" width="392" height="198" />
    <rect x="0" y="212" rx="0" ry="0" width="392" height="55" />
  </ContentLoader>
)


const Wrap = css.div`
  width: 392px;
  height: 100%;
`;

export default function CardLoading() {
  return (
    <Wrap>
      <MyLoader />
    </Wrap>
  )
}

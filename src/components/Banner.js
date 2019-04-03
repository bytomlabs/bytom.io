import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_banner from '../images/Banner-00@2x.png';


const Wrap = css.div`
  width: 100%;
  height: 560px;
  box-sizing: border-box;
  background: #000 url(${img_banner}) center top / cover no-repeat;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;
export default ({ children }) => (
  <Wrap>
    <Cont>
      {children}
    </Cont>
  </Wrap>
);


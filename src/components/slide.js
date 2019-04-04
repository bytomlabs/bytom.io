import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_banner from '../images/Banner-00@2x.png';

const Wrap = css.div`
  width: 100%;
  height: 560px;
  background: #000 url(${img_banner}) center top / cover no-repeat;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  h1{
    font-size: 56px;
    font-weight: bold;
    padding-top: 200px;
  }
  p{
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
  }
`;
const Slide = () => (
  <Wrap>
    <Cont>
      <h1>Bytom Blockchain</h1>
      <p>A digital asset layer protocol, is the <br/>infrastructure of asset Internet.</p>
    </Cont>
  </Wrap>
);

export default Slide;

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
  text-align: center;
  h1{
    font-size: 54px;
    font-weight: bold;
    padding-top: 165px;
    line-height: 72px;
    span{
      color: #257BF2;
    }
  }
  p{
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
    color: #b3b3b3;
    font-weight: 300;
    font-size: 20px;
    line-height: 36px;
  }
`;
const Slide = () => (
  <Wrap>
    <Cont>
      <h1>Embrace the <span>New era</span> of <br/> Bytom Blockchain</h1>
      <p>Create diverse assets and <br/> a programmable economy</p>
    </Cont>
  </Wrap>
);

export default Slide;

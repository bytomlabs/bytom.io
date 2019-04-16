import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_banner from '../images/Banner-00@2x.png';

const Wrap = css.div`
  width: 100%;
  height: 640px;
  box-sizing: border-box;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 0;
`;
const Img = css.img`
  width: 710px;
  height: 440px;
  background-color: #b3b3b3;
  display: inline-block;
  vertical-align: top;
`;
const Msg = css.div`
  display: inline-block;
  width: 500px;
  vertical-align: top;
  margin-left: 32px;
  h1{
    color: #000;
    font-size: 44px;
  }
  span{
    color: #035BD4;
  }
  p{
    font-size: 16px;
    font-weight: 400;
    color: #666;
    margin-top: 190px;
    line-height: 28px;
    font-weight: 400;
  }
`;
const SectionBytom = ({ info }) => (
  <Wrap>
    <Cont>
      <Img></Img>
      <Msg>
        <h1>{info.title} <br/><span>{info.subTitle}</span> {info.titleDes}</h1>
        <p>Bytom Blockchain Protocol is an interactive protocol of multiple byteassets. Heterogeneous byte-assets that operate in different forms on the Bytom Blockchain and atomic assets can be registered, exchanged, gambled and engaged in other more complicated and contract-based interoperations via Bytom.</p>
      </Msg>
    </Cont>
  </Wrap>
);

export default SectionBytom;

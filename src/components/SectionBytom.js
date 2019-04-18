import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_bytom from '../images/bytom.png';

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
    line-height: 64px;
  }
  span{
    color: #035BD4;
  }
  p{
    font-size: 16px;
    font-weight: 400;
    color: #666;
    margin-top: 56px;
    line-height: 28px;
    font-weight: 400;
  }
`;
const SectionBytom = ({ info }) => (
  <Wrap>
    <Cont>
      <Img src={img_bytom}></Img>
      <Msg>
        <h1>{info.title} <br/> {info.titleDes} <br/> <span>{info.subTitle}</span></h1>
        <p>{info.desc}</p>
      </Msg>
    </Cont>
  </Wrap>
);

export default SectionBytom;

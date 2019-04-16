import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';
import img_bg from '../images/bg-dev-banner.png';


const Wrap = css.div`
  width: 100%;
  height: 320px;
  box-sizing: border-box;
  background: url(${img_bg}) center / cover;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
  h1{
    color: #fff;
    line-height: 66px;
    font-size: 28px;
    font-weight: bold;
  }
`;
const Button = css(Link)`
  margin-top: 40px;
  width: 244px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  border: 1px solid #fff;
  &:hover{
    background-color: #fff;
    color: #000;
  }
`;
const SectionDev = () => (
  <Wrap>
    <Cont>
      <h1>Transfer Assets from <br/> Atomic World to Byteworld</h1>
      <Button to="/dev">Become a developer</Button>
    </Cont>
  </Wrap>
);

export default SectionDev;

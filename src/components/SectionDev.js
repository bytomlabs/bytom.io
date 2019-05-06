import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';
import img_bg from '../images/bg-dev-banner.png';


const Wrap = css.div`
  width: 100%;
  height: 320px;
  box-sizing: border-box;
  background: url(${img_bg}) center / cover;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;
const Cont = css.div`
  width: 1280px;;
  height: 100%;
  margin: 0 auto;
  padding: 70px 0;
  text-align: center;
  h1{
    color: #fff;
    line-height: 50px;
    font-size: 28px;
    font-weight: bold;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    padding: 30px 0;
    h1{
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
const Button = css(Link)`
  margin-top: 20px;
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
  @media (max-width: 640px) {
    width: 160px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    height: auto;
    border: 0.5px solid #fff;
    h1{
      font-size: 18px;
      line-height: 28px;
    }
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

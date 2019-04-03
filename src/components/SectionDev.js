import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';


const Wrap = css.div`
  width: 100%;
  height: 320px;
  box-sizing: border-box;
  background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
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
    font-size: 36px;
    font-weight: bold;
  }
`;
const Button = css(Link)`
  margin-top: 40px;
  width: 244px;
  height: 48px;
  background-color: #fff;
  line-height: 48px;
  font-size: 16px;
  text-align: center;
  color: #035BD4;
  font-weight: bold;
  display: inline-block;
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

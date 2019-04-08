import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';


const Wrap = css.div`
  width: 500px;
  height: 270px;
  background-color: #fff;
  padding: 25px 30px;
  position: relative;
  h2{
    font-size: 20px;
    color: #035BD4;
    line-height: 1em;
  }
  input{
    display: block;
    height: 50px;
    width: 100%;
    margin: 20px 0 25px 0;
    padding: 0 15px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
  }
  button{
    display: block;
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
  }
  p{
    color: #666;
    font-size: 14px !important;
    line-height: 26px !important;
    margin-top: 10px !important;
  }
`;
const ErrMsg = css.span`
  font-size: 12px;
  line-height: 20px;
  color: #E21919;
  margin-top: -20px;
  display: inline-block;
  position: absolute;
  top: 136px;
`;

export default function Faucet() {
  return (
    <Wrap>
      <h2>Wallet Address</h2>
      <input type="text"/>
      <ErrMsg>* Please input correct Bytom testnet address.</ErrMsg>
      <button>Get testnet 10 BTM for free</button>
      <p>
        Please input testnet address which is start from ‘tm’, here is Bytom Wallet official
        <a href="">download</a>
        and
        <a href="">instruction</a>
      </p>
    </Wrap>
  )
}

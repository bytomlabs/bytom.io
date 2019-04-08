import React from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 392px;
  height: 262px;
  background-color: #fff;
  img{
    width: 100%;
    height: 168px;
    display: inline-block;
  }
  h1{
    font-size: 24px;
    color: #1C1C1C;
    font-weight: bold;
    line-height: 1em;
    padding: 20px 20px 10px 20px;
  }
  p{
    font-size: 14px;
    color: #B3B3B3;
    padding: 0 20px;
  }
`;

export default function Card({ img, title, des }) {
  return (
    <Wrap>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{des}</p>
    </Wrap>
  )
}
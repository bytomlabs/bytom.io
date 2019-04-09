import React from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 392px;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.04);
  cursor: pointer;
  &:hover{
    box-shadow: 0px 2px 12px rgba(0,0,0,0.12);
    transition: all 0.3s;
    transform: translateY(-2px);
  }
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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 20px 20px 10px 20px;
  }
  p{
    font-size: 14px;
    color: #B3B3B3;
    padding: 0 20px;
    height: 16px;
    padding-bottom: 18px;
  }
`;

export default function Card({ img, title, des, style, exrta }) {
  return (
    <Wrap style={style}>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <p>{des}</p>
      { exrta }
    </Wrap>
  )
}

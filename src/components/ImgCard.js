import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';

const Wrap = css.div`
  width: 620px;
  height: 366px;
  position: relative;
  img{
    display: inline-block;
    width: 100%;
    height: 260px;
    background-color: #B3B3B3;
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    height: 270px;
    img{
      height: 146px !important;
    }
    margin-bottom: 20px;
  }
`;
const Cont = css.div`
  height: 104px;
  padding: 20px;
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 52px;
  display: flex;
  box-sizing: border-box;
  background-color: #fff;
  h1{
    display: inline-block;
    vertical-align: top;
    width: 152px;
    font-size: 20px;
  }
  p{
    display: inline-block;
    width: 350px;
    vertical-align: top;
    color: #666;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    display: -webkit-box;   
    overflow: hidden;   
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    display: block;
    height: 124px;
    left: 0;
    bottom:0;
    h1{
      font-size: 16px;
      margin-bottom: 10px;
    }
    p{
      width: auto;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export default function ImgCard({ title, img, des }) {
  return (
    <Wrap>
      <img src={img} alt=""/>
      <Cont>
        <h1>{title}</h1>
        <p>{des}</p>
      </Cont>
    </Wrap>
  )
}

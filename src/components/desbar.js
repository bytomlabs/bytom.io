import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 100%;
  background: #fff;
`;
const Cont = css.div`
  width: 1280px;;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Item = css.li`
  width: 33%;
  display: flex;
  float: left;
  padding: 30px 10px;
  box-sizing: border-box;
  @media (max-width: 640px) {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 0.5px solid #eae8e8;
  }
`;
const Img = css.img`
  width: 82px;
  height: 82px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
`;
const Msg = css.span`
  display: block;
  padding-right: 20px;
  h1{
    font-size: 20px;
    font-weight: bold;
    color: #000;
    line-height: 26px;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    color: #666;
    margin-top: 6px;
  }
`;
const DesBar = ({ features = [] }) => (
  <Wrap>
    <Cont>
      <ul className="clearfix">
      {
        features.map((item, index) => (
          <Item key={index}>
            <Img src={item.img} alt=""/>
            <Msg>
              <h1>{item.title}</h1>
              <p>{item.cont}</p>
            </Msg>
          </Item>
        ))
      }
      </ul>
    </Cont>
  </Wrap>
);

export default DesBar;

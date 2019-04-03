import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_banner from '../images/Banner-00@2x.png';

const descriptions = [
  {
    img: img_banner,
    title: 'Intelligent',
    cont: 'Consensus algorithm promotes AI techniques, calculation power actually using.'
  },
  {
    img: img_banner,
    title: 'Flexible',
    cont: 'Customize Your Smart contract, completely control assets, power the future of the econmy.'
  },
  {
    img: img_banner,
    title: 'Efficient',
    cont: 'Digital Asset Atomic Transfer, high concurrent exchange, adaptable to different business environments.'
  },
];

const Wrap = css.div`
  width: 100%;
  background: #fff;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  ul{
    padding: 30px 0;
  }
`;
const Item = css.li`
  width: 33%;
  display: block;
  float: left;
`;
const Img = css.img`
  width: 82px;
  height: 82px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
`;
const Msg = css.span`
  display: inline-block;
  vertical-align: top;
  width: 288px;
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
  }
`;
const DesBar = () => (
  <Wrap>
    <Cont>
      <ul className="clearfix">
      {
        descriptions.map((item, index) => (
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

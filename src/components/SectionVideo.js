import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import img_bg from '../images/bgv.png';

const list = [
  {
    img: img_bg,
    cont: 'Compatible with the UTXO',
  },
  {
    img: img_bg,
    cont: 'General address format'
  },
  {
    img: img_bg,
    cont: 'Asset naming using ODIN'
  },
  {
    img: img_bg,
    cont: 'Enhanced trading flexibility'
  },
  {
    img: img_bg,
    cont: 'Cross-chain & Side-chain'
  },
  {
    img: img_bg,
    cont: 'Friendly to AI ASIC-chips'
  },
  {
    img: img_bg,
    cont: 'Separate transaction signatures'
  },
  {
    img: img_bg,
    cont: 'Encryption standard compatible'
  },
];

const Wrap = css.div`
  width: 100%;
  height: 520px;
  padding: 100px 0;
  position: relative;
  background: #f8f8f8 url(${img_bg}) center top / cover no-repeat;
`;
const Bg = css.div`
  position: absolute;
  right: 50%;
  left: 0;
  height: 520px;
  margin-right: -290px;
  background-color: #fff;
`;
const Cont = css.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;
const Video = css.div`
  width: 604px;
  height: 342px;
  background-color: #666;
  position: absolute;
  top: 89px;
  right: 0;
`;
const Title = css.div`
  position: relative;
  color: #035BD4;
  font-size: 48px;
  font-weight: bold;
  top: 89px;
  line-height: 1em;
  span{
    color: #000;
    padding-top: 10px;
    display: inline-block;
  }
`;
const List = css.ul`
  position: absolute;
  width: 600px;
  top: 292px;
`;
const Item = css.li`
  width: 260px;
  float: left;
  font-size: 16px;
  color: #666;
  padding-left: 30px;
  margin: 6px 0;
  background: url(${(props) => props.img}) left center / 22px 22px no-repeat;
`;
const SectionVideo = () => (
  <Wrap>
    <Bg />
    <Cont>
      <Title>WHY <br /><span>BYTOM</span></Title>
      <List>
        {
          list.map((item, index) => (
            <Item img={item.img} key={index}>{item.cont}</Item>
          ))
        }
      </List>
      <Video />
    </Cont>
  </Wrap>
);

export default SectionVideo;

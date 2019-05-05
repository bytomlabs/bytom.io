import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';

import img_bg from '../images/bgv.png';
import img_video_bg from '../images/play.png';
// import media_bytom from '../images/bytom.v1.mp4';
const media_bytom = '//bytom.oss-cn-hongkong.aliyuncs.com/video/bytom.v1.mp4';


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
  @media (max-width: 640px) {
    padding: 30px 16px;
    height: auto;
    box-sizing: border-box;
  }
`;
const Bg = css.div`
  position: absolute;
  right: 50%;
  left: 0;
  height: 520px;
  margin-right: -290px;
  background-color: #fff;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Cont = css.div`
  width: 1280px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  @media (max-width: 640px) {
    width: 100%;
    div,p,ul,span{
      position: static !important;
    }
  }
`;
const Video = css.div`
  width: 604px;
  height: 342px;
  background-color: #666;
  position: absolute;
  top: 89px;
  right: 0;
  video{
    width: 100%;
    height: 100%;
    outline: none;
  }
  @media (max-width: 640px) {
    width: 100%;
    position: static;
    height: 194px;
  }
`;
const Title = css.div`
  position: relative;
  color: #035BD4;
  font-size: 44px;
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
  top: 310px;
  @media (max-width: 640px) {
    width: 100%;
    position: static;
    margin: 20px 0;
    li{
      width: 100%;
    }
  }
`;
const Item = css.li`
  width: 50%;
  float: left;
  font-size: 16px;
  color: #666;
  margin: 6px 0;
  font-weight: 300;
  &:hover{
    color: #000000;
    .blue_dot{
      background-color: #000;
    }
  }
  .blue_dot{
    display:inline-block;
    width:5px;
    height:5px;
    background:rgba(3,91,212,1);
    vertical-align: 4px;
    margin-right:10px;
    opacity:1;
  }
`;
const Desc = css.p`
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  position: absolute;
  top: 170px;
  width: 500px;
  @media (max-width: 640px) {
    width: 100%;
    margin: 20px 0;
  }
`;
const Line = css.span`
  display: inline-block;
  width: 180px;
  height: 1px;
  background-color: #B3B3B3;
  position: absolute;
  top: 280px;
  left: 0;
`;
const VideoPoster = css.div`
  width: 100%;
  height: 100%;
  background: url(${img_video_bg}) center / 100%;
`;

const SectionVideo = ({ info }) => {

  const [isVideoVisable, toggle] = useState(false);

  return (
    <Wrap>
      <Bg />
      <Cont>
        <Title>{info.title} <span>{info.subTitle}</span></Title>
        <Desc>{info.desc}</Desc>
        <Line />
        <List className="clearfix">
          {
            list.map((item, index) => (
              <Item img={item.img} key={index}>
              <span className="blue_dot"></span>
              {item.cont}
              </Item>
            ))
          }
        </List>
        <Video>
          {
            isVideoVisable ?
              <video autoPlay src={media_bytom} poster={img_video_bg} controls="controls"></video>
            : <VideoPoster onClick={() => toggle(true)} />
          }
        </Video>
      </Cont>
    </Wrap>
  );
};

export default SectionVideo;

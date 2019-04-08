import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Faucet from '../components/Faucet';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import ImgCard from '../components/ImgCard';

import img_dev from '../images/dev/dev.png';
import img_bg from '../images/wallet/bg.png';
import img_banner_bg from '../images/bgv.png';

const Btn = css.a`
  display: block;
  margin: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center; 
  border: 1px solid #666;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover{
    color: #fff;
    border: none;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
  }
`;
const techList = [
  {
    title: 'Equity',
    img: img_dev,
    des: 'Equity is a high level language for expressing Bytom’s smart contract, which is an interpreted language dedicated to demonstrate the Bytom multi-asset model’s contract.',
  },
  {
    title: 'Vapor',
    img: img_dev,
    des: 'Golang implemented sidechain for Bytom.The first link of Vapor  is the mainchain of Bytom, which will be slowly iterated in the following part. It will be connected with the mainchain of Bitcoin and Ethereum, and will become a project of universal side chain.',
  },
  {
    title: 'Tensority',
    img: img_dev,
    des: 'An ASIC-friendly Proof of Work Algorithm Based on Tensor.By adopting POW algorithm that is friendly to AI ASIC-chips, Bytom introduces matrix operations and convolution operations into hashing process of mining so that miners could be used for AI acceleration services after they are outdated. ',
  },
];

const toolsList = [
  {
    img: img_dev,
    title: 'Java SDK',
    des: 'February 9, 2019 5:29 PM',
  },
  {
    img: img_dev,
    title: 'Node.js SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'JS SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'PHP SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'Ruby SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'Python SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'Android SDK',
    des: '',
  },
  {
    img: img_dev,
    title: 'Mobile Wallet SDK',
    des: '',
  },
];

const bountyList = [
  {
    title: 'C++ SDK',
    img: img_dev,
    des: '3000 BTM+',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Kotlin SDK',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Swift SDK',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Distributed Identity System',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Collecting BMIP',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Chrome Extension Wallet',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Equity Contract',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
  {
    title: 'Equity IDE',
    img: img_dev,
    des: '',
    exrta: <Btn>Claim</Btn>
  },
];

const langTermList = [
  {
    title: 'Safety',
    img: img_dev,
    des: '500 BTM - 10,000 BTM',
    exrta: <Btn>Claim</Btn>,
  },
  {
    title: 'BMIP',
    img: img_dev,
    des: '20000 BTM+',
    exrta: <Btn>Claim</Btn>,
  },
  {
    title: 'Video Tutorials',
    img: img_dev,
    des: '4000 BTM+ / 20 minutes',
    exrta: <Btn>Claim</Btn>,
  },
  {
    title: 'Translate',
    img: img_dev,
    des: '100 BTM - 500 BTM / 1000',
    exrta: <Btn>Claim</Btn>,
  },
];

const Cont = css.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const BannerWrap = css.div`
  display: flex;
  padding: 145px 0;
  justify-content: space-between;
  align-items: center;
  img{
    width: 212px;
    height: 150px;
    display: inline-block;
  }
  div{
    color: #fff;
    flex: 1;
    margin-left: 32px;
    h1{
      font-size: 56px;
      font-weight: bold;
      line-height: 1em;
    }
    p{
      margin-top: 30px;
      font-size: 24px;
      font-weight: 300;
      line-height: 32px;
    }
  }
`;
const TechWrap = css.div`
  padding: 20px 0;
`;
const BountyWrap = css(TechWrap)`
  
`;
const TabsCont = css.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const DocumentBanner = css.div`
  width: 100%;
  height: 280px;
  background: url(${img_banner_bg}) center / 100% no-repeat;
  h1{
    text-align: center;
    color: #000;
    font-size: 36px;
    padding: 80px 0 30px 0;
  }
  a{
    display: block;
    width: 244px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
    border: 0;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
  }
`;
const SubTitle = css.h1`
  font-size: 36px;
  color: #282828;
  line-height: 1em;
  margin: 40px 0;
`;

const Document = () => (
  <DocumentBanner>
    <h1>Document for development</h1>
    <a href="">View more</a>
  </DocumentBanner>
);

const DevPage = () => (
  <Layout>
    <SEO title="Developer" />
    <Banner>
      <Cont>
        <BannerWrap>
          <img src={img_dev} alt=""/>
          <div>
            <h1>Bytom DEV</h1>
            <p>Bytom Testnet Faucet, get <br/> testnet 10 BTM for free.</p>
          </div>
          <Faucet />
        </BannerWrap>
      </Cont>
    </Banner>
    <Tabs
      tab={[
        <span><i className="iconfont github"></i>Tech & Tools</span>,
        <span><i className="iconfont github"></i>Bounty</span>,
      ]}
    >
      <TechWrap>
        <Cont>
          <SubTitle>Technology</SubTitle>
          <TabsCont>
            {
              techList.map((item, index) => <ImgCard key={index} {...item} />)
            }
          </TabsCont>
        </Cont>
        <Document />
        <Cont>
          <SubTitle>Development Tools</SubTitle>
          <TabsCont>
            {
              toolsList.map((item, index) => <Card style={{marginBottom: 40}} key={index} {...item} />)
            }
            <div style={{width: 392}}></div>
          </TabsCont>
        </Cont>
      </TechWrap>

      <BountyWrap>
        <Cont>
          <SubTitle>Minority Report</SubTitle>
          <TabsCont>
            {
              bountyList.map((item, index) => <Card style={{marginBottom: 40, width: 286}} key={index} {...item} />)
            }
          </TabsCont>
        </Cont>
        <Document />
        <Cont>
          <SubTitle>Long Term</SubTitle>
          <TabsCont>
            {
              langTermList.map((item, index) => <Card style={{marginBottom: 40, width: 286}} key={index} {...item} />)
            }
            <div style={{width: 392}}></div>
          </TabsCont>
        </Cont>
      </BountyWrap>
    </Tabs>
    
  </Layout>
)

export default DevPage;
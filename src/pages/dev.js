import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';

import _conf from '../conf/dev.conf';

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

let isMobile = false;
if(window){
  isMobile = document.documentElement.clientWidth <= 640;
}

const Cont = css.div`
  width: 1280px;;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
  }
`;
const BannerWrap = css.div`
  display: flex;
  padding: 145px 0;
  justify-content: space-between;
  align-items: center;
  div:first-child{
    color: #fff;
    flex: 1;
    h1{
      font-size: 54px;
      font-weight: bold;
      line-height: 1em;
    }
    p{
      margin-top: 30px;
      font-size: 20px;
      font-weight: 300;
      line-height: 32px;
      color: #B3B3B3;
    }
  }
  @media (max-width: 640px) {
    padding: 100px 16px;
    text-align: center;
    h1{
      font-size: 32px !important;
    }
    p{
      font-size: 14px !important;
    }
  }
`;
const TechWrap = css.div`
  padding: 20px 0;
`;
const BountyWrap = css(TechWrap)`
  &>p{
    color: #B3B3B3;
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
  }
`;
const TabsCont = css.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img{
    height: 260px;
  }
`;
const DocumentBanner = css.div`
  width: 100%;
  height: 280px;
  background: url(${img_banner_bg}) center / cover no-repeat;
  h1{
    text-align: center;
    color: #000;
    font-size: 28px;
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
  @media (max-width: 640px) {
    h1 {
      font-size: 24px;
    }
  }
`;
const SubTitle = css.h1`
  font-size: 28px;
  color: #282828;
  line-height: 1em;
  margin: 40px 0;
`;
const MobileCardWrap = css.div`
  display: flex;
  height: 114px;
  background-color: #fff;
  width: 100%;
  margin-bottom: 20px;
  box-shadow:0px 2px 4px rgba(0,0,0,0.04);
  img{
    width: 114px;
    height: 114px;
  }
  &>a{
    h1{
      color: #1c1c1c;
      font-size: 16px;
      line-height: 1.8em;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p{
      color: #b3b3b3;
      font-size: 12px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  &>a:last-child{
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
`;

const Document = () => (
  <DocumentBanner>
    <h1>Bytom Develop Document</h1>
    <a href={_conf.help}>View more</a>
  </DocumentBanner>
);

const MobileCard = ({title, img, link, des, exrta}) => (
  <MobileCardWrap>
    <a href={link}>
      <img src={img} alt=""/>
    </a>
    <a href={link}>
      <h1>{title}</h1>
      <p>{des}</p>
      {exrta}
    </a>
  </MobileCardWrap>
)

const DevPage = ({ location }) => (
  <Layout>
    <SEO title="Developer" />
    <Banner>
      <Cont>
        <BannerWrap>
          {/* <img src={img_dev} alt=""/> */}
          <div>
            <h1>Bytom Developer</h1>
            <p>Committed to development of <br/> Bytom blockchain ecosystem</p>
          </div>
          <Faucet />
        </BannerWrap>
      </Cont>
    </Banner>
    <Tabs
      tab={[
        <span>Tech & Tools</span>,
        <span>Bounties</span>,
      ]}
      defaultPanel={location.state && location.state.bounty ? 1 : 0}
    >
      <TechWrap>
        <Cont>
          <SubTitle>Technology</SubTitle>
          <TabsCont>
            {
              _conf.techList.map((item, index) => <ImgCard key={index} {...item} />)
            }
          </TabsCont>
        </Cont>
        <Document />
        <Cont>
          <SubTitle>Development Tools</SubTitle>
          <TabsCont>
            {
              _conf.toolsList.map((item, index) => (
                isMobile ? 
                  <MobileCard key={index} {...item} /> : 
                  <Card style={{width: 286, marginBottom: 40}} key={index} {...item} />
              ))
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
            _conf.bountyList.map((item, index) => (
              isMobile ? 
                <MobileCard key={index} {...item} /> : 
                <Card style={{width: 286, marginBottom: 40}} key={index} {...item} />
            ))
          }
          </TabsCont>
        </Cont>
        <Document />
        <Cont>
          <SubTitle>Long Term</SubTitle>
          <TabsCont>
            {
              _conf.langTermList.map((item, index) => (
                isMobile ? 
                  <MobileCard key={index} {...item} /> : 
                  <Card style={{width: 286, marginBottom: 40}} key={index} {...item} />
              ))
            }
            <div style={{width: 392}}></div>
          </TabsCont>
        </Cont>
      </BountyWrap>
    </Tabs>
    
  </Layout>
)

export default DevPage;
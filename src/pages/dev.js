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

const Cont = css.div`
  max-width: 1280px;
  margin: 0 auto;
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
  background: url(${img_banner_bg}) center / 100% no-repeat;
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
`;
const SubTitle = css.h1`
  font-size: 28px;
  color: #282828;
  line-height: 1em;
  margin: 40px 0;
`;

const Document = () => (
  <DocumentBanner>
    <h1>Bytom Develop Document</h1>
    <a href={_conf.help}>View more</a>
  </DocumentBanner>
);

const DevPage = () => (
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
              _conf.toolsList.map((item, index) => <Card style={{width: 286, marginBottom: 40}} key={index} {...item} />)
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
              _conf.bountyList.map((item, index) => <Card style={{marginBottom: 40, width: 286}} key={index} {...item} />)
            }
          </TabsCont>
        </Cont>
        <Document />
        <Cont>
          <SubTitle>Long Term</SubTitle>
          <TabsCont>
            {
              _conf.langTermList.map((item, index) => <Card style={{marginBottom: 40, width: 286}} key={index} {...item} />)
            }
            <div style={{width: 392}}></div>
          </TabsCont>
        </Cont>
      </BountyWrap>
    </Tabs>
    
  </Layout>
)

export default DevPage;
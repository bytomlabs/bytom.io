import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';
import device from 'current-device';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Tables from '../components/Table';
import Tabs from '../components/Tabs';
import Card from '../components/Card';

import _conf from '../conf/wallet.conf';

import img_banner from '../images/wallet/banner.png';
import img_desktop from '../images/wallet/desktop.png';
import img_bg from '../images/wallet/bg.png';
import img_logo from '../images/wallet/logo.png';
import img_step from '../images/wallet/step.png';
import img_sub_banner from '../images/wallet/bannerWallet.png';


const Title = css.h1`
  font-size: 54px;
  font-weight: bold;
  text-align: center;
  line-height: 1em;
  color: #fff;
  padding: 172px 0 72px 0;
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 1.5em;
    padding: 70px 30px 66px 30px;
  }
`;
const Img = css.img`
  display: block;
  width: 1028px;
  height: 262px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 16px;
    height: 88px;
  }
`;
const Wrap = css.div`
  width: 100%;
  height: auto;
  padding: 80px 0;
  background:  #fff url(${img_bg}) center top / cover no-repeat;
  @media (max-width: 640px) {
    padding: 0;
  }
`;
const Cont = css.div`
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
`;
const Download = css.div`
  display: flex;
  justify-content: space-between;
  &>img{
    width: 583px;
    height: 356px;
    box-shadow: 1px 1px 7px 0px #1c1c1c21;
  }
  &>div{
    width: 620px;
    height: 356px;
    h1{
      margin: 0;
      height: 50px;
      display: flex;
      line-height: 50px;
      align-content: center;
      font-size: 24px;
      font-weight: bold;
      color: #1c1c1c;
      span{
        color: #000;
        font-weight: 400;
      }
      img{
        width: 50px;
        height: 50px;
        margin-right: 12px;
        display: inline-block;
      }
    }
    table{
      @media (max-width: 640px) {
        display: none;
      }
    }
    p{
      font-size: 16px;
      color: #666;
      margin-top: 6px;
      line-height: 28px;
      font-weight: 400;
    }
    @media (max-width: 640px) {
      width: 100%;
      height: auto;
      h1{
        font-size: 18px;
      }
      p{
        margin: 12px 0;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    &>img{
      width: 100%;
      height: auto;
    }
  }
`;
const Table = css.table`
  box-sizing: border-box;
  width: 100%;
  i{
    font-size: 23px;
  }
  td:not(:first-child):not(:last-child){
    padding: 8px 4px;
  }
  td{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  tr td:nth-child(3){
    color: #B3B3B3;
  }
  tr td:nth-child(4){
    color: #B3B3B3;
    width: 100px;
  }
  a{
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #000;
    border: 1px solid #000;
    display: inline-block;
    text-decoration: none;
    box-sizing: border-box;
    &:hover{
      background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
      color: #fff;
      border-color: #3E8FFF;
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const Step = css.div`
  display: flex;
  margin-top: 40px;
  img{
    width: 180px;
    height: 187px;
    display: inline-block;
  }
  &>ul{
    flex: 1;
    display: flex;
    margin-left: 50px;
    justify-content: space-between;
    flex-direction: column;
    &>li{
      display: flex;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      &>span:first-child{
        width: 90px;
        display: inline-block;
        color: #000;
        font-weight: bold;
      }
      &>span:last-child{
        color: #666;
      }
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const SubBanner = css.div`
  background: url(${img_sub_banner}) center / cover no-repeat;
  width: 100%;
  height: 280px;
  margin-top: 76px;
  @media (max-width: 640px) {
    margin-top: 20px;
    height: 158px;
    background: url(${img_sub_banner}) 33% / cover no-repeat;
  }
`;
const CardWrap = css.div`
  width: 1280px;
  // height: 897px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>div{
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 16px 30px 16px;
    box-sizing: border-box;
    &>div{
      margin-top: 20px;
      width: 48%;
    }
    p{
      display: none;
    }
    img{
      height: auto;
    }
    h1{
      font-size: 12px;
      font-weight: bold;
      padding: 8px;
    }
  }
`;

const WalletPage = () => (
  <Layout>
    <SEO title="Wallet" />
    <Banner>
      <Title>Get started with Bytom Wallet</Title>
      <Img src={img_banner} />
    </Banner>
    <Wrap>
      <Cont>
        <Download>
          <img src={img_desktop} alt=""/>
          <div>
            <h1><img src={img_logo} alt=""/>Bytom Wallet<span>&nbsp;for Desktop</span></h1>
            <p>Bytom wallet is the official full-node wallet highly recommended for miner, developer, enterprise and personal user.</p>
            <Table>
              <tbody>
              {
                _conf.walletList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.icon}</td>
                    <td>{item.title}</td>
                    <td>{item.des}</td>
                    <td>{item.version}</td>
                    <td>{item.links[0] && <a href={item.links[0].href}>{item.links[0].title}</a>}</td>
                    <td><a href={item.links[1].href}>{item.links[1].title}</a></td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
          </div>
        </Download>
        <Tables data={_conf.historyVersions}></Tables>
        <Tables data={_conf.fileList}></Tables>
        <Step>
          <img src={img_step} alt=""/>
          <ul>
            <li>
              <span>STEP 1</span>
              <span>Make sure that you have last version of Bytom Full-node Wallet and have enough free space in destination disk.</span>
            </li>
            <li>
              <span>STEP 2</span>
              <span>
                Download object file and make sure you close Bytom Wallet software.
                <ol>
                  <li>-  For Windows users, replace object file in shortcut ‘%APPDATA%/Roaming/Bytom/data/core.db’  </li>
                  <li>-  For Mac users, replace object file in shortcut ‘~/Library/*Application Support/Bytom/data/core.db’</li>
                  <li>-  For Linux users, replace object file in shortcut ‘~/.bytom/data/core.db’</li>
                </ol>
              </span>
            </li>
            <li>
              <span>STEP 3</span>
              <span>Make sure that you set correct destination for datadir and replace object file to your downloaded bytom wallet folder.</span>
            </li>
          </ul>
        </Step>
      </Cont>
      <SubBanner />
      <Tabs
          tab={
            device.type === 'mobile' ? 
              [
                <span>Mobile</span>,
                <span>Browser Extension</span>,
                <span>Hardware</span>,
              ]
            : 
              [
                <span>Mobile Wallet</span>,
                <span>Browser Extension</span>,
                <span>Hardware Wallet</span>,
              ]
          }
        >
          <CardWrap>
            {
              _conf.mobileWalletList.map((item, index) => (
                <Card key={index} {...item} />
              ))
            }
          </CardWrap>
          <CardWrap>
            {
              _conf.browserWalletList.map((item, index) => (
                <Card key={index} {...item} />
              ))
            }
          </CardWrap>
          <CardWrap>
            {
              _conf.hardwareWalletList.map((item, index) => (
                <Card key={index} {...item} />
              ))
            }
          </CardWrap>
        </Tabs>
    </Wrap>
  </Layout>
)

export default WalletPage;
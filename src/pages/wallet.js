import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Tables from '../components/Table';
import Tabs from '../components/Tabs';

import img_banner from '../images/wallet/banner.png';
import img_desktop from '../images/wallet/desktop.png';
import img_bg from '../images/wallet/bg.png';
import img_logo from '../images/wallet/logo.png';
import img_step from '../images/wallet/step.png';
import img_sub_banner from '../images/wallet/bannerWallet.png';

const walletList = [
  {
    icon: img_logo,
    title: 'Bytom Wallet',
    des: 'for macOS',
    version: 'V 1.0.8',
    links: [
      null,
      {title: 'Download', href: ''}
    ]
  },
  {
    icon: img_logo,
    title: 'Bytom Wallet',
    des: 'for Wins',
    version: 'V 1.0.8',
    links: [
      {title: 'Win32', href: ''},
      {title: 'Win64', href: ''},
    ]
  },
  {
    icon: img_logo,
    title: 'Bytom Wallet',
    des: 'for Linux',
    version: 'V 1.0.8',
    links: [
      {title: 'Linux32', href: ''},
      {title: 'Linux64', href: ''},
    ]
  },
  {
    icon: img_logo,
    title: 'Source Code',
    des: '',
    version: '',
    links: [
      {title: 'zip', href: ''},
      {title: 'tar.gz', href: ''},
    ]
  },
]
const historyVersions = {
  title: ['Versions', 'Files', 'Checksums(MD5)'],
  data: [
    ['Bytom Wallet for macOS v1.0.1', 'bytom-1.0.1-windows_386.zip', 'd92422537fb52ddfdd1470adc067acd5'],
    ['Bytom Wallet for macOS v1.0.1', 'bytom-1.0.1-windows_386.zip', 'd92422537fb52ddfdd1470adc067acd5'],
    ['Bytom Wallet for macOS v1.0.1', 'bytom-1.0.1-windows_386.zip', 'd92422537fb52ddfdd1470adc067acd5'],
    ['Bytom Wallet for macOS v1.0.1', 'bytom-1.0.1-windows_386.zip', 'd92422537fb52ddfdd1470adc067acd5'],
    ['Bytom Wallet for macOS v1.0.1', 'bytom-1.0.1-windows_386.zip', 'd92422537fb52ddfdd1470adc067acd5'],
  ],
  footer: <a href="More versions">More versions &gt;&gt;</a>
};
const fileList = {
  title: ['File', 'Height', 'Size', 'Checksums(MD5)', 'Last update', 'Link'],
  data: [
    ['122345-Update.zip', '12345', '175.87 MB', 'b04adb6bbf5034c2f4ec3c49250009f9', '2018-05-01 05:56:47 (GMT+8)', <a href="/">Download</a>],
  ],
};


const Title = css.h1`
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  line-height: 1em;
  color: #fff;
  padding: 150px 0 92px 0;
`;
const Img = css.img`
  display: block;
  width: 1028px;
  height: 262px;
  margin: 0 auto;
`;
const Wrap = css.div`
  width: 100%;
  height: auto;
  padding: 80px 0;
  background:  #fff url(${img_bg}) center top / cover no-repeat;
`;
const Cont = css.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Download = css.div`
  display: flex;
  justify-content: space-between;
  &>img{
    width: 583px;
    height: 356px;
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
    p{
      font-size: 16px;
      color: #666;
      margin-top: 6px;
      line-height: 28px;
      font-weight: 400;
    }
  }
`;
const Table = css.table`
  box-sizing: border-box;
  width: 100%;
  img{
    display: inline-block;
    width: 23px;
    height: 23px;
    vertical-align: -5px;
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
`;
const SubBanner = css.div`
  background: url(${img_sub_banner}) center / cover no-repeat;
  width: 100%;
  height: 280px;
  margin-top: 76px;
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
                walletList.map((item, index) => (
                  <tr key={index}>
                    <td><img src={item.icon} alt=""/></td>
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
        <Tables data={historyVersions}></Tables>
        <Tables data={fileList}></Tables>
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
            [
              <span><i className="iconfont github"></i>Mobile Wallet</span>,
              <span><i className="iconfont github"></i>Browser Extension</span>,
              <span><i className="iconfont github"></i>Hardware Wallet</span>,
            ]
          }
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Tabs>
    </Wrap>
  </Layout>
)

export default WalletPage

import React from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import Banner from '../components/Banner';

import icon_linkedin from '../images/team/Logo-25-linkedin@2x(15).png';
import icon_email from '../images/team/Logo-25-email@2x(1).png';
import img_banner from '../images/team/banner.png';

import _conf from '../conf/team.conf';

const Banner = css.div`
  width: 100%;
  height: 480px;
  background: url(${img_banner}) center / cover no-repeat;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 640px) {
    height: 240px;
  }
`;
const Cont = css.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
  }
`;
const Head = css.div`
  width: 100%;
  height: 268px;
  position: absolute;
  bottom: -72px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.04);
  h1{
    text-align: center;
    color: #000;
    padding: 60px 0 20px;
    span{
      color: #035bd4;
    }
  }
  p{
    color: #000;
    font-size: 20px;
    line-height: 36px;
    font-weight: 400;
    text-align: center;
    opacity: .5;
    padding: 0 300px;
  }
  @media (max-width: 640px) {
    width: auto;
    height: 192px;
    bottom: -40px;
    right: 16px;
    left: 16px;
    h1{
      font-size: 24px;
      padding: 40px 0 20px;
    }
    p{
      font-size: 14px;
      line-height: 24px;
      padding: 0 20px;
    }
  }
`;
const ContWrap = css.div`
  width: 100%;
  padding: 72px 0 30px;
  @media (max-width: 640px) {
    padding: 36px 0 15px;
  }
`;
const Section = css.div`
  width: 100%;
  background-color: #fff;
  &:nth-child(2n+1){
    background-color: #f8f8f8;
  }
  ${Cont}>ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &>li{
      text-align: center;
      width: 286px;
      margin-bottom: 20px;
      &>img{
        width: 100%;
        height: 260px;
      }
      p{
        font-size: 16px;
        font-weight: 400;
        color: #222;
        padding: 10px;
      }
      ul{
        display: flex;
        justify-content: center;
        img{
          width: 25px;
          height: 25px;
          margin: 0 10px;
        }
      }
      @media (max-width: 640px) {
        width: 48%;
        &>img{
          width: 100%;
          height: auto;
        }
        p{
          font-size: 13px;
        }
        ul{
          display: none;
        }
      }
    }
  }
`;
const Title = css.h2`
  font-size: 28px;
  color: #282828;
  font-weight: bold;
  padding: 60px 0 40px;
  @media (max-width: 640px) {
    font-size: 18px;
    padding: 30px 0 20px;
  }
`;
const Name = css.h3`
  font-size: 18px;
  color: #000;
  line-height: 1em;
  padding-top: 20px;
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

export default function Team() {
  return (
    <Layout light>
      <SEO title="Team" />
      <Banner>
        <Cont style={{position: 'relative'}}>
          <Head>
            <h1>Meet <span>our team</span></h1>
            <p>Bytom team are  experienced blockchain enthusiasts in tech, marketing and operation. In blockchain we trust!</p>
          </Head>
        </Cont>
      </Banner>
      <ContWrap>
        {
          _conf.data.map((item, index) => (
            <Section key={index}>
              <Cont>
                <Title>{_conf.title[index]}</Title>
                  <ul>
                    {
                      item.map((block, blockIndex) => (
                        <li key={blockIndex}>
                          {block.img && <img src={block.img} alt=""/>}
                          {block.name && <Name>{block.name}</Name>}
                          {block.position && <p>{block.position}</p>}
                          {/* <ul>
                            {
                              block.contact && block.contact.map((network, networkIndex) => (
                                <li key={networkIndex}>
                                {
                                  network.type === 'email' ?
                                    <a target="_blank" href={`mailto:${network.link}`}><img src={icon_email} alt=""/></a>
                                  : <a target="_blank" href={network.link}><img src={icon_linkedin} alt=""/></a>
                                }
                                </li>
                              ))
                            }
                          </ul> */}
                        </li>
                      ))
                    }
                  </ul>
              </Cont>
            </Section>
          ))
        }
      </ContWrap>
    </Layout>
  )
};
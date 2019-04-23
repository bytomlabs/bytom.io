import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Follows from '../components/Follows';

const links = [
  {
    title: 'Links',
    list: [
      {title: 'Wallet', href: '/wallet'},
      {title: 'Explorer', href: 'http://blockmeta.com/'},
      {title: 'Blog', href: '/blog/'},
      // {title: 'Forum', href: 'https://forum.bytom.io/'},
    ]
  },
  {
    title: 'Developer',
    list: [
      {title: 'GitHub', href: 'https://github.com/Bytom/bytom'},
      {title: 'Wiki', href: 'https://docs.bytom.io/'},
      {title: 'Tools', href: '/dev/'},
      {title: 'Bounty', href: '/dev', state: {bounty: true}},
    ]
  },
  {
    title: 'About',
    list: [
      // {title: 'About', href: '/'},
      {title: 'Team', href: '/', disable: true},
      {title: 'Ecosystem', href: '/ecosystem'},
      {title: 'Join', href: '/', disable: true},
      {title: 'Bytom logo', href: 'http://bytom.oss-cn-hongkong.aliyuncs.com/res/Logo_Bytom_v2.1.zip'},
    ]
  },
  {
    title: 'Contact',
    list: [
      {title: 'E-Mail: contact@bytom.io', href: 'mailto:contact@bytom.io'},
      {title: 'Website: bytom.io', href: '/'},
    ]
  },
];

const Wrap = css.div`
  width: 100%;
  height: 305px;
  box-sizing: border-box;
  background-color: #1C1C1C;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 305px;
  margin: 0 auto;
  display: flex;
  padding: 60px 0;
`;
const Item = css.div`
  width: 20%;
  h2{
    color: #035BD4;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  ul li{
    font-size: 14px;
    margin: 16px 0;
    span{
      color: rgba(255, 255, 255, 0.4);
      cursor: not-allowed;
    }
    a{
      color: #fff;
    }
  }
`;
const Copy = css.div`
  background-color: #000;
  color: #666;
  font-size: 12px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  font-weight: 400;
`;
const Follow = css.div`
  display: flex;
  height: 34px;
  line-height: 34px;
  input{
    flex: 1;
    padding: 0 10px;
    border: 0;
    outline: 0;
  }
  button{
    width: 90px;
    display: inline-block;
    height: 34px;
    background-color: #035BD4;
    color: #fff;
    font-size: 12px;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`;
const Msg = css.div`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.err ? '#E21919' : '#fff'};
`;

const Footer = ({ siteTitle }) => {

  const [email, handleChange] = useState('');
  const [isSubscribed, toggleSubscribe] = useState(false);
  const [isErr, toggleError] = useState(false);

  const handleSubscribe = () => {
    const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    if(pattern.test(email)){
      addToMailchimp(email, {
        URL: window.location.href
      }).then((data) => {
        toggleSubscribe(true);
        handleChange('');
      }).catch(err => {
        console.log(err);
      })
      toggleError(false);
    } else {
      toggleError(true);
      toggleSubscribe(false);
    }
  }

  const Links = ({ href, title, state={} }) => {
    const pattern = /^http/;
    return pattern.test(href) ? 
        <a target="_blank" href={href || '/'}>{title}</a> 
      : /^\//.test(href) ? <Link state={state} to={href}>{title}</Link> : <a>{title}</a>;
  }

  return (
    <>
      <Wrap>
        <Cont>
          {
            links.map((item, index) => (
              <Item key={index}>
                <h2>{item.title}</h2>
                <ul>
                  {
                    item.list.map((sitem, sindex) => (
                      <li key={sindex}>
                      {
                        sitem.disable ? 
                          <span>{sitem.title}</span>
                        : <Links {...sitem} />
                      }
                      </li>
                    ))
                  }
                </ul>
              </Item>
            ))
          }
          <Item>
            <h2>Follow us</h2>
            <Follow>
              <input value={email} onChange={(e) => handleChange(e.target.value)} type="email"/>
              <button onClick={handleSubscribe}>Subscribe</button>
            </Follow>
            <Follows />
            { isSubscribed && <Msg>* Thanks for your subscrition.</Msg>}
            { isErr && <Msg err>* Please input correct mailbox format.</Msg>}
          </Item>
        </Cont>
      </Wrap>
      <Copy>Copyright ©2019 bytom.io</Copy>
    </>
  )
};

export default Footer;

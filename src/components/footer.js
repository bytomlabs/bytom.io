import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';

import Follows from '../components/Follows';

const links = [
  {
    title: 'Links',
    list: [
      {title: 'Wallet', href: '/wallet'},
      {title: 'Explorer', href: 'http://blockmeta.com/'},
      {title: 'Blog', href: '/blog/'},
      {title: 'Forum', href: 'https://forum.bytom.io/'},
    ]
  },
  {
    title: 'Developer',
    list: [
      {title: 'GitHub', href: 'https://github.com/Bytom/'},
      {title: 'Wiki', href: 'https://docs.bytom.io/'},
      {title: 'Tools', href: '/dev/'},
      {title: 'Bounty', href: '/bounty/'},
    ]
  },
  {
    title: 'About',
    list: [
      {title: 'About', href: '/'},
      {title: 'Team', href: '/'},
      {title: 'Ecosystem', href: '/ecosystem'},
      {title: 'Join', href: '/'},
    ]
  },
  {
    title: 'Contact',
    list: [
      {title: 'E-Mail: contact@bytom.io'},
      {title: 'Website: bytom.io', href: 'https://bytom.io'},
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
  }
`;

const Footer = ({ siteTitle }) => (
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
                      <a href={sitem.href || '/'}>{sitem.title}</a>
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
            <input type="text"/>
            <button>Subscribe</button>
          </Follow>
          <Follows />
        </Item>
      </Cont>
    </Wrap>
    <Copy>Copyright ©2019 bytom.io</Copy>
  </>
);

export default Footer;

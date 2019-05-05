import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';
import _conf from '../conf/config'

import img_logo from '../images/logo.png';
import img_m_menu from '../images/m.menu.png';

const Wrap = css.div`
  width: 100%;
  height: 80px;
  background-color: #000;
  @media (max-width: 640px) {
    height: 60px;
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
    position: relative;
  }
`;
const Logo = css(Link)`
  display: inline-block;
  width: 130px;
  height: 100%;
  background: url(${img_logo}) center left / 130px no-repeat;
`;

const Nav = css.ul`
  list-style: none;
  display: inline-block;
  vertical-align: top;
  margin-left: 40px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const NavItem = css.ul`
  float: left;
  font-size: 16px;
  padding: 0 20px;
  line-height: 80px;
  a{
    color: #fff;
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
    }
  }
`;
const Toolbar = css.div`
  display: block;
  float: right;
  width: 60px;
  height: 100%;
  line-height: 80px;
  @media (max-width: 640px) {
    line-height: 60px;
  }
`;
const Github = css.a`
  font-size: 23px !important;
  color: #666;
  width: 20px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
  @media (max-width: 640px) {
    color: #fff;
  }
`;
const Lang = css(Github)`
  margin-left: 20px;
`;
const MobileNav = css.ul`
  list-style: none;
  position: absolute;
  top: 60px;
  // right: ${props => props.active ? 0 : -100}px;
  ${props => props.active ? 'right: 0;' : 'display: none;'}
  width: 100px;
  transition: all 0.3s ease-out;
`;
const MobileNavItem = css.li`
  font-size: 13px;
  line-height: 30px;
  height: 30px;
  background-color: #000;
  cursor: pointer;
  a{
    color: #fff;
    display: block;
    padding: 0 10px;
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
      background-color: #141414;
    }
  }
  @media (min-width: 640px) {
    display: none;
  }
`;
const MobileMenuToggle = css.span`
  display: inline-block;
  width: 23px;
  height: 60px;
  vertical-align: top;
  margin-left: 15px;
  background: url(${img_m_menu}) center / 100% no-repeat;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Header = ({ siteTitle }) => {

  const [menuStatus, toggleMobileMenu] = useState(false);

  return (
    <Wrap>
      <Cont className="clearfix">
        <Logo to="/" />
        <Nav>
          {
            _conf.nav.map((item, index) => (
              <NavItem key={index}>
                {
                  /^http/.test(item.href) ?
                    <a target="_blank" href={item.href}>{item.name}</a>
                  : <Link activeClassName="active" to={item.href}>{item.name}</Link>
                }
              </NavItem>
            ))
          }
        </Nav>
        <MobileNav active={menuStatus}>
          {
            _conf.nav.map((item, index) => (
              <MobileNavItem key={index}>
                {
                  /^http/.test(item.href) ?
                    <a target="_blank" href={item.href}>{item.name}</a>
                  : <Link activeClassName="active" to={item.href}>{item.name}</Link>
                }
              </MobileNavItem>
            ))
          }
        </MobileNav>
        <Toolbar>
          <Github target="_blank" href="https://github.com/Bytom/bytom" className="iconfont github" />
          {/* <Lang className="iconfont lang" /> */}
          <MobileMenuToggle onClick={() => toggleMobileMenu(!menuStatus)} />
        </Toolbar>
      </Cont>
    </Wrap>
  );
};

export default Header;

import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';
import confData from '../conf/config';
import img_logo from '../images/logo.png';

const Wrap = css.div`
  width: 100%;
  height: 80px;
  background-color: #000;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
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
  width: 100px;
  height: 80px;
  line-height: 80px;
`;
const Github = css.div`
  font-size: 16px;
  color: #666;
  width: 20px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
`;
const Lang = css(Github)`
  margin-left: 20px;
`;

const Header = ({ siteTitle }) => (
  <Wrap>
    <Cont className="clearfix">
      <Logo to="/" />
      <Nav>
        {confData.nav.map((item,index) => {
          return (
            <NavItem key={index}><Link to={item.href} activeClassName="active">{item.name}</Link></NavItem>
          )
        })}
      </Nav>
      <Toolbar>
        <Github className="iconfont github" />
        <Lang className="iconfont lang" />
      </Toolbar>
    </Cont>
  </Wrap>
);

export default Header;

import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 1280px;;
  margin: 0 auto;
`;
const Cont = css.div`
  margin: 0 auto;
  background-color: #f8f8f8;
`;
const Head = css.ul`
  width: 100%;
  height: 72px;
  background-color: #fff;
  line-height: 72px;
`;
const Item = css.li`
  float: left;
  margin-right: 20px;
  padding: 0 20px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.isCur ? '#035BD4 ' : '#fff '};
  height: 72px;
  transition:all .4s;
  box-sizing: border-box;
  i{
    margin-right: 8px;
  }
`;
export default function ({ tab, children, defaultPanel = 0 }) {
  const [ curTabs, changeTabs ] = useState(defaultPanel);
  return (
    <>
      <Head>
        <Wrap>
          {
            tab.map((item, index) => (
              <Item isCur={index === +curTabs} onClick={() => changeTabs(index)} key={index}>{item}</Item>
            ))
          }
        </Wrap>
      </Head>
      <Cont>
        {children[curTabs] || children}
      </Cont>
    </>
  )
};


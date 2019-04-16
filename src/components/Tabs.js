import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';

const Wrap = css.div`
  max-width: 1280px;
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
  border-bottom: ${(props) => props.isCur ? '3px ' : '0'} solid #035BD4;
  height: 72px;
  box-sizing: border-box;
  i{
    margin-right: 8px;
  }
`;
export default function ({ tab, children }) {
  const [ curTabs, changeTabs ] = useState(0);
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


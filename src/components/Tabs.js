import { Link } from 'gatsby';
import React, { useState } from 'react';
import css from 'styled-components';

const Wrap = css.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Cont = css.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  background-color: #f8f8f8;
`;
const Head = css.ul`
  width: 100%;
  height: 72px;
  background-color: #fff;
  line-height: 72px;
  li{
    float: left;
    margin-right: 20px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    i{
      margin-right: 8px;
    }
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
              <li onClick={() => changeTabs(index)} key={index}>{item}</li>
            ))
          }
        </Wrap>
      </Head>
      <Cont>
        <Wrap>
          {children[curTabs]}
        </Wrap>
      </Cont>
    </>
  )
};


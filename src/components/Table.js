import { Link } from 'gatsby';
import React from 'react';
import css from 'styled-components';


const Table = css.table`
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.04);
  td{
    height: 48px;
    line-height: 48px;
    box-sizing: border-box;
    &:first-child{
      padding-left: 60px;
    }
    &:last-child{
      padding-right: 60px;
    }
  }
  tr{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
  tr:nth-child(2n+2){
    background-color: #f8f8f8;
  }
  thead{
    tr{
      background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
      color: #fff;
    }
  }
`;
const Footer = css.div`
  height: 60px;
  line-height: 60px;
  text-align: right;
  font-size: 16px;
  border-bottom: 1px solid #E3E3E3;
`;
export default ({ data }) => (
  <>
    <Table>
      {
        data.title && 
          <thead>
            <tr>
            {
              data.title.map((item, index) => (
                <td key={index}>{item}</td>
              ))
            }
            </tr>
          </thead>
      }
      <tbody>
        {
          data.data.map((item, index) => (
            <tr key={index}>
              {
                item.map((sitem, sindex) => (
                  <td key={sindex}>{sitem}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </Table>
    {
      data.footer && <Footer>{data.footer}</Footer>
    }
  </>
);


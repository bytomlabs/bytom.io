import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import css from 'styled-components';

import Card from '../components/Card';
import _conf from '../conf/config';
import ajax from 'axios';
import { format } from 'date-fns';

const Wrap = css.div`
  width: 100%;
  box-sizing: border-box;
`;
const Cont = css.div`
  width: 1280px;
  margin: 0 auto;
  padding: 60px 0 80px;
  &>h1{
    color: #000;
    font-size: 28px;
    font-weight: bold;
    a{
      font-size: 16px;
      color: #035BD4;
      float: right;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 16px !important;
    &>h1{
      padding-bottom: 20px;
      font-size: 24px;
      a{
        line-height: 2em;
        font-size: 12px;
      }
    }
  }
`;
const CardWrap = css.div`
  width: 1280px;;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>div{
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    &>div{
      height: auto !important;
      margin-top: 20px !important;
    }
    &>div:nth-child(n+${props => props.isLight ? 11 : 4}){
      display: none;
    }
    &>div:first-child{
      margin-top: 0 !important;
    }
    h1{
      font-size: 15px !important;
      padding: 12px 12px 8px 12px !important;
    }
    p{
      font-size: 12px;
      height: 24px;
      padding: 0 12px;
    }
  }
`;
const More = css.div`
  text-align: right;
  padding: 20px 0 80px;
  @media (max-width: 640px) {
    padding: 30px 0 0;
  }
`;

const getTimes = times => {
  let result = '';
  try {
    result = format(new Date(+times), 'MMM Do, YYYY');
  } catch (err) {
    console.log(err);
  }
  return result;
};

const Trends = function({ light = false, style = {} }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const page_size = light ? 24 : 6;
      const {
        data: {
          data: { list },
        },
      } = await ajax.get(_conf.api.news, { params: { page_size, lang: 'en' } });
      setNews(list);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {}
  }, []);
  if (loading) {
    return (
      <Cont style={style}>
        <CardWrap style={{ paddingBottom: 40 }}>
          {new Array(6).fill(0).map((item, index) => (
            <Card key={index} loading />
          ))}
        </CardWrap>
      </Cont>
    );
  }

  return (
    <Wrap>
      <Cont style={style}>
        {!light && (
          <h1>
            Trends <Link to="/blog">View more &gt;&gt;</Link>
          </h1>
        )}
        <CardWrap isLight={light}>
          {news.map((item, index) => (
            <Card
              style={{ height: 255 }}
              key={item.id}
              link={item.link}
              img={item.image}
              title={item.title}
              des={getTimes(item.post_time)}
            />
          ))}
        </CardWrap>
        {light && (
          <More>
            <a target="_blank" href="https://medium.com/@Bytom_Official">
              Go to medium &gt;&gt;
            </a>
          </More>
        )}
      </Cont>
    </Wrap>
  );
};

export default Trends;

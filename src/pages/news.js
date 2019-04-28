import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';
import axios from 'axios';
import Card from '../components/Card';
import _conf from '../conf/config';

import Layout from '../components/layout';
import SEO from '../components/seo';


const Cont = css.div`
  max-width: 1280px;
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
`;
const Loading = css.div`
  width: 100%;
  height: 550px;
  text-align: center;
  line-height: 550px;
  &:after{
    content: 'loading';
    display: inline-block;
    width: 20px;
    height: 20px;
  }
`;
const CardWrap = css.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>div{
    margin-top: 40px;
  }
`;

export default function Blog({ style = {} }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const {
        data: {
          data
        },
      } = await axios.get(_conf.api.eventsList);
      setNews(data);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {}
  }, []);
  if (loading) {
    return (
      <CardWrap style={{ paddingBottom: 40 }}>
        {new Array(6).fill(0).map((item, index) => (
          <Card key={index} loading />
        ))}
      </CardWrap>
    );
  }

  const newsList = news.map((item, index) => (
    <Card
      style={{ height: 255 }}
      key={item.id}
      link={`/detail?id=${item.slug}`}
      img={item.cover}
      title={item.title}
      des={item.custom_description}
    />
  ));
  if(newsList.length % 3 === 2){
    newsList.push(<div key="empty" style={{width: 392}}></div>)
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Cont style={style}>
        <CardWrap>
          {newsList}
        </CardWrap>
      </Cont>
    </Layout>
  );
};
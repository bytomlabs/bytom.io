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
const More = css.div`
  text-align: right;
  padding: 20px 0 80px;
`;

const getTimes = (times) => {
  let result = '';
  try{
    result = format(new Date(+times), 'MMM Do, YYYY')
  } catch(err) {
    console.log(err);
  }
  return result;
}

const Trends = function ({ light=false, style={} }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const page_size = light ? 24 : 6;
      const { data: { data: { list }}} = await ajax.get(_conf.api.news, { params: { page_size, lang: 'en'} });
      setNews(list);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {
      
    }
  }, []);
  if(loading) {
    return <CardWrap style={{paddingBottom: 40}}>{new Array(6).fill(0).map((item, index) => <Card key={index} loading />)}</CardWrap>;
  }

  return (
    <Wrap>
      <Cont style={style}>
        { !light && <h1>Trends <Link to="/trends">View more &gt;&gt;</Link></h1>}
        <CardWrap>
          {
            news.map((item, index) => (
              <Card style={{ height: 255 }} key={item.id} link={item.link} img={item.image} title={item.title} des={getTimes(item.post_time)} />
            ))
          }
        </CardWrap>
        { light && <More><a target="_blank" href="https://medium.com/@Bytom_Official">Go to medium &gt;&gt;</a></More> }
      </Cont>
    </Wrap>
  );
};

export default Trends;

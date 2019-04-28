import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'gatsby';
import css from 'styled-components';
import axios from 'axios';
import Card from '../components/Card';
import _conf from '../conf/config';
import qs from 'query-string';

import Layout from '../components/layout';
import SEO from '../components/seo';


const Cont = css.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 0 80px;
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
const Title = css.h1`
  text-align: center;
  font-size: 32px;
  color: #000;
`;
const Content = css.div`
  margin: 50px 0;
  img{
    margin: 0 auto;
    display: block;
    width: 100%;
  }
`;

export default function Detail({ style = {}, location }) {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const slug = qs.parse(location.search);
      console.log(slug)
      const {
        data: {
          data
        },
      } = await axios.get(`${_conf.api.eventsDetail}${slug.id}`);
      setDetail(data);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {}
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Cont style={style}>
        <Title>{detail.title}</Title>
        <Content dangerouslySetInnerHTML={{__html: detail.body_html}}></Content>
      </Cont>
    </Layout>
  );
};
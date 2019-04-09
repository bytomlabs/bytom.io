import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Slide from '../components/slide';
import DesBar from '../components/desbar';
import SectionVideo from '../components/SectionVideo';
import SectionBytom from '../components/SectionBytom';
import SectionDev from '../components/SectionDev';
import Trends from '../components/Trends';

import _conf from '../conf/home.conf';

console.log(_conf.features)
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bytom`, `btm`, `比原`, `比原链`]} />
    <Slide></Slide>
    <DesBar features={_conf.features} />
    <SectionVideo></SectionVideo>
    <SectionBytom></SectionBytom>
    <SectionDev></SectionDev>
    {/* <Trends></Trends> */}
  </Layout>
)

export default IndexPage

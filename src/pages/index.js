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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bytom`, `btm`, `比原`, `比原链`]} />
    <Slide></Slide>
    <DesBar />
    <SectionVideo></SectionVideo>
    <SectionBytom></SectionBytom>
    <SectionDev></SectionDev>
    {/* <Trends></Trends> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

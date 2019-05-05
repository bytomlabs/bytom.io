import React from 'react';
import css from 'styled-components';
import { Link } from 'gatsby';

const Btn = css.a`
  display: block;
  margin: 3px 20px 20px 20px;
  height: 50px;
  line-height: 50px;
  text-align: center; 
  border: 1px solid #666;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  a{
    display: block;
    color: #000;
  }
  &:hover{
    a{
      color: #fff;
    }
    border: none;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
  }
  @media (max-width: 640px) {
    width: 180px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    margin: 10px 0;
  }
`;

export default {
  help: 'https://docs.bytom.io',
  techList: [
    {
      title: 'Equity',
      img: require('../images/dev/dev-equity.png'),
      des: 'Equity is a high level language for expressing Bytom’s smart contract, which is an interpreted language dedicated to demonstrate the Bytom multi-asset model’s contract.',
    },
    {
      title: 'Vapor',
      img: require('../images/dev/dev-vapor.png'),
      des: 'Golang implemented sidechain for Bytom.The first link of Vapor  is the mainchain of Bytom, which will be slowly iterated in the following part. It will be connected with the mainchain of Bitcoin and Ethereum, and will become a project of universal side chain.',
    },
    {
      title: 'Tensority',
      img: require('../images/dev/dev-tensority.png'),
      des: 'An ASIC-friendly Proof of Work Algorithm Based on Tensor.By adopting POW algorithm that is friendly to AI ASIC-chips, Bytom introduces matrix operations and convolution operations into hashing process of mining so that miners could be used for AI acceleration services after they are outdated. ',
    },
  ],
  toolsList: [
    {
      img: require('../images/dev/dev-java.png'),
      title: 'Java SDK',
      des: 'February 21, 2019',
      link: 'https://github.com/Bytom/bytom-java-sdk',
    },
    {
      img: require('../images/dev/dev-node.png'),
      title: 'Node.js SDK',
      des: 'February 12, 2019',
      link: 'https://github.com/Bytom/bytom-node-sdk',
    },
    {
      img: require('../images/dev/dev-js.png'),
      title: 'JS SDK',
      des: 'February 15, 2019',
      link: 'https://github.com/Bytom/Bytom-JS-SDK',
    },
    {
      img: require('../images/dev/dev-php.png'),
      title: 'PHP SDK',
      des: 'March 2, 2019',
      link: 'https://github.com/lxlxw/bytom-php-sdk',
    },
    {
      img: require('../images/dev/dev-ruby.png'),
      title: 'Ruby SDK',
      des: 'February 21, 2019',
      link: 'https://github.com/Bytom-Community/Bytom-Ruby-SDK',
    },
    {
      img: require('../images/dev/dev-python.png'),
      title: 'Python SDK',
      des: 'March 18, 2019',
      link: 'https://github.com/Bytom-Community/python-bytom',
    },
    {
      img: require('../images/dev/dev-android.png'),
      title: 'Android SDK',
      des: 'January 21, 2019',
      link: 'https://github.com/Bytom-Community/Bytom-Android-SDK',
    },
    {
      img: require('../images/dev/dev-mobile.png'),
      title: 'Mobile Wallet SDK',
      des: 'March 19, 2019',
      link: 'https://github.com/Bytom-Community/Bytom-Mobile-Wallet-SDK',
    },
  ],
  
  bountyList: [
    {
      title: 'C++ SDK',
      img: require('../images/dev/dev-c++.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/T7HbW7">Claim</a></Btn>
    },
    {
      title: 'Kotlin SDK',
      img: require('../images/dev/dev-kotlin.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/T7HbW7">Claim</a></Btn>
    },
    {
      title: 'Swift SDK',
      img: require('../images/dev/dev-swift.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/oKkLfw">Claim</a></Btn>
    },
    {
      title: 'Distributed Identity System',
      img: require('../images/dev/dev-dis.png'),
      des: '20000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/5n3Ewa">Claim</a></Btn>
    },
    {
      title: 'Collecting BMIP',
      img: require('../images/dev/dev-bmip.png'),
      des: 'Bytom Improvement Proposals Bytom Improvement Proposals',
      exrta: <Btn><a target="_blank" href="">Claim</a></Btn>
    },
    {
      title: 'Chrome Extension Wallet',
      img: require('../images/dev/dev-chrome.png'),
      des: '1000 BTM - 10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/JcWfVQ">Claim</a></Btn>
    },
    {
      title: 'Equity Contract',
      img: require('../images/dev/dev-equity-contract.png'),
      des: '30000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/hJax71">Claim</a></Btn>
    },
    {
      title: 'Equity IDE',
      img: require('../images/dev/dev-equity-ide.png'),
      des: '30000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/2RV9nx">Claim</a></Btn>
    },
  ],
  
  langTermList: [
    {
      title: 'Safety',
      img: require('../images/dev/dev-safety.png'),
      des: '500 BTM - 10,000 BTM',
      exrta: <Btn><a target="_blank" href="http://t.cn/EJC9TEh">Claim</a></Btn>,
    },
    {
      title: 'BMIP',
      img: require('../images/dev/dev-bmip.png'),
      des: '20000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/CCd6cP">Claim</a></Btn>,
    },
    {
      title: 'Video Tutorials',
      img: require('../images/dev/dev-video.png'),
      des: '4000 BTM+ / 20 minutes',
      exrta: <Btn><a target="_blank" href="https://goo.gl/WCh3QD">Claim</a></Btn>,
    },
    {
      title: 'Translate',
      img: require('../images/dev/dev-translate.png'),
      des: '100 BTM - 500 BTM / 1000',
      exrta: <Btn><a target="_blank" href="mailto:contact@bytom.io">Claim</a></Btn>,
    },
  ],
}
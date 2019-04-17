import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import _conf from '../../conf/eco.conf';
const Wrap = styled.div`
  width: 100%;
  height: 80px;
  box-shadow:0px 2px 4px rgba(0,0,0,0.04);
  opacity:1;
`;
const Cont = styled.ul` 
  max-width: 1280px; 
  height: 100%;
  margin: 0 auto;
  display:flex;
  align-items:center;
`;
const Item = styled.li`
  font-size:16px;
  line-height:77px;
  color:rgba(0,0,0,1);
  padding:0 20px;
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.isCur ? '#035BD4' : 'transparent'};
  transition:all .4s;
`;
const ListWrap = styled.div`
  
`;
const List = styled.div`
  div{
    padding-bottom:60px;
    &.isEven{
      background:#fff;
    }
    .content{
    max-width: 1280px; 
    height: 100%;
    margin: 0 auto;
    }
  }
`
const Title = styled.p`
  font-size:36px;
  font-weight:bold;
  color:rgba(40,40,40,1);
  padding:50px 0;
`
const IconList = styled.ul`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-wrap:wrap;
  li{
    width:22%;
    height:175px;
    margin-right:30px;
    margin-bottom:30px;
    box-shadow:0px 2px 4px rgba(0,0,0,0.04);
    &:hover{
      box-shadow: 0 6px 24px 2px rgba(0, 0, 0, .06), 0 6px 30px 5px rgba(0, 0, 0, .04), 0 0 10px -5px rgba(0, 0, 0, .08);
      transition: all .3s ease;
    }
    img{

    }
    p{
      font-size:18px;
      font-weight:bold;
      line-height:26px;
      color:rgba(28,28,28,1);
      opacity:1;
      padding:14px 20px 20px;
    }
  }
`
const navList = [
  {
    id: 'wallets',
    name: 'Wallets',
    index: 0
  },
  {
    id: 'explorers',
    name: 'Explorers',
    index: 1
  }, {
    id: 'mining',
    name: 'Mining Pools',
    index: 2
  }, {
    id: 'exchanges',
    name: 'Exchanges',
    index: 3
  }, {
    id: 'safety',
    name: 'Safety',
    index: 4
  },
  {
    id: 'partners',
    name: 'Partners',
    index: 5
  },
];
const ecoList = [
  {
    title: 'Wallets',
    list: [
      {
        img: require('../../images/eco/1-bycoin.png'),
        title: 'Bycoin'
      },
      {
        img: require('../../images/eco/1-byone.png'),
        title: 'Byone'
      },
      {
        img: require('../../images/eco/1-HyperPay.png'),
        title: 'HyperPay'
      },
      {
        img: require('../../images/eco/1-Bixin.png'),
        title: 'Bixin'
      },
      {
        img: require('../../images/eco/1-Hoo.png'),
        title: 'Hoo'
      },
      {
        img: require('../../images/eco/1-BEPAL.png'),
        title: 'BEPAL'
      },
      {
        img: require('../../images/eco/1-Bitpie.png'),
        title: 'Bitpie'
      },
    ]
  },
  {
    title: 'Explorers',
    list: [
      {
        img: require('../../images/eco/2-Blockmeta.png'),
        title: 'Blockmeta'
      },
      {
        img: require('../../images/eco/2-Btmscan.png'),
        title: 'Btmscan'
      },
      {
        img: require('../../images/eco/2-Tokenview.png'),
        title: 'Tokenview'
      }
    ]
  },
  {
    title: 'Mining Pools',
    list: [
      {
        img: require('../../images/eco/3-MATPool.png'),
        title: 'MATPool'
      },
      {
        img: require('../../images/eco/3-Antpool.png'),
        title: 'Antpool'
      },
      {
        img: require('../../images/eco/3-F2Pool.png'),
        title: 'F2Pool'
      },
      {
        img: require('../../images/eco/3-Beepool.png'),
        title: 'Beepool'
      },
      {
        img: require('../../images/eco/3-UUPool.png'),
        title: 'UUPool'
      },
      {
        img: require('../../images/eco/3-ZhizhuPool.png'),
        title: 'ZhizhuPool'
      },
      {
        img: require('../../images/eco/3-ViaBTC.png'),
        title: 'ViaBTC'
      },
      {
        img: require('../../images/eco/3-POOLREN.png'),
        title: 'POOL.REN'
      }
    ]
  },
  {
    title: 'Exchanges',
    list: [
      {
        img: require('../../images/eco/4-OKEx.png'),
        title: 'OKEx'
      },
      {
        img: require('../../images/eco/4-HuobiGlobal.png'),
        title: 'Huobi Global'
      },
      {
        img: require('../../images/eco/4-Gateio.png'),
        title: 'Gateio'
      },
      {
        img: require('../../images/eco/4-Bittrex.png'),
        title: 'Bittrex'
      },
      {
        img: require('../../images/eco/4-UPbit.png'),
        title: 'UPbit'
      },
      {
        img: require('../../images/eco/4-CoinEgg.png'),
        title: 'CoinEgg'
      },
      {
        img: require('../../images/eco/4-ZBcom.png'),
        title: 'ZB.com'
      },
      {
        img: require('../../images/eco/4-BitMart.png'),
        title: 'BitMart'
      },
      {
        img: require('../../images/eco/4-Bibox.png'),
        title: 'Bibox'
      },
      {
        img: require('../../images/eco/4-BWcom.png'),
        title: 'BW.com'
      },
      {
        img: require('../../images/eco/4-CoinTiger.png'),
        title: 'CoinTiger'
      },
      {
        img: require('../../images/eco/4-DragonEX.png'),
        title: 'DragonEX'
      },
      {
        img: require('../../images/eco/4-HitBTC.png'),
        title: 'HitBTC'
      },
      {
        img: require('../../images/eco/4-TOKOK.png'),
        title: 'TOKOK'
      },
      {
        img: require('../../images/eco/4-CoinEx.png'),
        title: 'CoinEx'
      },
      {
        img: require('../../images/eco/4-KuCoin.png'),
        title: 'KuCoin'
      },
      {
        img: require('../../images/eco/4-RightBTC.png'),
        title: 'RightBTC'
      },
      {
        img: require('../../images/eco/4-FCoin.png'),
        title: 'FCoin'
      },
      {
        img: require('../../images/eco/4-LBank.png'),
        title: 'LBank'
      },
      {
        img: require('../../images/eco/4-CoinMex.png'),
        title: 'CoinMex'
      }
    ]
  },
  {
    title: 'Safety',
    list: [
      {
        img: require('../../images/eco/5-360.png'),
        title: '360'
      },
      {
        img: require('../../images/eco/5-SlowMist.png'),
        title: 'SlowMist'
      },
      {
        img: require('../../images/eco/5-PeckShield.png'),
        title: 'PeckShield'
      },
      {
        img: require('../../images/eco/5-Beosin.png'),
        title: 'Beosin'
      },
      {
        img: require('../../images/eco/5-BUGX.png'),
        title: 'BUGX'
      }
    ]
  },
  {
    title: 'Partners',
    list: [
      {
        img: require('../../images/eco/6-8BTC.png'),
        title: '8BTC'
      },
      {
        img: require('../../images/eco/6-Bitmain.png'),
        title: 'Bitmain'
      },
      {
        img: require('../../images/eco/6-szwh.png'),
        title: '深圳文化产权交易所'
      },
      {
        img: require('../../images/eco/6-zjzs.png'),
        title: '浙江知识产权交易中心'
      },
      {
        img: require('../../images/eco/6-dhdsj.png'),
        title: '东湖大数据交易中心'
      },
      {
        img: require('../../images/eco/6-Purdue.png'),
        title: 'Purdue'
      },
      {
        img: require('../../images/eco/6-xajd.png'),
        title: '西安交通大学'
      },
      {
        img: require('../../images/eco/6-DIF.png'),
        title: 'DIF'
      },
      {
        img: require('../../images/eco/6-Junction.png'),
        title: 'Junction'
      },
      {
        img: require('../../images/eco/6-kys.png'),
        title: '开源社'
      },
      {
        img: require('../../images/eco/6-BEN.png'),
        title: 'BEN'
      }
    ]
  },
]
class TopFix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currnetIndex: 0
    };
  }
  componentDidMount() {
    // this.windowOnScroll();
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  windowOnScroll() {
    window.onscroll = () => {
      //获取滚动条滚动的距离
      //指定了DOCTYPE时，使用document.documentElement.scrollTop。
      let h = document.documentElement.scrollTop
      // if (h > 80) {
      //   this.isScrollTop = false
      //   console.log('大于80', this.isScrollTop);

      // }else{
      //   this.isScrollTop = true
      //   console.log('小于80', this.isScrollTop);

      // }
    }
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleClick(index) {
    // scroll.scrollTo(index * 800)
    this.setState({
      currnetIndex: index
    })

    scroller.scrollTo(`test${index}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  render() {
    return (
      <div>
        <Wrap>
          <Cont className="clearfix">
            {
              navList.map((item, index) => {
                return (
                  <Item isCur={index === this.state.currnetIndex} key={index} onClick={() => this.handleClick(index)}
                  >
                   {item.name}
                  </Item>
                )
              })
            }
          </Cont>
        </Wrap>
        <ListWrap className="clearfix">
          <List>
            {
              _conf.ecoList.map((item, index) => {
                return (
                  <Element name={`test${index}`} className="element" key={index}>
                    <div className={(index % 2) !== 0 ? 'isEven' : ''} >
                      <div className="content">
                        <Title>{item.title}</Title>
                        <IconList>
                          {
                            item.list.map((imgInfo, imgIndex) => {
                              return (
                                <li key={imgIndex}>
                                  <a href={imgInfo.link}>
                                    <img src={imgInfo.img} />
                                    <p>{imgInfo.title}</p>
                                  </a>
                                </li>
                              )
                            })
                          }
                        </IconList>
                      </div>
                    </div>
                  </Element>
                )
              })
            }
          </List>
        </ListWrap>
      </div>

    )
  }
}
export default TopFix; 
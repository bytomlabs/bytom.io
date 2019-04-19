import React from 'react';

import img_anybit from '../images/wallet/mobile/wallet-anybit@2x.png';
import img_bycoin from '../images/wallet/mobile/wallet-bycoin@2x.png';
import img_bixin from '../images/wallet/mobile/wallet-bixin@2x.png';
import img_bepal from '../images/wallet/mobile/wallet-bepal@2x.png';
import img_hoo from '../images/wallet/mobile/wallet-hoo@2x.png';
import img_hyperpay from '../images/wallet/mobile/wallet-hyperpay@2x.png';
import img_bitpie from '../images/wallet/mobile/wallet-bitpie@2x.png';

import img_icon_linux from '../images/linux.png';

import img_bystore from '../images/wallet/mobile/extension-bystore@2x.png';
import img_bepa from '../images/wallet/mobile/wallet-bepapros@2x.png';


export default {
  walletList: [
    {
      icon: <i className="iconfont icon--macOS"></i>,
      title: 'Bytom Wallet',
      des: 'for macOS',
      version: 'V 1.0.8',
      links: [
        null,
        {title: 'Download', href: 'https://github.com/Bytom/bytom/releases/download/v1.0.8/bytom-wallet-desktop-1.0.8-mac.zip'}
      ]
    },
    {
      icon: <i style={{color: '#0079D7'}} className="iconfont icon--windows"></i>,
      title: 'Bytom Wallet',
      des: 'for Wins',
      version: 'V 1.0.8',
      links: [
        {title: 'Win32', href: 'https://github.com/Bytom/bytom/releases/download/v1.0.8/bytom-wallet-desktop-1.0.8-win-ia32.zip'},
        {title: 'Win64', href: 'https://github.com/Bytom/bytom/releases/download/v1.0.8/bytom-wallet-desktop-1.0.8-win-x64.zip'},
      ]
    },
    {
      icon: <img src={img_icon_linux} width="23" style={{verticalAlign: '-5px'}} />,
      title: 'Bytom Wallet',
      des: 'for Linux',
      version: 'V 1.0.8',
      links: [
        {title: 'Linux32', href: 'https://github.com/Bytom/bytom/releases/download/v1.0.8/bytom-wallet-desktop-1.0.8-linux-ia32.zip'},
        {title: 'Linux64', href: 'https://github.com/Bytom/bytom/releases/download/v1.0.8/bytom-wallet-desktop-1.0.8-linux-x64.zip'},
      ]
    },
    {
      icon: <i style={{color: '#0DBF37'}} className="iconfont icon--code"></i>,
      title: 'Source Code',
      des: '',
      version: '',
      links: [
        {title: 'zip', href: 'https://github.com/Bytom/bytom/archive/v1.0.8.zip'},
        {title: 'tar.gz', href: 'https://github.com/Bytom/bytom/archive/v1.0.8.tar.gz'},
      ]
    },
  ],
  mobileWalletList: [
    {
      img: img_anybit,
      title: 'Anybit Wallet',
      des: 'Your Mobile crypto Manager'
    },
    {
      img: img_bepal,
      title: 'Bepal Wallet',
      des: 'Safe and easy to use with attractive interface'
    },
    {
      img: img_bitpie,
      title: 'Bitpie Wallet',
      des: 'Industry-leading multi-blockchain wallet'
    },
    {
      img: img_bixin,
      title: 'Binxin Wallet',
      des: 'Blockchain in your pocket'
    },
    {
      img: img_bycoin,
      title: 'Bycoin Wallet',
      des: 'Professional digital assets management platform'
    },
    {
      img: img_hoo,
      title: 'Hoo Wallet',
      des: ''
    },
    {
      img: img_hyperpay,
      title: 'Hyperpay Wallet',
      des: 'The bastion of wallet security, watch your assets…'
    },
  ],
  browserWalletList: [
    {
      img: img_bystore,
      title: 'Bystore',
      des: 'Secure & Advanced Bytom Client'
    },
  ],
  hardwareWalletList: [
    {
      img: img_bepa,
      title: 'Bepa Pro S',
      des: 'Focusing on the safety of blockchain'
    },
  ],
  historyVersions: {
    title: ['Versions', 'Files', 'Checksums(MD5)'],
    width: [null, null, 200],
    data: [
      ['Bytom Wallet for macOS v1.0.8', 'bytom-wallet-desktop-1.0.8-mac.zip', '08a4ac6290df4659080d38f32d6f46ee'],
      ['Bytom Wallet for Win 32 v1.0.8', 'bytom-wallet-desktop-1.0.8-win-ia32.zip	', '57d4b1c054c2245ed8f071571fc8d211'],
      ['Bytom Wallet for Win 64 v1.0.8', 'bytom-wallet-desktop-1.0.8-win-x64.zip', 'd7667979801821e4dbfa475f66d0ac49'],
      ['Bytom Wallet for Linux 32 v1.0.8', 'bytom-wallet-desktop-1.0.8-linux-ia32.zip', '5a4ed58a6ec1a5c586012f6ac3ac5dab'],
      ['Bytom Wallet for Linux 64 v1.0.8', 'bytom-wallet-desktop-1.0.8-linux-x64.zip', '202bbe81a2896d74c70267e292a91f72'],
    ],
    footer: <a href="https://github.com/Bytom/bytom/releases">More versions &gt;&gt;</a>
  },
  fileList: {
    title: ['File', 'Height', 'Size', 'Checksums(MD5)', 'Last update', 'Link'],
    width: [280, 110, 150, 350, 260],
    data: [
      ['190419-Update.db.zip', '217923', '409.3 MB', 'C84A62C43ABF657CD48DA894B934BB8E', '2019-04-19 08:00:00 (GMT+8)', <a href="https://master.dl.sourceforge.net/project/bytomblockchain/core.db/190419-Update.db.zip">Download</a>],
    ],
  },
};

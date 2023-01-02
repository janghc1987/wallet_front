import { useEffect } from 'react';
import React from 'react';
import { getMainWidth, handleTitle } from '../../utils';
import MainHeader from './MainHeader';
import ConnectAct from '../../assets/img/ConnectAct.png';
import Connect from '../../assets/img/Connect.png';
import MegaAct from '../../assets/img/MegaAct.png';
import Mega from '../../assets/img/Mega.png';
import PaintAct from '../../assets/img/PaintAct.png';
import Paint from '../../assets/img/Paint.png';
import ftimg1 from '../../assets/img/ftimg1.png';
import ftimg2 from '../../assets/img/ftimg2.png';
import ftimg3 from '../../assets/img/ftimg3.png';
import ftimg4 from '../../assets/img/ftimg4.png';
import '../../assets/css/common.css';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';

import $ from 'jquery';
import { useRecoilState } from 'recoil';
import auctionCategoryAtom from '../../atoms/auctionCategory';
import { useHistory } from 'react-router-dom';

const HomeContainer = () => {
  const history = useHistory();
  const [offset, setOffset] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(10);

  useEffect(() => {
    handleTitle('MEGA-NFT');
    getMainWidth();
  }, []);
  

  return (

    <section>
      <div className="mainPage" style={{display:'block'}}>
        <MainHeader />
        <div style={{display: 'block', width: '100%', height: '50px', backgroundColor:"#F5F6FA"}}></div>

        <div className="secCont7">
          <div className="contInner">
            <div className="contBox">
              <div className="box1">
                <p>How to enjoy with MEGA NFT</p>
              </div>
              <div className="box2">
                <ul>
                  <li>
                    <span className="frame"><img src={ftimg1} alt=""/></span>
                    <p>Connect your Wallet</p>
                    <div className="txtbox">
                      <p>Once you’ve connected</p>
                      <p>your Metamask wallet</p>
                      <p>to MEGA NFT, you are</p>
                      <p>ready to buy NFTs.</p>
                      <p> &nbsp; </p>
                    </div>
                  </li>
                  <li>
                    <span className="frame"><img src={ftimg2} alt=""/></span>
                    <p>Exchange to MGP</p>
                    <div className="txtbox">
                      <p>In order to trade NFT,</p>
                      <p>you need MGP.</p>
                      <p>You can get MGP by</p>
                      <p>exchanging from ETH</p>
                      <p>or MEGA.</p>
                    </div>
                  </li>
                  <li>
                    <span className="frame"><img src={ftimg3} alt=""/></span>
                    <p>How to Buy & Sell</p>
                    <div className="txtbox">
                      <p>Buy or bid for your favorite</p>
                      <p>NFTs with MGP only.</p>
                      <p>Sell your NFTs</p>
                      <p>curated by MEGA NFT.</p>
                      <p> &nbsp; </p>
                    </div>
                  </li>
                  <li>
                    <span className="frame"><img src={ftimg4} alt=""/></span>
                    <p>Certificate / Delivery</p>
                    <div className="txtbox">
                      <p>You can check the</p>
                      <p>certificate from your</p>
                      <p>profile.</p>
                      <p>For delivery, please</p>
                      <p>contact us by e-mail.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contBox2">
              <div className="box1">
                <p>Explorer</p>
              </div>
              <div className="box2">
                <ul>
                  <li>
                    <a href="#none" >
                      <span className="frame type1"><img src={MegaAct} alt=""/></span>
                      <span className="frame type2"><img src={Mega} alt=""/></span>
                      <span className="txt">Mega</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none" >
                      <span className="frame type1"><img src={PaintAct} alt=""/></span>
                      <span className="frame type2"><img src={Paint} alt=""/></span>
                      <span className="txt">Artwork</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none" >
                      <span className="frame type1"><img src={ConnectAct} alt=""/></span>
                      <span className="frame type2"><img src={Connect} alt=""/></span>
                      <span className="txt">Digital Art</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HomeContainer;

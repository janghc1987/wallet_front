import $ from 'jquery';
import 'swiper';
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import addresses from '../../../constants/addresses';


const MainHeader = () => {
  const history = useHistory();
  
  React.useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="slidermainBG">
        <span className="frame"><img src='' alt=""/></span>
        <span className="frameBG"></span>
      </div>
  
      <div className="sliderCont">
        <div id="touchSlider0" className="swiper">
          <ul>
            
          </ul>
        </div>
        <div className="infoBox">
          <div className="blurbox"></div>
          <div className="txtbox">
            <p className="tit" id='sliderAuctionTitle'></p>
            <div className="infoPrice">
              <div className="contBox">
                <p>Buy Now</p>
              </div>
              <div className="contBox">
                <p>Current Price</p>
              </div>
            </div>
            <div className="textbox">
              <textarea name="sliderDescription" id="sliderDescription" maxLength={100} readOnly></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;

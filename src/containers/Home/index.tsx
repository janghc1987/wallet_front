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
        <div className="secCont7">
          <div className="contInner">
            <div className="contBox">
              <div className="box1" style={{height:800}}>
                <p>How to enjoy with MEGA NFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HomeContainer;

import React from 'react';
import $ from 'jquery';
import mainlogo from '../../../assets/img/mainlogo.png';
import userOn from '../../../assets/img/userOn.png';
import TVsOn from '../../../assets/img/TVsOn.png';
import logoutOn from '../../../assets/img/logoutOn.png';
import nodataImg from '../../../assets/img/userOn.png';
import btn1 from '../../../assets/img/btn1.png';
import { useRecoilState } from 'recoil';
import auctionKeywordAtom from '../../../atoms/auctionKeyword';
import auctionCategoryAtom from '../../../atoms/auctionCategory';
import isSearchFinishAtom from '../../../atoms/isSearchFinish';
import isCategoryFinishAtom from '../../../atoms/isCategoryFinish';
import { useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { useSetRecoilState } from 'recoil';
import walletAccountAtom from '../../../atoms/walletAccount';
import myPointAtom from '../../../atoms/myPoint';
import addresses from '../../../constants/addresses';
import axios from 'axios'; // 액시오스
import { injectedConnector } from '../../../connector';

function clickMyInfo(){

  if ($("#myInfoId").hasClass('off')) {
    $("#myInfoId").removeClass('off').addClass('on').siblings().stop().slideDown();
    $("header>.headerInner>nav>ul>li>a").removeClass('on').addClass('off').siblings().stop().slideUp();
    $("header>.headerInner>nav>ul>li>a").children('i').removeClass('fa-caret-up').addClass('fa-caret-down');
  } else if ($("#myInfoId").hasClass('on')) {
    $("#myInfoId").removeClass('on').addClass('off').siblings().stop().slideUp();
  }

}

function clsePop(){
	$(".clsePop").hide();
}


function SidenavHeader({ AsidelogoCt, hideShowSidebar }) {


   const [auctionKeyword, setAuctionKeyword] = useRecoilState(auctionKeywordAtom);
   const [auctionCategory, setAuctionCategory] = useRecoilState(auctionCategoryAtom);
   const [searchFinish, setSearchFinish] = useRecoilState(isSearchFinishAtom);
   const [categoryFinish, setCategoryFinish] = useRecoilState(isCategoryFinishAtom);
   
   const history = useHistory();

   const { chainId, account, activate, deactivate, active } = useWeb3React();

  const setWalletAccount = useSetRecoilState(walletAccountAtom);
  const setMyPoint = useSetRecoilState(myPointAtom);


  return (
    <>
    <header>
    <div className="headerInner web">
      <a href="/" className="mainLogo" ><img src={mainlogo} alt="로고"/></a>
      <nav>
        <ul className="clearfix">
          <li><a href="#" onClick={()=>{history.push('/contact')}}>Contact Us</a></li>
        </ul>
      </nav>
      <div className="connectBtns">
        <ul className="clearfix">
          {window.localStorage.getItem('wallet') === 'metamask' && account ?
            (
            <li>
              <a href="#" className="myInfo off" id='myInfoId' onClick={clickMyInfo}><img src={nodataImg} alt=""/></a>
              <div className="infoCont">
                  <div className="promnubtns">
                    <ul>
                      <li>
                        <a href="#" onClick={event => {event.preventDefault(); $('.infoCont').hide(); history.push('/mycollection')}}><span className="frame type1"><img src={userOn} alt=""/></span>Profile</a>
                      </li>
                      <li>
                        <a href="#" onClick={event => {event.preventDefault(); $('.infoCont').hide(); history.push('/tvpSwap/Y')}}><span className="frame type1"><img src={TVsOn} alt=""/></span>MGP Swap</a>
                      </li>
                      <li>
                        <a href="#" onClick={event => {event.preventDefault(); $('.infoCont').hide(); deactivate(); window.localStorage.removeItem('wallet');history.replace('/');}} ><span className="frame type1"><img src={logoutOn} alt=""/></span>Disconnect</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </li>
            )
            :
            (
            <li>
              <a href="#" className="connect" ><img style={{width:101,height:32}} src={btn1} alt=""/></a>
            </li>
            )
			      }
          
        </ul>
      </div>
    </div>
  </header>


		{/* 문의하기 완료 팝업 */}
		<div className="inquirycompPop clsePop" style={{display:'none'}}>
			<div className="shadow" onClick={clsePop}></div>
			<div className="contArea">
				<p className="tit">Your inquiry has been sent!</p>
				<div className="txtArea">
					<p>Thank you for your inquiry.</p>
					<p>We will send our reply to the</p>
					<p>email you entered.</p>
				</div>
				<div className="btnArea">
					<a href="#">CONFIRM</a>
				</div>
			</div>
		</div>
		{/* 문의하기 완료 팝업 END */}
    </>
  );
}

export default SidenavHeader;

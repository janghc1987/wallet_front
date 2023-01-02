import './SidenavFooter.css'
import footerlogo from '../../../assets/img/footerlogo.png';
import xangle from '../../../assets/img/Xangle.svg';
import twitter from '../../../assets/img/twitter-brands.svg';
import telegram from '../../../assets/img/telegram-plane-brands.svg';
import explorer from '../../../assets/img/internet-explorer-brands.svg';
import medium from '../../../assets/img/medium.png';
import { useRecoilState } from 'recoil';

function SidenavFooter() {


  return (
        <footer>
          <div className="footerConts">
            <div className="footerCont">
              <div className="footerCont1">
                <span className="frame"><img src={footerlogo} alt=""/></span>
                <p>The first Mega marketplace for crypto collectibles.</p>
              </div>
              <div className="footerCont2">
                <p>Marketplace</p>
                <ul>
                </ul>
              </div>
              <div className="footerCont3">
                <p>Community</p>
                <ul>
                  <li onClick={()=>window.open('http://megaphonekorea.com/')}>
                    <a href="#"><img src={explorer} alt=""/></a>
                    <a href="#"><img src={explorer} alt=""/></a>
                  </li>
                  <li style={{display:'none'}} onClick={()=>window.open('https://t.me/tvstalk')}>
                    <a href="#"><img src={telegram} alt=""/></a>
                    <a href="#"><img src={telegram} alt=""/></a>
                  </li>
                  <li style={{display:'none'}} onClick={()=>window.open('https://twitter.com/TVS_platform')}>
                    <a href="#"><img src={twitter} alt=""/></a>
                    <a href="#"><img src={twitter} alt=""/></a>
                  </li>
                  <li style={{display:'none'}} onClick={()=>window.open('https://medium.com/TVSGlobalPlatform')}>
                    <a href="#"><img src={medium} alt=""/></a>
                    <a href="#"><img src={medium} alt=""/></a>
                  </li>
                  <li style={{display:'none'}} onClick={()=>window.open('https://xangle.io/en/project/TVS/profile')}>
                    <a href="#"><img src={xangle} alt=""/></a>
                    <a href="#"><img src={xangle} alt=""/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        )
}

export default SidenavFooter

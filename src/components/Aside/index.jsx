import SidenavHeader from './SidenavHeader';
import SidenavFooter from './SidenavFooter';

import { LogoPandoNft } from '../../utils/allImgs';
import { hideShowSidebar } from '../../utils';
import { Switch, Route } from 'react-router-dom';

import {
  Contact,
  Home
} from '../../pages';

import '../../assets/css/common.css';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';


const AsideContainer = () => {
  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3"
        id="sidenav-main"
      >
        <SidenavHeader
          AsidelogoCt={LogoPandoNft}
          hideShowSidebar={hideShowSidebar}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <SidenavFooter />
      </aside>
    </>
  );
};

export default AsideContainer;
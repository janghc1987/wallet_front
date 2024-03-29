import { hideShowSidebar } from '../../../utils';
import { useRecoilState } from 'recoil';
import auctionKeywordAtom from '../../../atoms/auctionKeyword';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
    >
      <div className="container-fluid py-1 px-3">
        {/* <SecNav /> */}

        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
            </div>
          </div>

          <ul className="navbar-nav justify-content-end">
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <ul
                className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                aria-labelledby="dropdownMenuButton"
              >
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

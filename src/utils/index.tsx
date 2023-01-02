function getMainWidth() {
  let SIDBAR: any = document.querySelector(
    '.navbar-vertical.navbar-expand-xs.fixed-left'
  );
  // @ts-ignore
  if (getWidth() > 1200) {
    SIDBAR.style.left = '0px';
  }
}

const handleTitle = (title: any) => {
  document.title = title;
  let SIDBAR: any = document.querySelector(
    '.navbar-vertical.navbar-expand-xs.fixed-left'
  );

  if (document.title === title) {
    SIDBAR.style.left = '-400px';
  } else {
    SIDBAR.style.left = '0px';
  }
};

function getWidth() {
  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

const hideShowSidebar = () => {
  let HideShow = false;
  let SIDBAR: any = document.querySelector(
    '.navbar-vertical.navbar-expand-xs.fixed-left'
  );
  // @ts-ignore
  if (getWidth() < 1200) {
    if (HideShow) {
      HideShow = false;
      SIDBAR.style.left = '0px';
    } else {
      HideShow = true;
      SIDBAR.style.left = '270px';
      SIDBAR.style.backgroundColor = '#fff';
    }
  }
};

const closeSidebar = () => {
  let SIDBAR: any = document.querySelector(
    '.navbar-vertical.navbar-expand-xs.fixed-left'
  );

  // @ts-ignore
  if (getWidth() < 1200) {
    SIDBAR.style.left = '0px';
  }
};


export {
  getMainWidth,
  handleTitle,
  getWidth,
  hideShowSidebar,
  closeSidebar
};

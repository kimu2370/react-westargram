import React from 'react';

class Nav extends React.Component {
   render() {
      return (
         <nav>
            <div>
               <div  className="logo">
                  <img className="logo-img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt=""/>
                  <div className="logo-bar"></div>
                  <img className="logo-text" src="/img/logo_text.png" alt=""/>
               </div>
            </div>
            <div className="search">
               <input type="text" placeholder="검색"/>
            </div>
            <div className="menu">
               <img className="menu-search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt=""/>
               <img className="menu-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
               <img className="menu-mypage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt=""/>
            </div>
         </nav>
      );
   }
}

export default Nav;
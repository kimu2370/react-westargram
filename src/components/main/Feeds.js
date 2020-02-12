import React from 'react';

class Feeds extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         isEntered : "Enter"
      };
   }
   handleKeyDown = e => {
      console.log(e);
   }
   render() {
      return (
         <div className="feeds">
            <article>
               <header>
                  <div>
                     <img className="userimage" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75291135_578402932948862_6152326637594607616_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NyvYxcGaUg8AX8SBMRT&oh=276e894a2eb15482ec349caf56abbef4&oe=5EC19473" alt=""/>
                     <div className="user">
                        <div className="username">k_seungHyun</div>
                        <div className="usersub">
                           <span className="username">xxx</span>님과 함께 있습니다.
                        </div>
                     </div>
                  </div>
                  <img className="threedots" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt=""/>    
               </header>
               <section>
                  <img className="feed-image" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/82467602_2576778892391340_667086844844199994_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rEJybHanNx8AX_ZqCyL&oh=254417355db51f2ef27f5130be591bdc&oe=5EBEC9BD" alt=""/>
               </section>
               <section>
                  <div className="feed-icons">
                     <div className="three">
                        <img className="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
                        <img className="comment" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt=""/>
                        <img className="share" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt=""/>
                     </div>
                     <img className="bookmark" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt=""/>
                  </div>
               </section>
               <section>
                  <div className="feed-state">
                     <div className="feed-like">좋아요 21,000개</div>
                        <div className="post">
                           {/* <!-- <div><span>k_seungHyun</span><span>하이</span></div> --> */}
                        </div>
                  </div>
               </section>
               <section>
                  <div className="feed-comment">
                     <input className="comment-input" type="text" placeholder="댓글 달기..."onKeyDown={this.handleKeyDown}/>
                     <button className="comment-Button">게시</button>
                  </div>
               </section>
            </article>
         </div>
      );
   }

}

export default Feeds;
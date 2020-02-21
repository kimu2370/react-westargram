import React,{Component} from 'react';

class Nav extends Component {

   constructor(props) {
      super(props)
      this.state = {
         title : ""
      }
   }
   handleSearch = () => {
      fetch("http://10.58.2.13:8000/search/search_best",{
          method:'POST',
          body :JSON.stringify(
         {
               "title" : this.state.title
         }
      )})
      .then(res=>{
         return res.json();
      })
      .then(res=>{
         localStorage.setItem('title',res.title);
      });
   }
   handleChange = e => {
      this.setState({
         [e.target.name] : e.target.value
      });
   }

   handleKeyDown = e => {
      (e.key==="Enter"&&this.state.title.length>0) && this.handleSearch()
   }

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
               <input type="text" placeholder="검색" name="title" value={this.state.title} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
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
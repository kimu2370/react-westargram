import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         isToggleOn : true,
         id : '',
         pw : ''
      };
   }
   handleClick = e => {
      this.setState({
         isToggleOn : !this.state.isToggleOn
      });
      this.props.history.push('/Main');
   }
   handleInput = e => {
      this.setState({
         [e.target.name] : e.target.value 
      });
   }
   
   render() {
      return (
         <div className="form">
            <input className="username" type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일"onInput={this.handleInput}/>
            <input className="password" type="text" name="pw" placeholder="비밀번호" onInput={this.handleInput}/>
            {this.state.id&&this.state.pw ? <button className="login-button-active" onClick={this.handleClick}>로그인</button> : <button className="login-button" >로그인</button>}
         </div>
      );
   }
}

export default withRouter(LoginForm);
import React, {Component} from 'react';
import LoginForm from '../components/login/LoginForm';
import SearchPW from '../components/login/SearchPW';
import LogoText from '../components/login/LogoText';
import '../components/login/login.css';

class Login extends Component {
   render() {
      return (
         <div className="container">
            <div className="login">
               <LogoText ></LogoText>
               <LoginForm ></LoginForm>
               <SearchPW ></SearchPW>
            </div>
         </div>
      );
   }
}

export default Login;
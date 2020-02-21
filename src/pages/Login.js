import React, {Component} from 'react';
import LoginForm from '../components/login/LoginForm';
import SearchPW from '../components/login/SearchPW';
import LogoText from '../components/login/LogoText';
import '../components/login/login.css';

class Login extends Component {
   constructor() {
      super();
  
      this.state = {
        data: []
      };
    }
  
    // 페이지가 로딩 됐을 때 화면에 뿌려줄 데이터를 미리 준비하기 위해서 componentDidMount에 fetch를 실행시켜둔다.
   componentDidMount = () => {
      fetch("http://localhost:3000/data/data.json")
      .then(res=>res.json())
      .then(res=>this.setState({
         data : res.data
      }))
      .then(()=>console.log(this.state.data))
   }

   render() {
      return (
         <div className="container">
            <div className="login">
               <LogoText ></LogoText>
               <LoginForm ></LoginForm>
               <SearchPW ></SearchPW>
            </div>
            {this.state.data.map(item=>{
               return (
                  <div className="test">
                     <div>
                       id : <span>{item.id}</span>
                     </div>
                     <div>
                       name : <span>{item.name}</span>
                     </div>
                     <div>
                       age : <span>{item.age}</span>
                     </div>
                  </div>
               )
            })}
         </div>
      );
   }
}

export default Login;
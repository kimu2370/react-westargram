import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import './common.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Main" component={Main}/>
      </Switch>
    );
  }
}

export default App;

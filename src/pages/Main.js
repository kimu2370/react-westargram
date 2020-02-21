import React,{Component} from 'react';
import Nav from '../components/main/Nav'; 
import Feeds from '../components/main/Feeds';
import MainRight from '../components/main/MainRight';
import '../components/main/main.css';

class Main extends Component {

   render() {
      return (
         <div>
            <Nav/>
            <main>
               <Feeds/>
               <MainRight/>
            </main>
         </div>
      );
   }
}

export default Main;
import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton'
import '../Header/styles/header.less'

export default class Header extends Component {
   render() {
      return (
         <div className="main-header">
            <ul className="main-header-menu">
               <MenuButton isActive={true} >Portfolio</MenuButton>
               <MenuButton>About</MenuButton>
               <MenuButton>Contact</MenuButton>
            </ul>
         </div>
      );
   }
}
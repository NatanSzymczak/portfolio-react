import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton';
import {pages} from '../../constants/pages';
import { connect } from 'react-redux';
import {navigateTo} from '../../actions/navigate';
import '../Header/styles/header.less'
import { getActivePage } from '../../selectors/root';

function mapStateToProps(state) {
   return {
      activePage: getActivePage(state)
   }
}

function mapDispatchToProps(dispatch) {
   return {
      navigateTo: (url) => dispatch(navigateTo(url))
   }
}

class Header extends Component {
   render() {
      const {navigateTo, activePage} = this.props;
      return (
         <div className="main-header">
            <ul className="main-header-menu">
               {pages.map((page, index) => {
                  return (
                     <MenuButton 
                        key = {index} 
                        navigateTo = {navigateTo} 
                        href = {page.url}
                        activePage = {activePage}
                     >
                        {page.label}
                     </MenuButton>
                  )
               })}
            </ul>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
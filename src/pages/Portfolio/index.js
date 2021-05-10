import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ABOUT, CONTACT} from '../../constants/pages';
import {navigateTo} from '../../actions/navigate';
import {getActivePage} from '../../selectors/root';

function mapStateToProps(state){
   return {
      activePage: getActivePage(state),
   }
}

function mapDispatchToProps(dispatch){
   return {
      goToAbout: () => dispatch(navigateTo(ABOUT.url)),
      goToContact: () => dispatch(navigateTo(CONTACT.url)),
   }
}

class Portfolio extends PureComponent {
   render() {
      return (
         <div>Store: <b>{this.props.activePage}</b>
            <div>
               <button onClick={this.props.goToAbout}>About</button>
               <button onClick={this.props.goToContact}>Contact</button>
            </div>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
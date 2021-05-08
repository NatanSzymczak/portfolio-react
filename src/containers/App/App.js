import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import {asyncComponent} from '../../components/asyncComponent';
import {pages} from '../../constants/pages';
import './styles/reset.less';

export default class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <Switch>
               {pages.map((page, index) => {
                  const AsyncComponent = asyncComponent(() => import(`../../pages/${page.component}`));
                  return(
                     <Route
                        component = {AsyncComponent}
                        key = {index}
                        exact = {true}
                        path = {page.url}
                     />
                  )
               })}
            </Switch>
         </div>
      );
   }
}
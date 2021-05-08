import React, {PureComponent} from 'react';

export const asyncComponent = (importComponent) => {
   return class extends PureComponent {
      state = {component: null};

      componentDidMount(){
         importComponent()
            .then(c => {this.setState({component: c.default})})
      }
      render(){
         const {component: Component} = this.state;
         return Component ? <Component {...this.props} /> : null;
      }
   }
}
import React, {PureComponent} from 'react';
import './styles/input.less';

export default class Input extends PureComponent {
   onChange = event => {
      this.props.onChange(event.target.value);
   }

   render() {
      const {value} = this.props;
      return (
         <input 
            className = 'form-input' 
            value = {value}
            onChange = {this.onChange}
         />
      );
   }
}
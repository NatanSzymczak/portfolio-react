import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/input.less';

export default class Input extends PureComponent {
   static propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      onBlur: PropTypes.func,
      onFocus: PropTypes.func,
      isInvalid: PropTypes.bool,
   }

   onChange = event => {
      const {onChange, name} = this.props;
      onChange(event.target.value, name);
   }

   onBlur = event => {
      const {onBlur, name} = this.props;
      if(onBlur){
         onBlur(event, name);
      }
   }

   onFocus = event => {
      const {onFocus, name} = this.props;
      if(onFocus){
         onFocus(event, name);
      }
   }

   render() {
      const {value, isInvalid} = this.props;
      const inputClasses = className('form-input', {
         'form-input-invalid': isInvalid,
      });
      return (
         <input 
            className={inputClasses} 
            value={value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
         />
      );
   }
}
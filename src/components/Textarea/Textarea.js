import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/textarea.less';

export default class Textarea extends PureComponent {
   static propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
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
      const textareaClasses = className('form-textarea', {
         'form-textarea-invalid': isInvalid,
      });
      return (
         <textarea 
            className={textareaClasses} 
            value={value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
         />
      );
   }
}
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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

   render() {
      const {value} = this.props;
      return (
         <textarea 
            className="form-textarea" 
            value={value}
            onChange={this.onChange}
         />
      );
   }
}
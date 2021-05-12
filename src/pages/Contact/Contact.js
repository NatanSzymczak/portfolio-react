import {connect} from 'react-redux';
import ContactComponent from './ContactComponent';
import * as action from './actions';
import * as selector from './selectors';

function mapStateToProps(state){
   return {
      userName:  selector.getFieldValue(state, 'name'), 
      userEmail: selector.getFieldValue(state, 'email'),
      userMessage: selector.getFieldValue(state, 'message'),
   };
}

function mapDispatchToProps(dispatch){
   return {
      changeForm: (value, fieldName) => dispatch(action.changeForm(value, fieldName)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent);
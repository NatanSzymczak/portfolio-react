import {connect} from 'react-redux';
import ContactComponent from './ContactComponent';
import * as action from './actions';
import * as selector from './selectors';

function mapStateToProps(state){
   return {
      userName:  selector.getFieldValue(state, 'name'), 
      userEmail: selector.getFieldValue(state, 'email'),
      userMessage: selector.getFieldValue(state, 'message'),
      touchedFields: selector.getFieldTouchedState(state),
   };
}

function mapDispatchToProps(dispatch){
   return {
      changeForm: (value, fieldName) => dispatch(action.changeForm(value, fieldName)),
      touchField: (event, fieldName) => dispatch(action.touchField(fieldName)),
      focusField: (event, fieldName) => dispatch(action.focusField(fieldName)),
      touchAllFields: () => dispatch(action.touchAllFields()),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent);
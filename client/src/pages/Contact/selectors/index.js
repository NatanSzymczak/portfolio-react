function getContactView(state){
   return state.view.contact;
}

export function getFieldValue(state, fieldName){
   return getContactView(state)[fieldName] || '';
}

export function getFieldTouchedState(state, fieldName){
   return getContactView(state).touchedFields;
}
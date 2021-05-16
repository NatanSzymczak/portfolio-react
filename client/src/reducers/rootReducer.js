import {PORTFOLIO} from '../constants/pages';
import {NAVIGATE_TO} from '../constants/actionTypes';

const initialState = {
   activePage: PORTFOLIO.url,
}

export default function rootReducer(state=initialState, action){
   if(action){
      switch(action.type){
         case NAVIGATE_TO:
            return {
               ...state,
               activePage: action.url,
            }
      }
   }
   return {
      ...state,
   }
}
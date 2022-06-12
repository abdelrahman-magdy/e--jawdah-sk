/*
 *
 * LanguageProvider reducer
 *
 */
import { updateObject } from '../../utils';
import { CHANGE_LOCALE } from '../constants/actionTypes';

export const initialState = {
  locale: 'ar',
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case CHANGE_LOCALE: return updateObject( state,{ locale : action.locale})
    default:
      return state;  
  }
}

export default languageProviderReducer;

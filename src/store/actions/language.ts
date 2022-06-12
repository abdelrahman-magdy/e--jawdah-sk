import { CHANGE_LOCALE } from '../constants/actionTypes';

export function changeLocale(languageLocale:String) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
import { combineReducers } from "redux";

// reducers
import languageProviderReducer from "./reducers/languageProviderReducer";

const rootReducer = combineReducers({
    language: languageProviderReducer,
});

export default  rootReducer

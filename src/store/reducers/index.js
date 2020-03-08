import { combineReducers } from 'redux';
import {loaderReducer,genericPopupReducer,successReducer, userDataReducer} from "./commonReducers";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    loaderReducer,
    genericPopupReducer,
    successReducer,
    userDataReducer,
    form:formReducer
});
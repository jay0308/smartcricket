import { combineReducers } from 'redux';
import {loaderReducer,genericPopupReducer,successReducer, userDataReducer, scoringReducer} from "./commonReducers";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    loaderReducer,
    genericPopupReducer,
    successReducer,
    userDataReducer,
    form:formReducer,
    scoringReducer
});
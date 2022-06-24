import { combineReducers } from "redux";

import LoginReducer from '../reducers/reducer'

//yaha loginReducer ma karli bracket ha, es liya combineReducer ka andar ma karlibracket nahi ha
const rootReducer = combineReducers({LoginReducer});
export default rootReducer;

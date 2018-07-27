import numReducer from "./number/reducer"
import { combineReducers } from "redux"
import todoReucer from "./todulist/reducer"
var reducer = combineReducers({
	 num:numReducer,
	 todo:todoReucer
})

export default  reducer;
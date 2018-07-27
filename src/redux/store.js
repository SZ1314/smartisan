import {createStore,applyMiddleware} from "redux";
import reducer from "./reducers"  //合并后的reducer
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk));

export default store;
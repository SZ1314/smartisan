import { combineReducers } from 'redux'
import todoReducer from './todolist/reducer'
import listReducer from '../pages/list/reducer'

var reducer = combineReducers({
	todoReducer,
	listReducer
})

export default reducer